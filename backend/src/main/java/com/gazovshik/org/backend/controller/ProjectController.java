package com.gazovshik.org.backend.controller;

import com.gazovshik.org.backend.model.Project;
import com.gazovshik.org.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value; // Для получения значения из application.properties
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID; // Для генерации уникальных имен файлов

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectRepository projectRepository;
    private final String uploadDir;

    @Autowired
    public ProjectController(ProjectRepository projectRepository, @Value("${file.upload-dir}") String uploadDir) {
        this.projectRepository = projectRepository;
        this.uploadDir = uploadDir;

        try {
            Files.createDirectories(Paths.get(this.uploadDir));
        } catch (IOException e) {
            System.err.println("Could not create upload directory: " + e.getMessage());
            throw new RuntimeException("Failed to create upload directory: " + e.getMessage(), e);
        }
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found with id " + id));
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found with id " + id));

        project.setTitle(projectDetails.getTitle());
        if (projectDetails.getImageUrl() != null && !projectDetails.getImageUrl().isEmpty()) {
            project.setImageUrl(projectDetails.getImageUrl());
        }
        project.setArea(projectDetails.getArea());
        project.setDuration(projectDetails.getDuration());
        project.setLocation(projectDetails.getLocation());
        project.setLink(projectDetails.getLink());

        return projectRepository.save(project);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProject(@PathVariable Long id) {
        Optional<Project> projectOptional = projectRepository.findById(id);
        if (projectOptional.isPresent()) {
            Project project = projectOptional.get();
            if (project.getImageUrl() != null && project.getImageUrl().startsWith("/images/")) {
                try {
                    String fileName = project.getImageUrl().replace("/images/", "");
                    Path filePath = Paths.get(uploadDir).resolve(fileName).normalize();
                    if (Files.exists(filePath)) {
                        Files.delete(filePath);
                        System.out.println("Deleted image file: " + filePath.toString());
                    }
                } catch (IOException e) {
                    System.err.println("Could not delete image file for project " + id + ": " + e.getMessage());
                }
            }
            projectRepository.deleteById(id);
            return ResponseEntity.ok("Project with ID " + id + " has been deleted successfully.");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found with id " + id);
        }
    }

    @PostMapping("/uploadImage")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please select a file to upload.");
        }

        try {
            String originalFileName = file.getOriginalFilename();
            String fileExtension = "";
            if (originalFileName != null && originalFileName.contains(".")) {
                fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
            }
            String uniqueFileName = UUID.randomUUID().toString() + fileExtension;
            Path filePath = Paths.get(uploadDir).resolve(uniqueFileName);

            Files.copy(file.getInputStream(), filePath);

            String fileUrl = "/images/" + uniqueFileName;
            return ResponseEntity.ok(fileUrl);
        } catch (IOException e) {
            System.err.println("Failed to upload image: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image: " + e.getMessage());
        }
    }
}
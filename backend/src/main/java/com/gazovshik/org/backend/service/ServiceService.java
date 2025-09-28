package com.gazovshik.org.backend.service;

import com.gazovshik.org.backend.model.ServiceModel;
import com.gazovshik.org.backend.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ServiceService {

    private final ServiceRepository serviceRepository;

    public List<ServiceModel> getAllServices() {
        return serviceRepository.findAll();
    }

    public Optional<ServiceModel> getServiceById(Long id) {
        return serviceRepository.findById(id);
    }

    public ServiceModel createService(ServiceModel service) {
        return serviceRepository.save(service);
    }

    public ServiceModel updateService(Long id, ServiceModel serviceDetails) {
        ServiceModel service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Услуга с ID " + id + " не найдена"));

        service.setTitle(serviceDetails.getTitle());
        service.setDescription(serviceDetails.getDescription());
        service.setPrice(serviceDetails.getPrice());

        return serviceRepository.save(service);
    }

    public void deleteService(Long id) {
        ServiceModel service = serviceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Услуга с ID " + id + " не найдена"));
        serviceRepository.delete(service);
    }
}

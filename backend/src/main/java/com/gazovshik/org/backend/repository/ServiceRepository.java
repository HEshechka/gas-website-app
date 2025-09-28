package com.gazovshik.org.backend.repository;

import com.gazovshik.org.backend.model.ServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<ServiceModel, Long> {
}

package com.sf.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "leads")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String service;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String message;

    private String status = "New"; // Default status for CRM

    private LocalDateTime createdAt = LocalDateTime.now();
}
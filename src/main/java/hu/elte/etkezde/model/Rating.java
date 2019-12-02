package hu.elte.etkezde.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToMany
    private User user;

    @Column
    private String body;

    @Column (updatable = false)
    @CreationTimestamp
    private LocalDateTime created_at;

    @JsonIgnore
    @ManyToOne
    private Meal meal;
}

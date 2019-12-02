package hu.elte.etkezde.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Rating> ratings;
}

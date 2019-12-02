package hu.elte.etkezde.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String name;

    @Column
    private String description;

//    @Column
//    @NotNull
//    @OneToMany
//    private String ingredients;

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private Discount discount;

    public enum Discount {
        DISCOUNT, NORMALPRICE
    }

    @Column
    @NotNull
    private Integer price;
}


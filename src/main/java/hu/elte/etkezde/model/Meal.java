package hu.elte.etkezde.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

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

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private Discount discount;

    public enum Discount {
        DISCOUNT, NORMALPRICE
    }

//    @OneToMany(mappedBy = "meal")
//    private List<Rating> ratings;

    @Column
    @NotNull
    private Integer price;
}


package hu.elte.etkezde.controller;

import hu.elte.etkezde.model.Meal;
import hu.elte.etkezde.model.Rating;
import hu.elte.etkezde.repository.MealRepository;
import hu.elte.etkezde.repository.RatingRepository;
import hu.elte.etkezde.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/meals")
public class MealController {

    @Autowired
    private MealRepository mealRepository;

//    @Autowired
//    private RatingRepository ratingRepository;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("")
    public Iterable<Meal> getMeals(){return mealRepository.findAll();}

    @Secured({"ROLE_ADMIN"})
    @PostMapping("")
    public ResponseEntity<Meal> addMeal(
            @RequestBody Meal meal
    ) {
        Meal savedMeal = mealRepository.save(meal);
        return ResponseEntity.ok(savedMeal);
    }

    @Secured({ "ROLE_ADMIN" })
    @PatchMapping("/{id}")
    public ResponseEntity<Meal> modifyMeal(
            @PathVariable Integer id,
            @RequestBody Meal meal
    ) {
        Optional<Meal> oMeal = mealRepository.findById(id);
        if (oMeal.isPresent()) {
            if (meal.getDiscount() == null) {
                return ResponseEntity.badRequest().build();
            }
            Meal oldMeal = oMeal.get();
            oldMeal.setName(meal.getName());
            oldMeal.setDiscount(meal.getDiscount());
            oldMeal.setPrice(meal.getPrice());
            oldMeal.setDescription(meal.getDescription());

            Meal savedMeal = mealRepository.save(oldMeal);

            return ResponseEntity.ok(savedMeal);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @Secured({"ROLE_ADMIN"})
    @DeleteMapping("/{id}")
    public ResponseEntity deleteMeal(
            @PathVariable Integer id
    ) {
        try {
            mealRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    @GetMapping("/{id}")
    public ResponseEntity<Meal> getMeal(
            @PathVariable Integer id
    ) {
        Optional<Meal> oMeal = mealRepository.findById(id);
        if (oMeal.isPresent()) {
            return ResponseEntity.ok(oMeal.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @Secured({"ROLE_USER", "ROLE_ADMIN"})
//    @PostMapping("/{id}/ratings")
//    public ResponseEntity<Rating> addRating(
//            @RequestBody Rating rating,
//            @PathVariable Integer id
//    ) {
//        Optional<Meal> oMeal = mealRepository.findById(id);
//        if (oMeal.isPresent()) {
//            Meal meal = oMeal.get();
//            meal.getRatings().add(rating);
//            rating.setMeal(meal);
//            Rating createdMessage = ratingRepository.save(rating);
//            return ResponseEntity.ok(createdMessage);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
}

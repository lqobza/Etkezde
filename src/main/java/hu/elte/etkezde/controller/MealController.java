package hu.elte.etkezde.controller;

import hu.elte.etkezde.model.Meal;
import hu.elte.etkezde.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/meal")
public class MealController {

    @Autowired
    private MealRepository mealRepository;

    @GetMapping("")
    public Iterable<Meal> getMeals(){return mealRepository.findAll();}

    @PostMapping("")
    public ResponseEntity<Meal> addMeal(
            @RequestBody Meal meal
    ) {
        Meal savedMeal = mealRepository.save(meal);
        return ResponseEntity.ok(savedMeal);
    }

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
}

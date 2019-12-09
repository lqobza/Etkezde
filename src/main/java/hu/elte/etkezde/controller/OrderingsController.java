package hu.elte.etkezde.controller;

import hu.elte.etkezde.model.Meal;
import hu.elte.etkezde.repository.MealRepository;
import hu.elte.etkezde.repository.OrderingsRepository;
import hu.elte.etkezde.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class OrderingsController {
//    @Autowired
//    private OrderingsRepository orderingsRepository;
//
//    @Autowired
//    private AuthenticatedUser authenticatedUser;
//
//    @Secured({"ROLE_ADMIN", "ROLE_USER"})
//    @PostMapping("")
//    public ResponseEntity<Meal> addMealToOrder(
//            @RequestBody Meal meal
//    ) {
//        Meal savedMeal = orderingsRepository.save(meal);
//        return ResponseEntity.ok(savedMeal);
//    }
}

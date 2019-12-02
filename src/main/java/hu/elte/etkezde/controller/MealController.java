package hu.elte.etkezde.controller;

import hu.elte.etkezde.model.Meal;
import hu.elte.etkezde.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/meal")
public class MealController {

    @Autowired
    private MealRepository mealRepository;

    @GetMapping("")
    public Iterable<Meal> getMeals(){return mealRepository.findAll();}
}

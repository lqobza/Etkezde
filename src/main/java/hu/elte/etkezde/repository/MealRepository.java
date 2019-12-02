package hu.elte.etkezde.repository;

import hu.elte.etkezde.model.Meal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends CrudRepository<Meal,Integer> {
    Iterable<Meal> findAllByName(String name);
}

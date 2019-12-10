package hu.elte.etkezde.repository;

import hu.elte.etkezde.model.Cart;
import hu.elte.etkezde.model.Meal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository  extends CrudRepository<Meal, Integer> {
}

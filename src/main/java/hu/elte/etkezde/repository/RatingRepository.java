package hu.elte.etkezde.repository;

import hu.elte.etkezde.model.Rating;
import org.springframework.data.repository.CrudRepository;

public interface RatingRepository extends CrudRepository<Rating, Integer> {
}

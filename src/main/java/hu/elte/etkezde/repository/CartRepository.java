package hu.elte.etkezde.repository;

import hu.elte.etkezde.model.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository  extends CrudRepository<Cart, Integer> {
}

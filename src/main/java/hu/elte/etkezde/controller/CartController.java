package hu.elte.etkezde.controller;

import hu.elte.etkezde.model.Cart;
import hu.elte.etkezde.model.Meal;
import hu.elte.etkezde.repository.CartRepository;
import hu.elte.etkezde.repository.UserRepository;
import hu.elte.etkezde.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/{username}")
    public Cart getCart(
            @PathVariable String username
    ){
        Optional<Cart> oCart=cartRepository.findById(userRepository.findByUsername(username).get().getId());
        return oCart.get();
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PostMapping("/{username}")
    public ResponseEntity<Cart> addToCart(
            @PathVariable String username,
            @RequestBody Meal meal
    ) {
        Optional<Cart> oCart=cartRepository.findById(userRepository.findByUsername(username).get().getId());
        Cart newCart = oCart.get();
        List<Meal> oldMealList=oCart.get().getMealList();
        oldMealList.add(meal);
        newCart.setMealList(oldMealList);
        Cart savedCart=cartRepository.save(newCart);
        return ResponseEntity.ok(savedCart);
    }


//    @Secured({"ROLE_USER", "ROLE_ADMIN" })
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Meal> deleteMealFromCart(
//            @PathVariable int id
//    ) {
//        try {
//            Optional<Cart> oCart=cartRepository.findById(id);
//            cartRepository.getMealList().delete(oCart.get());
//            return ResponseEntity.ok().build();
//        } catch (Exception e) {
//            System.out.println(e.toString());
//            return ResponseEntity.notFound().build();
//        }
//    }
}

package hu.elte.etkezde.security;

import hu.elte.etkezde.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;


@RequestScope
@Component
@Data
@NoArgsConstructor
public class AuthenticatedUser {
    private User user;
}

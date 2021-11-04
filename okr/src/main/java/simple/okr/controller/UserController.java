package simple.okr.controller;



import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import simple.okr.dto.UserLoginDTO;

@Controller
@RequestMapping("/user")
public class UserController {
    
    
    @GetMapping("/greet/{username}")
    public ResponseEntity<String> Greet(@PathVariable String username)
    {
        return ResponseEntity.ok("Welcome " + username);
    }

    @PostMapping("login")
    public ResponseEntity<Object> Login(@RequestBody UserLoginDTO requestUserLogin)
    {
        String username = requestUserLogin.getUsername();
        String password = requestUserLogin.getPassword();
        if (!username.equals("example") || !password.equals("example"))
        {
            return ResponseEntity.badRequest().build();
        } else
        {
            return ResponseEntity.ok("Welcome " + username);
        }
    }
}

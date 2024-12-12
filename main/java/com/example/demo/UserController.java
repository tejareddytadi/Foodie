package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        // Save user to the database
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    // Login a user
    /*@PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User foundUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (foundUser != null) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }*/
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        System.out.println("Login Attempt: Email = " + user.getEmail() + ", Password = " + user.getPassword());

        User foundUser = userRepository.findByEmail(user.getEmail());
        if (foundUser != null) {
            System.out.println("Database Password: " + foundUser.getPassword());
            System.out.println("Input Password: " + user.getPassword());

            // Compare passwords manually
            if (foundUser.getPassword().equals(user.getPassword())) {
                System.out.println("Password matched!");
                return ResponseEntity.ok("Login successful!");
            } else {
                System.out.println("Password mismatch!");
                return ResponseEntity.status(401).body("Invalid email or password");
            }
        } else {
            System.out.println("User not found!");
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }

}

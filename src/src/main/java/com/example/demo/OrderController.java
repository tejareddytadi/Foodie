package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:4200") // Allow requests from Angular
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/place-order")
    public ResponseEntity<String> placeOrder(@RequestBody Order order) {
        orderRepository.save(order);
        return ResponseEntity.ok("Order placed successfully!");
    }
}

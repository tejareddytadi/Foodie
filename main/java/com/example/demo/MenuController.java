package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular
public class MenuController {

    @Autowired
    private MenuItemRepository menuItemRepository;

    // Fetch all menu items
    @GetMapping
    public List<MenuItem> getMenuItems() {
        return menuItemRepository.findAll();
    }

    // Add a new menu item (for manual addition if needed)
    @PostMapping
    public MenuItem addMenuItem(@RequestBody MenuItem menuItem) {
        return menuItemRepository.save(menuItem);
    }
}

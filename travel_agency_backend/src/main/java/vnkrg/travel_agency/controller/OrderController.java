package vnkrg.travel_agency.controller;

import org.springframework.web.bind.annotation.*;
import vnkrg.travel_agency.domain.Order;
import vnkrg.travel_agency.repo.OrderRepo;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/orders")
public class OrderController {
    private final OrderRepo orderRepo;

    public OrderController(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @GetMapping
    public List<Order> list() {
        return orderRepo.findAll();
    }

    @PostMapping
    public Order add(@RequestBody Order order) {
        order.setDateOfIssue(LocalDateTime.now());
        return orderRepo.save(order);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Order order) {
        orderRepo.delete(order);
    }
}

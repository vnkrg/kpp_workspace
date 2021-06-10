package vnkrg.travel_agency.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import vnkrg.travel_agency.domain.Order;

public interface OrderRepo extends JpaRepository<Order, Integer> {
}

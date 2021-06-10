package vnkrg.travel_agency.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import vnkrg.travel_agency.domain.Tour;

public interface TourRepo extends JpaRepository<Tour, Integer> {
}

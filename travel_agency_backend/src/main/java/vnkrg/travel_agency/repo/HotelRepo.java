package vnkrg.travel_agency.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import vnkrg.travel_agency.domain.Hotel;

public interface HotelRepo extends JpaRepository<Hotel, Integer> {
}

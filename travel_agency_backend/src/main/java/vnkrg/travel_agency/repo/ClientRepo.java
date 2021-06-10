package vnkrg.travel_agency.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import vnkrg.travel_agency.domain.Client;

public interface ClientRepo extends JpaRepository<Client, Integer> {
}

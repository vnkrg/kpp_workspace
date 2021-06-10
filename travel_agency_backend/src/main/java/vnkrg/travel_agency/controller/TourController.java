package vnkrg.travel_agency.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vnkrg.travel_agency.domain.Tour;
import vnkrg.travel_agency.repo.TourRepo;

import java.util.List;

@RestController
@RequestMapping("api/tours")
public class TourController {
    private final TourRepo tourRepo;

    @Autowired
    public TourController(TourRepo tourRepo) {
        this.tourRepo = tourRepo;
    }

    @GetMapping
    public List<Tour> list() {
        return tourRepo.findAll();
    }

    @PostMapping
    public Tour add(@RequestBody Tour tour) {
        return tourRepo.save(tour);
    }

    @PutMapping("{id}")
    public Tour put(
            @PathVariable("id") Tour tourFromDB,
            @RequestBody() Tour tour
    ) {
        BeanUtils.copyProperties(tour, tourFromDB, "id");
        return tourRepo.save(tourFromDB);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Tour tour) {
        tourRepo.delete(tour);
    }
}

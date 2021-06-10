package vnkrg.travel_agency.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vnkrg.travel_agency.domain.Hotel;
import vnkrg.travel_agency.repo.HotelRepo;

import java.util.List;

@RestController
@RequestMapping("api/hotels")
public class HotelController {
    private final HotelRepo hotelRepo;

    @Autowired
    public HotelController(HotelRepo hotelRepo) {
        this.hotelRepo = hotelRepo;
    }

    @GetMapping
    public List<Hotel> list() {
        return hotelRepo.findAll();
    }

    @PostMapping
    public Hotel add(@RequestBody Hotel hotel) {
        return hotelRepo.save(hotel);
    }

    @PutMapping("{id}")
    public Hotel put(
            @PathVariable("id") Hotel hotelFromDB,
            @RequestBody() Hotel hotel
    ) {
        BeanUtils.copyProperties(hotel, hotelFromDB, "id");
        return hotelRepo.save(hotelFromDB);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Hotel hotel) {
        hotelRepo.delete(hotel);
    }
}

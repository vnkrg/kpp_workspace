package vnkrg.lb_2.services;

import vnkrg.lb_2.dao.HotelDao;
import vnkrg.lb_2.models.Hotel;
import vnkrg.lb_2.models.Tour;
import java.util.List;

public class HotelService {
    private HotelDao hotelsDao = new HotelDao();

    public HotelService() {
    }

    public Hotel findHotel(int id) {
        return hotelsDao.findById(id);
    }

    public void saveHotel(Hotel hotel) {
        hotelsDao.save(hotel);
    }

    public void deleteHotel(Hotel hotel) {
        hotelsDao.delete(hotel);
    }

    public void updateHotel(Hotel hotel) {
        hotelsDao.update(hotel);
    }

    public List<Hotel> findAllHotels() {
        return hotelsDao.findAll();
    }

    public Tour findHotelById(int id) {
        return hotelsDao.findTourById(id);
    }
}

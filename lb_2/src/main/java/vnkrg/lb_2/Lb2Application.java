package vnkrg.lb_2;

import vnkrg.lb_2.models.Hotel;
import vnkrg.lb_2.models.Tour;
import vnkrg.lb_2.services.HotelService;

import java.util.Date;

public class Lb2Application {
	public static void main(String[] args) {
		HotelService hotelService = new HotelService();

		Hotel hotel = new Hotel("Some Hotel 1", "Some country", "Some city");
		hotelService.saveHotel(hotel);

		Tour some_tour1 = new Tour(new Date(), 7, 2000);
		hotel.addTour(some_tour1);

		Tour some_tour2 = new Tour(new Date(), 5, 2000);
		hotel.addTour(some_tour2);

		hotelService.updateHotel(hotel);

		System.out.println("RESULT:");
		for (Hotel el : hotelService.findAllHotels())
		{
			System.out.println(el.toString());
		}
	}
}

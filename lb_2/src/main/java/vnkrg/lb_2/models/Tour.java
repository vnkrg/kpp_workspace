package vnkrg.lb_2.models;

import lombok.EqualsAndHashCode;
import lombok.ToString;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tours")
@ToString(of = {"id", "departure_date", "number_of_nights", "tour_cost"})
@EqualsAndHashCode(of = "id")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date departure_date;
    private int number_of_nights;
    private int tour_cost;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id")
    private Hotel hotel;

    public Tour() {
    }

    public Tour(Date departure_date, int number_of_nights, int tour_cost) {
        this.departure_date = departure_date;
        this.number_of_nights = number_of_nights;
        this.tour_cost = tour_cost;
    }

    public Hotel getHotel() { return hotel; }
    public void setHotel(Hotel hotel) { this.hotel = hotel; }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public Date getDepartureDate() {
        return departure_date;
    }
    public void setDepartureDate(Date departureDate) {
        this.departure_date = departureDate;
    }
    public int getNumberOfNights() {
        return number_of_nights;
    }
    public void setNumberOfNights(int numberOfNights) {
        this.number_of_nights = numberOfNights;
    }
    public int getTourCost() {
        return tour_cost;
    }
    public void setTourCost(int tourCost) {
        this.tour_cost = tourCost;
    }
}

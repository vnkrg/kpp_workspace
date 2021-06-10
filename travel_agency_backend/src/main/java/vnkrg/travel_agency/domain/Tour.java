package vnkrg.travel_agency.domain;

import lombok.EqualsAndHashCode;
import lombok.ToString;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "tours")
@ToString(of = {"id", "hotel_id", "departure_date", "number_of_nights", "number_of_persons", "tour_cost"})
@EqualsAndHashCode(of = "id")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int hotel_id;
    private Date departure_date;
    private int number_of_nights;
    private int number_of_persons;
    private int tour_cost;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getHotelID() {
        return hotel_id;
    }
    public void setHotelID(int hotelID) {
        this.hotel_id = hotelID;
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
    public int getNumberOfPersons() {
        return number_of_persons;
    }
    public void setNumberOfPersons(int numberOfPersons) {
        this.number_of_persons = numberOfPersons;
    }
    public int getTourCost() {
        return tour_cost;
    }
    public void setTourCost(int tourCost) {
        this.tour_cost = tourCost;
    }
}

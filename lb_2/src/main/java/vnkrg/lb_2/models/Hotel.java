package vnkrg.lb_2.models;

import lombok.EqualsAndHashCode;
import lombok.ToString;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "hotels")
@EqualsAndHashCode(of = "id")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String hotel_name;
    private String country;
    private String city;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Tour> tours;

    public Hotel() {}

    public Hotel(String hotel_name, String country, String city)
    {
        this.hotel_name = hotel_name;
        this.country = country;
        this.city = city;
        tours = new ArrayList<>();
    }

    public void addTour(Tour tour) {
        tour.setHotel(this);
        tours.add(tour);
    }

    public void removeTour(Tour tour) {
        tours.remove(tour);
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getHotelName() { return hotel_name; }
    public void setHotelName(String hotel_name) { this.hotel_name = hotel_name; }
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    @Override
    public String toString() {
        return "models.Hotel{" +
                "id=" + id +
                ", hotel_name='" + hotel_name +
                ", country=" + country +
                ", city=" + country +
                '}';
    }
}

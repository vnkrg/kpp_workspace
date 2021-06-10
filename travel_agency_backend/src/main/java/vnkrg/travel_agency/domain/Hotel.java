package vnkrg.travel_agency.domain;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "hotels")
@ToString(of = {"hotel_name", "country", "city", "description"})
@EqualsAndHashCode(of = "id")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String hotel_name;
    private String country;
    private String city;
    private String description;

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getHotelName() { return hotel_name; }
    public void setHotelName(String hotel_name) { this.hotel_name = hotel_name; }
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}

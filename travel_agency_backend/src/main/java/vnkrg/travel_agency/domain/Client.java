package vnkrg.travel_agency.domain;

import lombok.EqualsAndHashCode;
import lombok.ToString;
import javax.persistence.*;

@Entity
@Table(name = "clients")
@ToString(of = {"id", "first_name", "family_name", "middle_name", "phone", "address"})
@EqualsAndHashCode(of = "id")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String first_name;
    private String middle_name;
    private String family_name;
    private String phone;
    private String address;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getFirstName() {
        return first_name;
    }
    public void setFirstName(String first_name) {
        this.first_name = first_name;
    }
    public String getMiddleName() {
        return middle_name;
    }
    public void setMiddleName(String middle_name) {
        this.middle_name = middle_name;
    }
    public String getFamilyName() {
        return family_name;
    }
    public void setFamilyName(String family_name) {
        this.family_name = family_name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
}

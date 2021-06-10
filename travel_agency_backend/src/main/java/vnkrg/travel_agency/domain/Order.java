package vnkrg.travel_agency.domain;

import lombok.EqualsAndHashCode;
import lombok.ToString;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
@ToString(of = {"id", "tour_id", "client_id", "date_of_issue"})
@EqualsAndHashCode(of = "id")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int tour_id;
    private int client_id;
    private LocalDateTime date_of_issue;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getTourID() {
        return tour_id;
    }
    public void setTourID(int tour_id) {
        this.tour_id = tour_id;
    }
    public int getClientID() {
        return client_id;
    }
    public void setClientID(int client_id) {
        this.client_id = client_id;
    }
    public LocalDateTime getDateOfIssue() {
        return date_of_issue;
    }
    public void setDateOfIssue(LocalDateTime date_of_issue) {
        this.date_of_issue = date_of_issue;
    }
}

package vnkrg.travel_agency.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import vnkrg.travel_agency.domain.Client;
import vnkrg.travel_agency.repo.ClientRepo;

import java.util.List;

@RestController
@RequestMapping("api/clients")
public class ClientController {
    private final ClientRepo clientRepo;

    @Autowired
    public ClientController(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    @GetMapping
    public List<Client> list() {
        return clientRepo.findAll();
    }

    @PostMapping
    public Client add(@RequestBody Client client) {
        return clientRepo.save(client);
    }

    @PutMapping("{id}")
    public Client put(
            @PathVariable("id") Client clientFromDB,
            @RequestBody() Client client
    ) {
        BeanUtils.copyProperties(client, clientFromDB, "id");
        return clientRepo.save(clientFromDB);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Client client) {
        clientRepo.delete(client);
    }
}

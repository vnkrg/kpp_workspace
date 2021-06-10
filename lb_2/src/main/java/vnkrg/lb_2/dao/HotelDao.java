package vnkrg.lb_2.dao;

import vnkrg.lb_2.models.Hotel;
import vnkrg.lb_2.models.Tour;
import vnkrg.lb_2.utils.HibernateSessionFactoryUtil;

import org.hibernate.Session;
import org.hibernate.Transaction;
import java.util.List;

public class HotelDao {
    public Hotel findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Hotel.class, id);
    }

    public void save(Hotel hotel) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(hotel);
        tx1.commit();
        session.close();
    }

    public void update(Hotel hotel) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(hotel);
        tx1.commit();
        session.close();
    }

    public void delete(Hotel hotel) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(hotel);
        tx1.commit();
        session.close();
    }

    public Tour findTourById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(Tour.class, id);
    }

    public List<Hotel> findAll() {
        List<Hotel> hotels = (List<Hotel>)  HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("From Hotel").list();
        return hotels;
    }
}

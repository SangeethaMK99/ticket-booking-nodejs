const DbConfig=require('../library/db')

async function searchBus(startingPoint,endPoint,scheduledate){

    const db= DbConfig.makeDb()                                
    console.log(db);
    try{ 
      const availableBus= await db.query(" SELECT p.starting_point,p.stop_points,p.fare_amount,s.date,s.time,s.available_seats,b.name,b.category,b.total_seats,p.destination FROM schedule as s JOIN route as r  ON s.route_id= r.id JOIN places as p ON p.id=r.places_id JOIN bus as b ON b.id=r.bus_id WHERE p.starting_point=? AND p.destination=? AND s.date=? ",[startingPoint,endPoint,scheduledate])
      return availableBus

    }
      catch (err) {
          console.log(err);
          return false
      }
      finally {
          await db.close();
        }  
  }
  module.exports = {searchBus}
  
  
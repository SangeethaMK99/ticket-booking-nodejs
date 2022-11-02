const DbConfig=require('../library/db')

async function busView(id){

    const db= DbConfig.makeDb()
    try{ 
      const busData= await db.query(" SELECT p.starting_point,p.stop_points,p.fare_amount,s.date,s.time,s.available_seats,b.id,b.name,p.destination FROM schedule s JOIN route r  ON s.route_id= r.id JOIN places p ON p.id=r.places_id JOIN bus b ON b.id=r.bus_id WHERE b.id=? ",[id])
      console.log("bus details",busData);
      return busData
    }
      catch (err) {
          console.log(err);
          return false
      }
      finally {
          await db.close();
        }  
  }
  module.exports = {busView}
  
  
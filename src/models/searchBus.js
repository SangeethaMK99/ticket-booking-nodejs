const DbConfig=require('../library/db')

async function searchBus(startingPoint,endPoint,scheduledate){

    const db= DbConfig.makeDb()
    console.log(db);
    try{ 
      const availableBus= await db.query("SELECT places.starting_point,places.stop_points,places.fare_amount,schedule.date,schedule.time,schedule.available_seats,bus.name,bus.total_seats,places.destination FROM schedule JOIN places ON places.id= schedule.route_id JOIN bus ON schedule.route_id=bus.id WHERE places.starting_point=? AND places.destination=? AND schedule.date=? ",[startingPoint,endPoint,scheduledate])
      console.log("availability",availableBus);
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
  
  
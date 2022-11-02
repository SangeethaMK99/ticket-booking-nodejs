const DbConfig=require('../library/db')

async function addBus(name,number,seats,category,startPoint,destination,stopPoint,fare,date,time,availableSeats){
      const db= DbConfig.makeDb()
      try{ 
        console.log("model");
        const busDetails=await db.query("SELECT name,number FROM bus WHERE name=? AND number=? ", [name,number])
        if(busDetails.length==0){
          const bus= await db.query(`INSERT INTO  bus(name,number,total_seats,category)VALUES("${name}","${number}","${seats}","${category}")`)
        }
        const places= await db.query(`INSERT INTO  places(starting_point,destination,stop_points,fare_amount)VALUES("${startPoint}","${destination}","${stopPoint}","${fare}")`)
        const busidData=await db.query("SELECT id FROM bus WHERE name=?",[name])
        const busId=busidData[0].id
        console.log("busid",busId);
        const placeidData =await db.query("SELECT id FROM places WHERE starting_point=? AND destination=? AND stop_points=?",[startPoint,destination,stopPoint])
        const placesId=placeidData[0].id
        const route=await db.query(`INSERT INTO  route(places_id,bus_id)VALUES("${placesId}","${busId}")`)
        const routeidData=await db.query("SELECT id FROM route WHERE places_id=? AND bus_id=?",[placesId, busId])
        const routeId=routeidData[0].id
        const schedule=await db.query(`INSERT INTO  schedule(route_id,date,time,available_seats)VALUES("${routeId}","${date}","${time}","${availableSeats}")`)
      }
        catch (err) {
            console.log(err);
            return false
        }
        finally {
                await db.close();
              }         
}
module.exports={addBus}

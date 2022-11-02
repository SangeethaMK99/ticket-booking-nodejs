const DbConfig=require('../library/db')

async function editBus(id,destination,date,time){

      const db= DbConfig.makeDb()
      console.log("dbbbbbbbb",db);
      try{ 
        console.log("model");
        const place= await db.query(" SELECT p.id FROM schedule s JOIN route r  ON s.route_id= r.id JOIN places p ON p.id=r.places_id JOIN bus b ON b.id=r.bus_id WHERE b.id=? AND date=? AND time=? ",[id,date,time])
        console.log(".......place",place);
        const placeId=place[0].id
        console.log(".......placeid",placeId);
        const editBusData= await db.query("UPDATE  places SET   destination = ?   WHERE id=? ",[destination,placeId] )
        console.log(editBusData);
        return editBusData
      }
        catch (err) {
            console.log(err);
            return false
        }
        finally {
                await db.close();
              }         
}
module.exports={editBus}



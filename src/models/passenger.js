
const DbConfig=require('../library/db')

async function passenger(name,email,phone,startPoint,stopPoint,busName,date,time,fare){

      const db= DbConfig.makeDb()
      try{ 
        console.log("model"); 
        const passengerDetails=await db.query("SELECT name,email_address FROM passenger WHERE name=? AND email_address=? ", [name,email])
        if(passengerDetails.length==0){
           const passengerData= await db.query(`INSERT INTO  passenger(name,email_address,phone_no)VALUES("${name}","${email}","${phone}")`)
            console.log(passengerData);
          }
        const passengerId=await db.query("SELECT id FROM passenger WHERE email_address=?",[email])
        console.log("passenger id",passengerId);
        const passenger=passengerId.map((ele)=> ele.id)
        console.log(passengerId);
        const bookData= await db.query(`INSERT INTO  book_ticket(passenger_id,starting_point,stop_point,bus_name,date,time,bus_fare)VALUES("${passenger}","${startPoint}","${stopPoint}","${busName}","${date}","${time}","${fare}")` )
        const seatData= await db.query ("UPDATE schedule SET available_seats = available_seats-1 WHERE available_seats>0 AND bus_name=? AND date=? AND time=?",[busName,date,time])
        console.log(passengerDetails);
        console.log(seatData);
        return passengerId

      }
        catch (err) {
            console.log(err);
            return false
        }
        finally {
                await db.close();
              }
         
}
module.exports={passenger}

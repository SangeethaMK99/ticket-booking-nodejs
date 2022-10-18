const DbConfig=require('../library/db')

async function ViewTickets(){

    const db= DbConfig.makeDb()
    try{ 
     const tickets=await db.query(" Select name,email_address,phone_no,bus_name,date,time,starting_point,stop_point,bus_fare FROM book_ticket JOIN passenger ON passenger.id=book_ticket.passenger_id")
    console.log("tickets",tickets);
    return tickets

    }
      catch (err) {
          console.log(err);
          return false
      }
      finally {
          await db.close();
        }  
  }
module.exports = {ViewTickets}
  

  
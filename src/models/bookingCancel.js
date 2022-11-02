const DbConfig=require('../library/db')

async function bookingCancel(date,destination,id){

      const db= DbConfig.makeDb()
      try{ 
        console.log("model");
        const cancelTicket= await db.query("DELETE FROM  book_ticket WHERE  date=? AND  stop_point=? AND passenger_id=? ",[date,destination,id] )
        console.log("...............cancel",cancelTicket);
        return cancelTicket
      }
        catch (err) {
            console.log(err);
            return false
        }
        finally {
                await db.close();
              }         
            }
module.exports={bookingCancel}


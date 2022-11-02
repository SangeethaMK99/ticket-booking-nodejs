const DbConfig=require('../library/db')

async function bus(){

    const db= DbConfig.makeDb()
    console.log(DbConfig);
    try{ 
      console.log("model")
      const bus=await db.query("SELECT *FROM bus" )
      return bus
    }
      catch (err) {
          console.log(err);
          return false
      }
      finally {
          await db.close();
        }  
  }
module.exports ={bus}

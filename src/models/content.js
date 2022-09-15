const DbConfig=require('../library/db')

async function placeCard(){

    const db= DbConfig.makeDb()
    // console.log(DbConfig);
    try{ 
      // console.log("model")
      const places= await db.query("SELECT * FROM place_card" )
      // console.log(places);
      return places
    }
      catch (err) {
          console.log(err);
          return false
      }
      finally {
          await db.close();
        }  
  }
module.exports = {placeCard}
  

  
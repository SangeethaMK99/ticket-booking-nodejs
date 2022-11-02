const DbConfig=require('../library/db')

async function placeCard(){

    const db= DbConfig.makeDb()
    try{ 
      const places= await db.query("SELECT * FROM place_card" )
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
  

  
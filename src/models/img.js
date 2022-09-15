const DbConfig=require('../library/db')

async function img(){

    const db= DbConfig.makeDb()
    console.log(DbConfig);
    try{ 
      console.log("model")
      const img=await db.query("SELECT name FROM images" )
      console.log(img);
      return img
    }
      catch (err) {
          console.log(err);
          return false
      }
      finally {
          await db.close();
        }  
  }
module.exports ={img}

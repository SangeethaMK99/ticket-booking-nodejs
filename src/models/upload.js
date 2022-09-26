const DbConfig=require('../library/db')

async function upload(upload){

      const db= DbConfig.makeDb()
      try{ 
        console.log("model");
        const img= await db.query(`INSERT INTO  images(name)VALUES("${upload}")`)
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
module.exports={upload}

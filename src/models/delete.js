const DbConfig=require('../library/db')

async function deleteImg(id){

      const db= DbConfig.makeDb()
      try{ 
        console.log("model");
        const deleteImg= await db.query("DELETE FROM images WHERE id=?",[id] )
        return deleteImg
      }
        catch (err) {
            console.log(err);
            return false
        }
        finally {
                await db.close();
              }         
}
module.exports={deleteImg}

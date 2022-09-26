
const DbConfig=require('../library/db')

async function update(update,id){

      const db= DbConfig.makeDb()
      try{ 
        console.log("model");
        const img= await db.query("UPDATE  images SET name = ? WHERE id=?",[update,id] )
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
module.exports={update}



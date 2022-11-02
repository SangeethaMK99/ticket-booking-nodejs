const DbConfig=require('../library/db')

async function passengerHelp(name,phone){

      const db= DbConfig.makeDb()
      try{ 
        console.log("model");
          const customerHelp = await db.query(`INSERT INTO  help(name,phone)VALUES("${name}","${phone}")`)       
        
        return customerHelp
      }
        catch (err) {
            console.log(err);
            return false
        }
        finally {
                await db.close();
              }
         
}
module.exports={passengerHelp}

const DbConfig=require('../library/db')

async function signup(username,email,password){

      const db= DbConfig.makeDb()
      try{ 
        console.log("model");
        const reg= await db.query(`INSERT INTO  signup(username,email,password)VALUES("${username}","${email}","${password}")`)
        // console.log(reg);
        return true
      }
        catch (err) {
            console.log(err);
            return false
        }
        finally {
                await db.close();
              }
         
}


async function signin(username,password){

  const db= DbConfig.makeDb()
  try{ 
    const signin= await db.query("SELECT username, password FROM signup where username=? AND password=?",[username,password])
    // console.log(signin);
    return signin

  }
    catch (err) {
        console.log(err);
        return false
    }
    finally {
        await db.close();
      }  
}
module.exports = {signup,signin}












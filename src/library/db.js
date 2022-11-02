const util = require( 'util' );
const mysql=require('mysql')
require('dotenv').config()

function makeDb(){
       const config={
            host:process.env.HOST,
            database:process.env.DB_NAME,
            user:process.env.DB_USER,
            password:process.env.DB_password

}
  const connection = mysql.createConnection(config);
  console.log("connected");
  return {
    query( sql, args ) {
      return util.promisify( connection.query )
        .call( connection, sql, args );
    },
    close(){
      return util.promisify( connection.end ).call( connection );
    }
  }

  }
module.exports={makeDb}












































































































const { MongoClient}  = require('mongodb')

let dbConnection


module.exports = {
connectToDb: (cb) => {
    MongoClient.connect('mongodb://localhost:27017/MujeresViajeras')
    .then((client)=> {
        dbConnection = client.db()
        return cb()
        console.log('success')
    })
    .catch(err=>{
        console.log(err)
        return cb(err)
    })
},
getDb: () => dbConnection
}

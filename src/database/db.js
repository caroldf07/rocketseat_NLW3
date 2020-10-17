const db = require('sqlite-async')

//create table (clomuns and rows)
function execute(db){
   return db.exec(`
        CREATE TABLE IF NOT EXISTS schools (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            open_hour TEXT,
            open_weekends TEXT
        );
    `)
}


module.exports = db.open(__dirname+'/database.sqlite').then(execute)

const dataBase = require("./database/db");
const saveSchool = require("./database/saveSchool");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async schools(req, res) {
    try {
      const db = await dataBase;
      const schools = await db.all("SELECT * FROM schools");
      return res.render("schools", { schools });
      
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados");
    }
  },

  async school(req, res) {
    const id = req.query.id;
    try {
        const db = await dataBase;
        const results = await db.all(`SELECT * FROM schools WHERE id=${id}`);
        const school = results[0]

        school.images = school.images.split(",")
        school.firsImage = school.images[0]

        school.open_weekends == "0" ? false : true

        return res.render("school", { school: results[0] });
      } catch (error) {
        console.log(error);
        return res.send("Erro no banco de dados");
      }
  },

  createSchool(req, res) {
    return res.render("create-school");
  },

  async saveSchool(req,res){
    const fields = req.body

    //check if is all filled

    // if(Object.values(fields).includes('')){
    //   return res.send("Todos os campos devem ser preenchidos")
    // }

    //save school
    try {
      const db = await dataBase
      await saveSchool(db,{
        lat:fields.lat,
        lng:fields.lng,
        name:fields.name,
        about:fields.about,
        whatsapp:fields.whatsapp,
        images:fields.images.toString(),
        instructions:fields.instructions,
        open_hour: fields.open_hour,
        open_weekends: fields.open_weekends

      })
          //redirect
          return res.redirect('/schools')
    } catch (error) {
      console.log(error)
      return res.send("Erro no banco de dados!")
    }
  }
};

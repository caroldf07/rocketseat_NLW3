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
};

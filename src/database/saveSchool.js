const db = require("./db");

function saveSchool(
  db,
  { lat, lng, name, about, images, instructions, open_hour, open_weekends }
) {
  return db.run(`
    INSERT INTO schools (
        lat,
        lng,
        name,
        about,
        images,
        instructions,
        open_hour,
        open_weekends
    ) VALUES (
        "${lat}",
        "${lng}",
        "${name}",
        "${about}",
        "${images}",
        "${instructions}",
        "${open_hour}",
        "${open_weekends}"

    );
    `);
}

module.exports = saveSchool;

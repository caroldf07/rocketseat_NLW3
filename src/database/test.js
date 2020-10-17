const db = require("./db");
const saveSchool = require("./saveSchool")

db.then(async db => {
  //input data
  await saveSchool(db,{
    /*lat:"-23.5998489",
    lng: "-46.6364337",
    name: "Pakua Santa Cruz",
    about: "Há mais de 10 anos em São Paulo, na capital, o Pa-Kua está presente no bairro da Vila Mariana com a escola Santa Cruz, localizada a uma quadra da estação Santa Cruz do metrô (linha azul), quase em frente ao shopping. Tem fácil acesso também de ônibus e carro pela Av. Domingos de Moraes e conta com espaço interno para deixar bicicleta. Ambiente acolhedor, com tatame amplo, ar condicionado e banheiro com chuveiro, possuímos uma grade de horários diversificada para atender todos os tipos de público.",
    images:[
        "http://localhost:8080/images/escola-1/IMG_2672.JPG?id=1",
        "http://localhost:8080/images/escola-1/IMG_6231%20(1).JPG?id=2",
        "http://localhost:8080/images/escola-1/IMG_9724%20(1).JPG?id=3",
        "http://localhost:8080/images/escola-1/unnamed%20(2).jpg?id=4",
        "http://localhost:8080/images/escola-1/IMG_9730%20(1).JPG?id=5",
        "http://localhost:8080/images/escola-1/unnamed%20(1).jpg?id=6"
    ],
    instructions: "Venha como se sentir a vontade, traga outra muda de roupa específica para a aula e uma máscara extra ",
    open_hour:"Aulas das 08:00 as 21:00 ",
    open_weekends: "0"*/
  })

  //query
    console.log(await db.all("SELECT * FROM schools"))
  /*
  //query a specific school by ID
  const school = await db.all('SELECT * FROM schools WHERE id ="1"')  */

  //delete a specific school by ID
  /*console.log( 
  await db.run('DELETE FROM schools WHERE id = "1"')
  )*/

})

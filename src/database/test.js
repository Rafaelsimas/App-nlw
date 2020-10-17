const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-22.5283723",
    lng: "-41.9510688",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e;ou vuylnerabilidade social.",
    whatsapp: "21996119456",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpHfJSQfzOoCF8MuFaDOAslPAKrteaKa4C6w&usqp=CAU",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwxZdorpzQfaL3WCjX_h21sZ9y5_gJmnr4qA&usqp=CAU",
    ].toString(),

    instructions:
      "Venha quando se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas Das 18 até 20h",
    open_on_weekends: "0",
  });

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE ID = "3"');
  console.log(orphanage);

  // deletar dato da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"));
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});

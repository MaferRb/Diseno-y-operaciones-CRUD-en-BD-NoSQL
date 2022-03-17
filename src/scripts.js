// script de usuario administrador
db.createUser({
    user: "adminActivitiesIbero",
    pwd: "pwdG3n3r1c2022",
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
  })
  
  
  // Scripts de Torneo
  db.Torneo.insertOne({
    fecha_inicio: new Date("2022, 03, 14"),
    fecha_final: new Date("2022, 03, 24")
  })
  
  
  // Scripts de insertar multiples equipos
  db.Equipos.insertMany([
    {
      nombre: "campo alegre", 
      ciudad: "bogota", 
      partidos_jugados: 2, 
      partidos_ganados: 1, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 5, 
      goles_contra: 4
    },
    {
      nombre: "la loma",
      ciudad: "bogota", 
      partidos_jugados: 1, 
      partidos_ganados: 0, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 1, 
      goles_contra: 3
    },
    {
      nombre: "El Ingenio",
      ciudad: "bogota", 
      partidos_jugados: 3,
      partidos_ganados: 2, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 6, 
      goles_contra: 5
    },
    {
      nombre: "Villa Cafelina",
      ciudad: "bogota", 
      partidos_jugados: 1,
      partidos_ganados: 0, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 1,
      goles_contra: 3
    }
  ])


  // Scripts de eliminar multiples equipos
  db.Equipos.deleteMany({})


  // Scripts de eliminar multiples equipos con un filtro
  db.Equipos.deleteMany({ ciudad: "bogota"})


  // Scripts de insertar arbitros
  db.Arbitros.insertMany(
    [{
      nombre: "Pedro Pablo Pertuz Perez",
      cedula: "1072673627"
    },
    {
      nombre: "Carlos Alberto Pinilla",
      cedula: "1052674672"
    }],
  )


  // Scripts de sacar diferencia de goles por equipos
  db.Equipos.aggregate([
    {
      $addFields : { 
        goles_diferencia : { $subtract: [ { $add: "$goles_favor" }, "$goles_contra" ] } 
      }
    }
  ])


  // Scripts de insertar Jugadores de equipos
  db.Jugadores.insertMany([
    {
      nombre: "carlos gonzales",
      cedula:"32230216", 
      fecha_nacimiento: new Date ("1990, 02, 25"), 
      equipo: "campo alegre",
      posicion: "1", 
      goles_jugador: 1
    }, 
    {
      nombre: "Mauricio molina", 
      cedula: "31260218", 
      fecha_nacimiento: new Date ("2001, 03, 10"), 
      equipo: "la loma", 
      posicion: "2", 
      goles_jugador: 2
    },
    {
      nombre: "marcos torres", 
      cedula: "16230416", 
      fecha_nacimiento: new Date ("1998, 02, 25"), 
      equipo: "campo alegre", 
      posicion: "3", 
      goles_jugador: 0
    },  
    {
      nombre: "Fabio Cortez", 
      cedula: "16250312", 
      fecha_nacimiento: new Date ("1999, 10, 15"), 
      equipo: "Bolívar", 
      posicion: "3", 
      goles_jugador: 3
    }, 
    {
      nombre: "marino valencia", 
      cedula: "16241889", 
      fecha_nacimiento: new Date ("1997, 02, 12"), 
      equipo: "san miguel", 
      posicion: "1", 
      goles_jugador: 3
    }
  ]) 
  
  
  // Scripts de encuentros
  db.Encuentros.insertMany(
    [{
      fecha: new Date("2022, 03, 14"),
      hora: "08:00 A.M",
      equipos: ["El Ingenio", "Villa Cafelina"],
      arbitro: "1072673627",
      resultado: [ 3, 1 ],
      ganador: "El Ingenio"
    },
    {
      fecha: new Date("2022, 03, 14"),
      hora: "10:00 A.M",
      equipos: ["campo alegre", "la loma"],
      arbitro: "1052674672",
      resultado: [ 3, 1 ],
      ganador: "campo alegre"
    }],
  )


  // Scripts Reportar el ranking de los deportistas con mejor rendimiento (Goles jugador)
  db.Jugadores.find().sort( { goles_jugador: -1 } )
  
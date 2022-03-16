// script de usuario administrador
db.createUser({
    user: "adminActivitiesIbero",
    pwd: "pwdG3n3r1c2022",
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
  })
  
  
  // Scripts de Torne
  db.Torneo.insertOne({
    fecha_inicio: new Date("2022, 03, 14"),
    fecha_final: new Date("2022, 03, 24")
  })
  
  
  // Scripts de Equipos
  db.equipos.insertMany(
    [{
      nombre: "campo alegre", 
      ciudad: "bogota", 
      partidos_jugados: 2, 
      partidos_ganados: 1, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 5, 
      goles_contra: 4,
      goles_diferencia: 1
    }],
    [{
      nombre: "la loma",
      ciudad: "bogota", 
      partidos_jugados: 1, 
      partidos_ganados: 0, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 1, 
      goles_contra: 3,
      goles_diferencia: -2
    }],
    [{
      nombre: "El Ingenio",
      ciudad: "bogota", 
      partidos_jugados: 3,
      partidos_ganados: 2, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 6, 
      goles_contra: 5,
      goles_diferencia: 1
    }],
    [{
      nombre: "Villa Cafelina",
      ciudad: "bogota", 
      partidos_jugados: 1,
      partidos_ganados: 0, 
      partidos_empatados: 0, 
      partidos_perdidos: 1, 
      goles_favor: 1,
      goles_contra: 3,
      goles_diferencia: -2
    }]
  )
  
  
  // Scripts de Arbitros
  db.Arbitros.insertMany(
    [{
      nombre: "Pedro Pablo Pertuz Perez",
      cedula: "1072673627"
    }],
    [{
      nombre: "Carlos Alberto Pinilla",
      cedula: "1052674672"
    }],
  )
  
  
  // Scripts de encuentros
  db.Encuentros.insertMany(
    [{
      fecha: new Date("2022, 03, 14"),
      hora: new Timestamp("2022, 03, 14"),
      equipos: ["El Ingenio", "Villa Cafelina"],
      arbitro: "1072673627",
      resultado: [ 3, 1 ],
      ganador: "El Ingenio"
    }],
    [{
      fecha: new Date("2022, 03, 14"),
      hora: new Timestamp("2022, 03, 14"),
      equipos: ["campo alegre", "la loma"],
      arbitro: "1052674672",
      resultado: [ 3, 1 ],
      ganador: "campo alegre"
    }],
  )
  
  
##### Actividad-1 Diseño y operaciones CRUDen Bases de datos NoSQL



<!-- Sección general -->
# Diseño y Operaciones CRUD en Bases de Datos NoSQL

### Requerimientos torneo futbol 9
El torneo de futbol 9, es una actividad para relacionar las comunidades, se espera un sistema de información funcional en la cual se involucren actores tales como deportistas, entrenadores y árbitros.

La denominación del sistema será enmarcada en un administrador de torneos que incluirá los siguiente ítems: programación, ubicación de torneos, notificación en cuanto a cambio de posiciones, información de equipos (entrenadores y jugadores), todo lo anterior ligado al interés de un participante en conocer lo sucedido durante las jornadas de cada torneo.

En el siguiente enlace [*aquí*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/EeL8TL2vYhBOpLl77YtwK2MB-kUbml4zoXj995G10cknFA?target=_blank) se evidenciará la actividad agrupada en un solo video.
<!-- Sección general-->


<!-- Sección María Fernanda Rivas Barrera -->
### Reglas de torneo
> — María Fernanda Rivas Barrera
![img-Reglas](https://user-images.githubusercontent.com/43456634/158320538-c53042a2-6543-4d9c-b3e7-f1a7d3d4e558.png)

[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/EfCBKw8NK9VMnhGdlziQoyoBUCZNuoCTXTSiWu9Z4Z2QLA?target=_blank)
<!-- Sección María Fernanda Rivas Barrera -->



<!-- Sección Holman Stiven Cruz Garcia -->
### Estructura de la base de datos
> — Holman Stiven Cruz Garcia
![img-estructure-DB](https://user-images.githubusercontent.com/43456634/158314744-42c59978-10f6-47d4-873a-76ab5e029f27.png)

[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mcasti40_ibero_edu_co/EXEdChsZgCNPoJYR_-YEhJABrif24eQgxOl_hqtQq86vEg?e=1fWyqn?target=_blank)
<!-- Sección Holman Stiven Cruz Garcia -->



<!-- Sección Miguel Alejandro Castillo Amador -->
### Control de versiones
> — Miguel Alejandro Castillo Amador
![img-control-GIT](https://user-images.githubusercontent.com/43456634/158319563-785f87ff-4fe5-422d-ac7c-c04d31ed6aaa.png)

[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mcasti40_ibero_edu_co/Ea8jBB5T-_FBnjsY_ALGGTABoStG4dYUp03nLv-N5JAgfA?e=cMPyq0?target=_blank)
<!-- Sección Miguel Alejandro Castillo Amador -->



---------------------------------------------------------------------------------------------------------------------------------------------------------



##### Actividad 2 - Consultas en Bases de datos NoSQL



<!-- Sección general -->
# Consultas en Bases de datos NoSQL

### Tabla de los encuentros deportivos
![MicrosoftTeams-image](https://user-images.githubusercontent.com/43456634/158748704-d9221175-42b6-4586-80f8-6f142f532897.png)


En el siguiente enlace [*aquí*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/ESk4WhlLbv5Pp5rk_cJ6SvMBTPB0P7hrsoiqfSSjT2A8FQ?target=_blank) se evidenciará la actividad agrupada en un solo video.


Scripts usados para realizar las consultas solicitadas en la actividad:

```
<!-- Crear base de datos -->

    Use myfootballnine
```
<!-- Sección general-->




<!-- Sección Holman Stiven Cruz Garcia -->
### a. Crear el torneo con fechas de inicio y final.

```
    db.Torneo.insertOne({
        fecha_inicio: new Date("2022, 03, 14"),
        fecha_final: new Date("2022, 03, 24")
    })

Ver video, para profundizar en las consultas.
```
### b. Inscribir modificar y eliminar equipos.

```
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
        }
    ])

Ver video, para profundizar en las consultas.
```


> — Holman Stiven Cruz Garcia

![Image_Holman](https://user-images.githubusercontent.com/43456634/158748991-556de815-1d17-4191-8018-2a71ac222dd4.png)

[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/hcruzgar_ibero_edu_co/EcnyTjFzyylEpMgb62gVWW4BFOztIarfa_TAKPK2ARD7Uw?target=_blank)
<!-- Sección Holman Stiven Cruz Garcia -->





<!-- Sección María Fernanda Rivas Barrera -->
### c. Inscribir, modificar y eliminar deportistas a los equipos.

```
    db.Jugadores.insertMany([
        {
          nombre: "carlos gonzales",
          cedula:"32230216", 
          fecha_nacimiento: new Date ("1990, 02, 25"), 
          equipo: "campo alegre",
          posicion: "1", 
          goles_jugador: 1
        }
    ]) 

Ver video, para profundizar en las consultas.
```


### d. Crear, modificar y eliminar encuentros deportivos.

> — María Fernanda Rivas Barrera

![Image_Fernanda](https://user-images.githubusercontent.com/43456634/158748916-d21d2b13-7d09-402c-902e-6f4dccb1cf29.png)

[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/EeNeieyctxJEupf7rJU7KzMBKaGnEsJRkbCsdQk3LbJRQQ?target=_blank)
<!-- Sección María Fernanda Rivas Barrera -->




<!-- Sección Miguel Alejandro Castillo Amador -->
### e. Registrar resultados de los eventos deportivos.

```
    db.Encuentros.insertMany([
        {
          fecha: new Date("2022, 03, 14"),
          hora: "08:00 A.M",
          equipos: ["El Ingenio", "Villa Cafelina"],
          arbitro: "1072673627",
          resultado: [ 3, 1 ],
          ganador: "El Ingenio"
        }
    ])

Ver video, para profundizar en las consultas.
```


### f. Reportar el ranking de los deportistas con mejor rendimiento.

```
    db.Jugadores.find().sort( { goles_jugador: -1 } )
```
> — Miguel Alejandro Castillo Amador

![Image_miguel](https://user-images.githubusercontent.com/43456634/158748794-56c294f5-b40e-42b0-b584-b6a8e8f7db72.png)

[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mcasti40_ibero_edu_co/EeBpwlEEszROtlHZGyp9Ne0BHnaeL3E0VerYb0fPovxCaA?e=yqEYGB?target=_blank)

<!-- Sección Miguel Alejandro Castillo Amador -->




<!-- Sección general footer -->
> ### Todos los derechos son reservados a:
>
> - *María Fernanda Rivas Barrera*
> - *Holman Stiven Cruz Garcia*
> - *Miguel Alejandro Castillo Amador*

<!-- Sección general footer -->

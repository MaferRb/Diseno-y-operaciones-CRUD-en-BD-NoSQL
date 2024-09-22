##### Actividad 6 : Pruebas de particionamiento de bases de datos NoSQL.



<!-- Sección general -->
# Pruebas de particionamiento de bases de datos NoSQL.

### Pruebas de requerimientos No funcionales.
![Screenshot from 2022-04-14 18-44-26](https://user-images.githubusercontent.com/43456634/163494401-5ad48817-3b4e-4344-9b41-7c977ff7cbec.png)


En el siguiente enlace [*aquí*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/EfOrTnQYdQVPg2G89by6-3YBOPXnT4DYVDb9jnNyXqiJKQ) se evidenciará la actividad agrupada en un solo video.
<!-- Sección general -->



<!-- Sección María Fernanda Rivas Barrera -->
> — María Fernanda Rivas Barrera

![Screenshot from 2022-04-14 18-18-35](https://user-images.githubusercontent.com/43456634/163492393-041f1cb7-6b12-437d-8bdc-ff7c4a55c7e7.png)
[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/Efka5DDp9otJh9IfO02WSDgBYNjCLkdBHOFS_s2mRs8P3w)
<!-- Sección María Fernanda Rivas Barrera -->


---------------------------------------------------------------------------------------------------------------------------------------------------------


<!-- Sección Miguel Alejandro Castillo Amador -->
> — Miguel Alejandro Castillo Amador

![Screenshot from 2022-04-14 18-20-47](https://user-images.githubusercontent.com/43456634/163492498-b621dd37-d658-4c12-9c0a-26f9bc9b912e.png)
[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mcasti40_ibero_edu_co/EQ7eGPxOK7xLuCrYvyNTXaABlQkLkgu_E3x1aNjtdMC-lA?e=OVaO9c)
<!-- Sección Miguel Alejandro Castillo Amador -->



---------------------------------------------------------------------------------------------------------------------------------------------------------



##### Actividad 5 - Conceptos y Comandos básicos del particionamiento en bases de datos NoSQL.



<!-- Sección general -->
# Conceptos y Comandos básicos del particionamiento en DB NoSQL.


### Diagrama de particionamiento en MongoDB.
![Screenshot from 2022-04-01 20-47-43](https://user-images.githubusercontent.com/43456634/163492669-51d14af5-c478-4a32-8d4d-a0729527d11c.png)



Algunos scripts utilizados para la realización de la actividad, ya que en el documento enviado en la actividad se encuentra mas desglozado:

- *Creación de replicas, la cual se explica en la actividad 4 (Terminal independiente)* 
```
    mongod --port 27018 --dbpath /var/lib/mongodb/replicate/rs1 --replSet activityReplSet.
```


- *Se iniciará servidor de configuración (Terminal independiente diferente a las del paso 0).*
```
    mongo –port 27018.
```

- *Se iniciará el conjunto de réplicas del servidor de configuración.*
```
   rs.initiate({
    _id: "activityReplSet",
    members: [
        { _id: 0, host: "localhost:27018" },
        { _id: 1, host: "localhost:27019" },
        { _id: 2, host: "localhost:27020" }
        ]
    })
```


- *Se iniciara cada miembro del conjunto de réplicas del servidor de configuración.*
```
    mongod --configsvr --port 27018 --replSet activityReplSet --dbpath /var/lib/mongodb/replicate/rs1 --bind_ip localhost
```

- *Reinicie el conjunto de réplicas como un fragmento.*
```
mongod --shardsvr --port 27021 --replSet activityShard --dbpath /var/lib/mongodb/replicate/shard/shard1 --bind_ip localhost
```

- *Inicie una mongos instancia.*
```
mongos --configdb activityReplSet/localhost:27019,localhost:27018,localhost:27017
```

- *Reinicie el primario con la –shardsvr opción.*
```
mongod --replSet "activityReplSet" --shardsvr --port 27018 --dbpath /var/lib/mongodb/replicate/rs1 --bind_ip localhost
```

- *Baje la primaria y conéctese mongosh al primario y reduzca el primario.*
```
rs.stepDown()
```

- *Volver a reiniciar el primario con la –shardsvr opción.*
```
mongod --replSet "activityReplSet" --shardsvr --port 27018 --dbpath /var/lib/mongodb/replicate/rs1 --bind_ip localhost
```

- *Agregar conjunto de réplicas inicial como fragmento.*
```
mongosh localhost:27018/admin
```

- *Agregue el fragmento.*
```
sh.addShard( "activityReplSet/localhost:27018, localhost:27019, localhost:27020" )
```

**Nota:** La actividad se realiza hasta este punto ya que no se ha encontrado solución al error, informando con anticipación a la instructura y autorizando.
<!-- Sección general-->


<!-- Sección María Fernanda Rivas Barrera -->
### Requisitos no funcionales para el particionamiento de la base de datos.

> — María Fernanda Rivas Barrera

![Screenshot from 2022-04-14 18-55-30](https://user-images.githubusercontent.com/43456634/163494901-4d64f1bf-b816-47a2-a039-8629a60ff5e7.png)
<!-- Sección María Fernanda Rivas Barrera -->


----------------------------------------------------------------------------------------------------------


<!-- Sección Miguel Alejandro Castillo Amador -->
### Estrategia de fragmentación.

> — Miguel Alejandro Castillo Amador

![Screenshot from 2022-04-14 18-52-34](https://user-images.githubusercontent.com/43456634/163494731-e33028f2-3daa-4502-8191-a1235b6a8dc3.png)
<!-- Sección Miguel Alejandro Castillo Amador -->



---------------------------------------------------------------------------------------------------------------------------------------------------------



##### Actividad 4 - Pruebas e informe de replicación en Bases de Datos NoSQL.



<!-- Sección general -->
# Pruebas e informe de replicación en BD NoSQL.

### Pruebas de requerimientos No funcionales.
![Screenshot from 2022-04-01 22-32-00](https://user-images.githubusercontent.com/43456634/161364383-b8f3619d-0dd4-4d74-a8cc-bbac03c30ee7.png)

En el siguiente enlace [*aquí*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/ETnWC6yfFHpMlP6YdGEHTy8BVHxWCgrZvl7aeh9l9PbjEg) se evidenciará la actividad agrupada en un solo video.
<!-- Sección general -->



<!-- Sección María Fernanda Rivas Barrera -->
> — María Fernanda Rivas Barrera

![img- capa 1 video](https://user-images.githubusercontent.com/43456634/161363620-4ff007db-4d1f-4a2e-8838-54e143bc3095.png)
[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/personal/mrivasba_ibero_edu_co/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmrivasba%5Fibero%5Fedu%5Fco%2FDocuments%2FCapa%201%20%2D%20Mar%C3%ADa%20Rivas%2Emp4&parent=%2Fpersonal%2Fmrivasba%5Fibero%5Fedu%5Fco%2FDocuments)
<!-- Sección María Fernanda Rivas Barrera -->


---------------------------------------------------------------------------------------------------------------------------------------------------------


<!-- Sección Holman Stiven Cruz Garcia -->
> — Holman Stiven Cruz Garcia

![Screenshot from 2022-04-02 13-24-09](https://user-images.githubusercontent.com/43456634/161396357-62f46ddf-647a-4b9a-a348-80ad71cbb6d7.png)
[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mcasti40_ibero_edu_co/EdnzR16Xv4lLtoB1twGIAU8BX9GKc7dmnp3Yo8DES9bjWg?e=ig9BQ2)
<!-- Sección Holman Stiven Cruz Garcia -->

---------------------------------------------------------------------------------------------------------------------------------------------------------


<!-- Sección Miguel Alejandro Castillo Amador -->
> — Miguel Alejandro Castillo Amador

![Screenshot from 2022-04-02 13-27-30](https://user-images.githubusercontent.com/43456634/161396441-aef614f7-032d-4146-927b-5cb6bbf95616.png)

[*Clic aquí para ver video*](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_ibero_edu_co/ER_CsK-ENsVHpRKv3MyC970B59kYy6gN2d0JyHFhC2Ha8w)
<!-- Sección Miguel Alejandro Castillo Amador -->



---------------------------------------------------------------------------------------------------------------------------------------------------------



##### Actividad 3 - Conceptos y comandos básicos de la replicación en bases de datos NoSQL.



<!-- Sección general -->
# Conceptos básicos de la replicación en bases de datos NoSQL.


### Diagrama de replicación en MongoDB.
![Screenshot from 2022-04-01 20-47-43](https://user-images.githubusercontent.com/43456634/161360951-889cbdf6-a8df-44c0-9b39-6795af3c0872.png)



Scripts usados para la realización de la actividad:

- *Crear los directorios de datos necesarios para cada miembro.* 
```
    mkdir -p /srv/mongodb/rs0-0 /srv/mongodb/rs0-1 /srv/mongodb/rs0-2
```


- *Inicie las instancias en sus propias ventanas de shell (levantar los servidores).*
```
    mongod --replSet rs0 --port 27017 --bind_ip localhost,<hostname(s)|ip address(es)> --dbpath /srv/mongodb/rs0-0 --oplogSize 128
```

```
    mongod --replSet rs0 --port 27018 --bind_ip localhost,<hostname(s)|ip address(es)> --dbpath /srv/mongodb/rs0-0 --oplogSize 128
```

```
    mongod --replSet rs0 --port 27019 --bind_ip localhost,<hostname(s)|ip address(es)> --dbpath /srv/mongodb/rs0-0 --oplogSize 128
```


- *Se Conéctara a una de sus mongod instancias a través de mongosh. indicando
instancia y especificando su número de puerto. En aras de la simplicidad y la claridad,
se elige el primero.*
```
    mongosh --port 27017
```

- *En mongosh, utilizaremos rs.initiate() para iniciar el conjunto de réplicas. Se creara
un objeto de configuración de conjunto de réplicas en mongosh el entorno.* **Ejemplo:**
```
    rsconf = {
        _id: "rs0",
        members: [
            {
                _id: 0,
                host: "<hostname>:27017"
            },
            {
                _id: 1,
                host: "<hostname>:27018"
            },
            {
                _id: 2,
                host: "<hostname>:27019"
            }
        ]
    }
    rs.initiate( rsconf )
```
<!-- Sección general-->


<!-- Sección María Fernanda Rivas Barrera -->
### Requisitos no funcionales para la replicacion de la base de datos.

> — María Fernanda Rivas Barrera
![img- requisitos no funcionales ](https://user-images.githubusercontent.com/43456634/161361745-61227df6-db44-406c-aaca-e877fd637043.png)
<!-- Sección María Fernanda Rivas Barrera -->


----------------------------------------------------------------------------------------------------------


<!-- Sección Miguel Alejandro Castillo Amador -->
### Estrategia de replicación.
> — Miguel Alejandro Castillo Amador
> 
![img- estrategia de replicacion](https://user-images.githubusercontent.com/43456634/161361781-86f5a120-50de-4d0c-b52b-ed3208557bcb.png)

<!-- Sección Miguel Alejandro Castillo Amador -->


----------------------------------------------------------------------------------------------------------
<!-- Sección Holman Stiven Cruz Garcia -->
### Scripts de entorno de replicación.
> — Holman Stiven Cruz Garcia


![img-scripts replicacion](https://user-images.githubusercontent.com/43456634/161361818-44b40c9c-e25d-44b5-8114-b740f5626b28.png)


![img-scripts parte dos](https://user-images.githubusercontent.com/43456634/161361828-99a121a8-0892-49d6-8960-f5e4f7d4dbf3.png)
<!-- Sección Holman Stiven Cruz Garcia -->



---------------------------------------------------------------------------------------------------------------------------------------------------------



##### Actividad 2 - Consultas en Bases de datos NoSQL.



<!-- Sección general -->
# Consultas en Bases de datos NoSQL.

### Tabla de los encuentros deportivos.
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



---------------------------------------------------------------------------------------------------------------------------------------------------------



#### Actividad-1 Diseño y operaciones CRUDen Bases de datos NoSQL.



<!-- Sección general -->
# Diseño y Operaciones CRUD en Bases de Datos NoSQL.

### Requerimientos torneo futbol 9.
El torneo de futbol 9, es una actividad para relacionar las comunidades, se espera un sistema de información funcional en la cual se involucren actores tales como deportistas, entrenadores y árbitros.

La denominación del sistema será enmarcada en un administrador de torneos que incluirá los siguiente ítems: programación, ubicación de torneos, notificación en cuanto a cambio de posiciones, información de equipos (entrenadores y jugadores), todo lo anterior ligado al interés de un participante en conocer lo sucedido durante las jornadas de cada torneo.

## Video de Explicación Adicional

[Mira el video](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_estudiante_ibero_edu_co/EfBTPVwkXARHjYu-vbeQxUMBnRx_T93OraEpj89ruFE5xQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=qMyMkS){:target="_blank"}
se evidenciará la actividad agrupada en un solo video.
<!-- Sección general-->



<!-- Sección María Fernanda Rivas Barrera -->
### Reglas de torneo.
> — María Fernanda Rivas Barrera
![img-Reglas](https://user-images.githubusercontent.com/43456634/158320538-c53042a2-6543-4d9c-b3e7-f1a7d3d4e558.png)

[*Clic aquí para ver video*](## Video de Explicación Adicional

## Video de Explicación Adicional

[Mira el video adicional aquí](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_estudiante_ibero_edu_co/EfVv9Y1m39tEu7OZgQdFTMIBPYJfyvl6iuNyqV_cwpJCfw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=jOTPAv){:target="_blank"}

<!-- Sección María Fernanda Rivas Barrera -->



<!-- Sección Holman Stiven Cruz Garcia -->
### Estructura de la base de datos.
> — Holman Stiven Cruz Garcia
![img-estructure-DB](https://user-images.githubusercontent.com/43456634/158314744-42c59978-10f6-47d4-873a-76ab5e029f27.png)

[*Clic aquí para ver video*](## Video de Explicación Adicional

[Mira el video adicional aquí](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_estudiante_ibero_edu_co/EU1_oo3MZtpNoHeuFvm5WdUBmK29sxiZZ2rc5lYaQv4Kxw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=nNBidV)
)
<!-- Sección Holman Stiven Cruz Garcia -->



<!-- Sección Miguel Alejandro Castillo Amador -->
### Control de versiones.
> — Miguel Alejandro Castillo Amador
![img-control-GIT](https://user-images.githubusercontent.com/43456634/158319563-785f87ff-4fe5-422d-ac7c-c04d31ed6aaa.png)

[Mira el video aquí](https://laiberocol-my.sharepoint.com/:v:/g/personal/mrivasba_estudiante_ibero_edu_co/EZP5cpmdwh9BldVKGBDT_O0BA3Ym9pVNgemOqyW4UDocTg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=T7cyEk)

<!-- Sección Miguel Alejandro Castillo Amador -->









<!-- Sección general footer -->
###### *Todos los derechos son reservados a María Fernanda Rivas Barrera - Holman Stiven Cruz Garcia - Miguel Alejandro Castillo Amador*
<!-- Sección general footer -->

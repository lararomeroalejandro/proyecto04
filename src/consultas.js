/* Todos los documentos de la colección */
db.paises.find({})

/* Número de documentos de la colección */
db.paises.find({}).count()

/* Países con densidad de población menor de 100 */
db.paises.find({densidadpob: {$lt:100}})

/* Países con densidad de población mayor a 100 */
db.paises.find({densidadpob: {$gt:100}})

/* Muestra los países con una densidadpob de 16 o 33*/
db.paises.find({densidadpob: {$in: [16, 33]}})

/* Países en los que se habla español y la forma de gobierno es Monarquia Parlamentaria */
db.paises.find({idioma: {$eq:"español"}, formagobierno: {$eq: "Monarquia Parlamentaria"}})

/* Países en los que la densidad de población no es mayor a 110 */
db.paises.find({ densidadpob: {$not: {$gt: 110}}})

/* Muestra los países cuyo nombre empieza por la letra "E"*/
db.paises.find({nombre: {$regex: /^E/}})

/* Muestra los países cuya forma de gobierno termina con las letras "ista" */
db.paises.find({formagobierno: {$regex: /ista/}})

/* Muestra los países los cuales tienen una "O" en el campo "capital", tanto en mayúscula como en minúscula */
db.paises.find({capital: {$regex: /O/i}})
/* Expresado de otra forma: */
db.paises.find({capital: {$regex: /O/, $options: 'i'}})

/* Muestra los países en los que el campo "formagobierno" no empieza por la letra "M" */
db.paises.find({formagobierno: {$not: {$regex: /^M/}}})

/* Muestra los países en los que su capital empieza por una letra (de la que no nos acordamos), continua
con las letras "sl" y termina con otra letra de la que no nos acordamos */
db.paises.find({capital: {$regex: /.sl./i}})

/* Muestra los países cuyo nombre empieza por la letra "J", sigue con un conjunto de letras de las que 
no nos acordamos, continua con la letra "p" y termina con letras que tampoco recordamos */
db.paises.find({nombre: {$regex: /^J.p./, $options: 'mi'}})

/* Muestra en los que su nombre empieza por "C" o en los que la densidadpob es mayor que 120*/
db.paises.find({$or: [{nombre: {$regex: /^C/i}}, {densidadpob: {$gt: 120}}]})

/* Muestra los países en los que su idioma termina con "ñol" y su densidadpob es menor a 100 */
db.paises.find({$and: [{idioma: {$regex: /.ñol/i}}, {densidadpob: {$lt: 100}}]})

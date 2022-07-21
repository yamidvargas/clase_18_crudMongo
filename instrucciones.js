//1º y 2º Insertar Documentos


db.mensajes.insertOne({ email: "Yamid@gmail.com", createdAt: ISODate(), message: "Hola" });
db.mensajes.insertOne({ email: "alexandra@gmail.com", createdAt: ISODate(), message: "Hola como estas" });
db.mensajes.insertOne({ email: "Yamid@gmail.com", createdAt: ISODate(), message: "bien gracias por preguntar?" });
db.mensajes.insertOne({ email: "alexandra@gmail.com", createdAt: ISODate(), message: "que alegriahablar contigo" });
db.mensajes.insertOne({ email: "Yamid@gmail.com", createdAt: ISODate(), message: "igualmente" });
db.mensajes.insertOne({ email: "alexandra@gmail.com", createdAt: ISODate(), message: "a que te dedicas actualemte" });
db.mensajes.insertOne({ email: "Yamid@gmail.com", createdAt: ISODate(), message: "estoy estudiando programacion" });
db.mensajes.insertOne({ email: "alexandra@gmail.com", createdAt: ISODate(), message: "que  genial" });
db.mensajes.insertOne({ email: "Yamid@gmail.com", createdAt: ISODate(), message: "si me a gustaado bastannte" });
db.mensajes.insertOne({ email: "alexandra@gmail.com", createdAt: ISODate(), message: "hablamos luego" });


db.productos.insertOne({ title: "Arroz", price: 120, thumbnail: "url" });
db.productos.insertOne({ title: "Papa", price: 580, thumbnail: "url" });
db.productos.insertOne({ title: "tomate", price: 900, thumbnail: "url" });
db.productos.insertOne({ title: "costilla", price: 1280, thumbnail: "url" });
db.productos.insertOne({ title: "cerdo", price: 1700, thumbnail: "url" });
db.productos.insertOne({ title: "arveja", price: 2300, thumbnail: "url" });
db.productos.insertOne({ title: "Cebolla", price: 2860, thumbnail: "url" });
db.productos.insertOne({ title: "miel de abejas", price: 3350, thumbnail: "url" });
db.productos.insertOne({ title: "Tomate", price: 4320, thumbnail: "url" });
db.productos.insertOne({ title: "Cafe", price: 4990, thumbnail: "url" });

//2º y 3º Crear 2 collections "productos y "mensajes" (crear 10 doc. en c/u) --> db.coll.insert()

db.messages.insert([
    { email: 'jhonatan@gmail.com', date: '18/07/2022 17:00:00', message: 'Hola' },
    { email: 'daniela@gmail.com', date: '18/07/2022 17:01:00', message: 'Hola!' },
    { email: 'jhonatan@gmail.com', date: '18/07/2022 17:02:00', message: 'Como estas?' },
    { email: 'daniela@gmail.com', date: '18/07/2022 17:03:00', message: 'bien, y tu?' },
    { email: 'jhonatan@gmail.com', date: '18/07/2022 17:04:00', message: 'muy bien!' },
    { email: 'daniela@gmail.com', date: '18/07/2022 17:05:00', message: 'ah que bueno' },
    { email: 'jhonatan@gmail.com', date: '18/07/2022 17:06:00', message: 'Estudiaste programacion verdad' },
    { email: 'daniela@gmail.com', date: '18/07/2022 17:08:00', message: 'Estoy en eso' },
    { email: 'jhonatan@gmail.com', date: '18/07/2022 17:09:00', message: 'Genial?' },
    { email: 'daniela@gmail.com', date: '18/07/2022 17:10:00', message: 'Si' }
])
db.products.insert([
    { name: 'celular', price: 149849, thumbnail: 'https://falabella.scene7.com/is/image/FalabellaCO/8958209_1?wid=800&hei=800&qlt=70' },
    { name: 'tablet', price: 4039842, thumbnail: 'https://www.hobbyconsolas.com/noticias/mejores-tablets-jugar-estas-5-son-potentes-te-permiten-jugar-call-duty-fortnite-836377' },
    { name: 'tv', price: 1039849, thumbnail: 'https://panamericana.vteximg.com.br/arquivos/ids/438130-325-325/tv-smart-55-negro-dled-exclusiv-uhd-e55v2ua-7709011593923.jpg?v=637874429433130000' },
    { name: 'lavadora', price: 3588946, thumbnail: 'https://www.lg.com/cac/images/lavadoras-y-secadoras/md07505142/gallery/1100_1.jpg' },
    { name: 'laptop', price: 7898483, thumbnail: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/list-d14.jpg' },
    { name: 'iphone', price: 34865462, thumbnail: 'http://c.files.bbci.co.uk/7A06/production/_115183213_gettyimages-959087710.jpg' },
    { name: 'playstation', price: 156423, thumbnail: 'https://i.ytimg.com/vi/PTGOxqKyE4M/maxresdefault.jpg' },
    { name: 'xbox', price: 4539646, thumbnail: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg' },
    { name: 'camara', price: 2051461, thumbnail: 'https://i.ytimg.com/vi/PTGOxqKyE4M/maxresdefault.jpg' },
    { name: 'kindle', price: 300000, thumbnail: 'https://www.tuexperto.com/wp-content/uploads/2022/02/kindle-paperwhite-signature-edition-01.jpg' }
])

//4º Lista los duscumentos de cada collections
db.productos.countDocuments();
db.mensajes.countDocuments();

//Cantidad de documentos de cada collections
db.products.estimatedDocumentCount()
db.messages.estimatedDocumentCount()

//5 crear crud\\

//a) Agregar un producto mas
db.products.insertOne({ name: 'Puflitos', price: 200, thumbnail: 'https://i.ytimg.com/vi/PTGOxqKyE4M/maxresdefault.jpg' })
    //b) Consultas por nombre específico.
    //- Listar por precios menores a 1000
db.products.find({ price: { $lt: 1000 } }, { _id: 0, name: 1 }).pretty()
    //- Listar por precios entre 1000 y 3000
db.products.find({ $and: [{ price: { $gte: 1000 } }, { price: { $lte: 3000 } }] }, { _id: 0, name: 1 }).pretty()
    //- Listar por precios mayores a 3000
db.products.find({ price: { $gt: 3000 } }, { _id: 0, name: 1 }).pretty()
    //- Consulta que traiga el nombre del 3er producto mas barato
db.products.find({}, { _id: 0, name: 1 }).sort({ price: 1 }).limit(1).skip(2)
    //c) Actualizar todos los productos, agregando el campo stock=100
db.products.updateMany({}, { $set: { stock: 100 } })
    //d) Cambiar el stock=0 los productos con precios mayores a 4000
db.products.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })
    //e) Borrar los productos con precios menos a 1000
db.products.deleteMany({ price: { $lt: 1000 } })


//6º crear usuario"
//a) Agregar un producto mas
db.createUser({
    user: "pepe",
    pwd: "asd456",
    roles: [
        { role: "read", db: "ecommerce" }
    ]
})

//7º Crear user "pepe" clave:asd456 read only
// En el servidor para autenticar --> mongod --auth --dbpath ./base
db.createUser({
    user: "pepe",
    pwd: "asd456",
    roles: [
        { role: "read", db: "ecommerce" }
    ]
})

//mongo -u pepe -p asd456

//8º Creé un user readWrite
db.createUser({
        user: "cesar",
        pwd: "q1w2e3",
        roles: [
            { role: "readWrite", db: "ecommerce" }
        ]
    })
    //9º Creé el user root
db.createUser({
    user: "root",
    pwd: "123456",
    roles: ["root"]
})
Footer
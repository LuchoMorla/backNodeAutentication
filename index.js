const expressModule = require('express');
const app = expressModule();


const faker = require('faker');

const puerto = 6969;

app.get('/', (req, res) => {
    res.send('Hola mi server en express </br> <a href="http://localhost:6969/products">link productos</a>');
});

 /*   // lo que mas vamos a usar es un formato json, por que al final vamos a hacer una API y vamos a comunicar datos a clientes de Frontend o aplicaciones que se encargan de renderizar la informacion,
    //nosotros no vamos a renderizar la informacion, si no que vamos a tener todo el papel de una API
 app.get('/productos', (req, res) => {
    res.json({
        name: 'cuadro Enrique Tabara',
        price: 100000
    });
}); */
// comenzamos a trabajar con los endpoints de la forma correcta segun con la convencion que vimos, los endpoints deberian devolver una lista de productos
// /:  -> los dos putos significan que lo que se va a recibir es un parametro
// puedo definir uno de esos parametros id así(aunque utilizare la convencion ecmascript6) -> const id = req.params.id; cabe recalcar que debe ir talcual como defino en el slash

/* app.get('/productos/:productosId', (req, res) => {
    const { productosId } = req.params;
    res.json({
        productosId,
        name: 'product 2',
        price: 2000
    });
}) */

//Utilizaremos faker para poblar de informacion más consisa a  un catalogo de productos
app.get('/products', (req, res) => {
const products = [];
for (let index = 0; index < 100; index++) {
    products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
    });
}
res.json(products);
});

app.get('/categories/:categoryId/productos/:productosId', (req, res) => {
    const { categoryId, productosId } = req.params;
    res.json({
        categoryId,
        productosId,
    });
})

/*// Vamos a recibir parametros tipo Query*/
app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    } else {
        res.send('OHH!!! No hay parametros');
    }
})

app.listen(puerto, () => {
    console.log('Mi port is ' + puerto)
    console.log(`lestening at http://localhost:${puerto}`)
    console.log(new Date)
/*     lo que es lo mismo que:
    console.log("lestening at http://localhost:" + puerto) */
});
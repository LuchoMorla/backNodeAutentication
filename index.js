const expressModule = require('express');
const app = expressModule();
const puerto = 6969;

app.get('/', (req, res) => {
    res.send('Hola mi server en express </br> <a href="http://localhost:6969/productos">link productos</a>');
});

app.get('/productos', (req, res) => {
    // lo que mas vamos a usar es un formato json, por que al final vamos a hacer una API y vamos a comunicar datos a clientes de Frontend o aplicaciones que se encargan de renderizar la informacion,
    //nosotros no vamos a renderizar la informacion, si no que vamos a tener todo el papel de una API
    res.json({
        name: 'cuadro Enrique Tabara',
        price: 100000
    });
});

app.listen(puerto, () => {
    console.log('Mi port is ' + puerto);
    console.log(`lestening at http://localhost:${puerto}`)
/*     lo que es lo mismo que:
    console.log("lestening at http://localhost:" + puerto) */
});
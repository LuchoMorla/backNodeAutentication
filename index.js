const expressModule = require('express');
const routerApi = require('./routes');
const cors = require('cors');

//Los middlewares del tipo error se deben crear despues de establecer el routing de nuestra aplicacion
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorsHandler');

const app = expressModule();

const puerto = process.env.PORT || 6969;

// implementamos el middleware nativo de express para exportar archivos en formato json
app.use(expressModule.json());

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

routerApi(app);

// implementando CORS para los dominios
const whitelist = ['http://localhost:8080/frontend.html', 'http://localhost:6969/products', 'http://localhost:6969'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitidation, dont do it againo!'));
        }
    }
}
app.use(cors(options));

//Vamos a adicionar los middlewares de correccion de errores, hay que tener mucha delicadeza con el orden de definicion de los errores, el momento en que se los ejecuta, como una cadena
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(puerto, () => {
    console.log('Mi port is ' + puerto)
    console.log(`lestening at http://localhost:${puerto}`)
    console.log(new Date)
/*     lo que es lo mismo que:
    console.log("lestening at http://localhost:" + puerto) */
});
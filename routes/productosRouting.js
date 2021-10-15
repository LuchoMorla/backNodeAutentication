const expressModule = require('express');
const faker = require('faker');

const router = expressModule.Router();

//Utilizaremos faker para poblar de informacion más consisa a  un catalogo de productos
router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        });
    }
    res.json(products);
    });

//ejemplo para que no haya confusion en evitar errores

// Metodo Post:

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    });
});

// Metodo patch para los update, podriamos hacer lo mismo con put pero nos vamos a quedar con patch
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update',
        data: body,
        id,
    });
});

// Metodo delete para los update, podriamos hacer lo mismo con put pero nos vamos a quedar con patch
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Deleted',
        id,
    });
});


    module.exports = router;
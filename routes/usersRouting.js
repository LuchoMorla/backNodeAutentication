const expressModule = require('express');
const router = expressModule.Router();

/*// Vamos a recibir parametros tipo Query*/
router.get('/', (req, res) => {
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

module.exports = router;
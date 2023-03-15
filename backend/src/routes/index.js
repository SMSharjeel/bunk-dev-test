let indexController = require('../controllers/index');
module.exports = (app) => {
    app.route('/expenses')
        .get(indexController.getIndex)
        .post(indexController.postIndex)
    app.route('/calculateExpenses')
        .post(indexController.calculateExpenses)
}
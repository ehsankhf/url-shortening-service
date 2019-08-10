const indexRouter = require('../modules/routes');

module.exports = (app) => {
    app.use('/', indexRouter);
};

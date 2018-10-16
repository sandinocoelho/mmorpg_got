var mongo = require('mongodb');

var connMongo = function (){
    console.log("conexão com mongo");
    db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );

    return db;
};

module.exports = function(){
    return connMongo;
};

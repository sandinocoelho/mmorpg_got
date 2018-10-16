function UsuariosDAO(connection) {
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function (usuario) {
    console.log(usuario);
    this._connection.connect(function (error, mongoclient) {
        mongoclient.collection('usuarios', function (error, collection) {
            collection.insert(usuario);
        });
    });
};


module.exports = function () {
    return UsuariosDAO;
};
module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {
        validacao: {},
        dadosForm: {}
    });
};

module.exports.cadastrar = function (application, req, res) {
    var dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('nome', 'Nome deve ter entre 3 e 50 caracteres').len(3, 50);
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuario deve ter entre 3 e 50 caracteres').len(3, 50);
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha deve ter entre 3 e 50 caracteres').len(3, 50);
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', {
            validacao: erros,
            dadosForm: dadosForm
        });
        return;
    }

    var connection = application.config.dbConnection;

    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);

};
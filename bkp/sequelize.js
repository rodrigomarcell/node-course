const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso...');
}).catch(function (erro) {
    console.log('Falha ao conectar...', erro);
})

const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: 'Qualquer Titulo',
    conteudo: 'QUALQUER CONTEUDO'
})


const Usuario = sequelize.define('usuarios', {
    primeiroNome: {
        type: Sequelize.STRING,
    },

    sobrenome: {
        type: Sequelize.STRING,
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }
});

// Usuario.sync({
//     force: true
// }).then(function (ret) {
//     console.log('=>' + ret);
// });


Usuario.create({
    primeiroNome: 'Rodrigo',
    sobrenome: 'Marcel',
    idade: 30,
    email: 'rodrigomarcell@email.com'
});
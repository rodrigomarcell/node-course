const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const app = express();


app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    // runtimeOptions: {
    //     allowProtoPropertiesByDefault: true,
    //     allowProtoMethodsByDefault: true
    // }
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

//ROTAS

app.get('/', (req, res) => {

    Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((posts) => {

        res.render('home', {
            posts: posts.map(post => post.toJSON())
        });

    });

});

app.get('/cadastro', (req, res) => {
    res.render('formulario');
});

app.post('/add', (req, res) => {

    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/');
    }).catch(err => {
        res.send('Erro ao criar post: ', err);
    });

});
 
app.get('/deletar/:id', (req, res) => {
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(() => {
        res.redirect('/');
    }).catch(err => {
        res.send("Erro: ", err);
    })
});



app.listen(8080, () => {
    console.log('liss....')
});
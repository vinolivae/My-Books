const Book = require('../Models/book');
const Category = require('../Models/category');

exports.create = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        // const category = await Category.findById({_id: book.category})
        // category.books.push(book);
        // await category.save();
        
        return res.send({ book });
    }
    catch (err) {
        return res.status(400).send({ error: `Algum erro ocorreu ao tentar criar o livro: ${err}`});
    }
};

exports.findAll = async (req, res) => {
    try {
        const book = await Book.find({}).populate('category');
        return res.send({ book });
    }
    catch (err) {
        return res.status(400).send({ error: `Não foi possivel encontrar os livros: ${err}`});
    }
};

exports.findOne = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id).populate('category');
        return res.send({book});
    }
    catch(err){
        return res.status(400).send({error: `Não foi possivel encontrar o livro: ${err}`});
    }
};

exports.update = async (req, res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body);

        return res.send({book});
    }
    catch(err)
    {
        return res.status(400).send({error: `Não foi possivel atualziar o livro : ${err}`});
    }
};

exports.delete = async (req, res) => {
    try{
        const book = await Book.findByIdAndRemove(req.params.id);

        return res.status(200).send({message: 'Livro removido com sucesso'});
    }
    catch(err){
        return res.status(400).send({error: `Não foi possivel remover o livro: ${err}`});
    }
};



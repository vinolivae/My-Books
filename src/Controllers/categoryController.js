const Category = require('../Models/category');
const Book = require('../Models/book');

exports.findAll = async (req, res) => {
    try{
        const category = await Category.find({}).populate('book');
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: `As categorias não puderam ser encontradas: ${err}`});
    }
};

exports.findById = async (req, res) => {
    try{
        const category = await Category.findById(req.params.id).populate('book');
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: `A categoria não pode ser encontrada: ${err}`})
    }
};

exports.create = async (req, res) =>{
    try{
        const{name, books} = req.body;

        const category = await Category.create({name});

        books.map(book => {
            const categoryBook = new Book({...book, category: category._id});

            categoryBook.save()
            .then(book => category.books.push(book))
            .catch(err => res.status(400).send({err}));
        });

        await category.save();

        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: `A categoria não pode ser criada: ${err}`})
    }
};

exports.delete = async (req, res) => {
    try{
        const category = await Category.findByIdAndDelete(req.params.id);
        return res.status(200).send({message: 'A categoria foi excluída com sucesso'});
    }
    catch(err)
    {
        return res.status(400).send({error: `Não foi possível excluir a categoria: ${err}`})
    }
};

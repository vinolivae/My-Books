const Category = require('../Models/category');
const Book = require('../Models/book');

exports.findAll = async (req, res) => {
    try{
        const category = await Category.find({}).populate('books');
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: `As categorias não puderam ser encontradas: ${err}`});
    }
};

exports.findById = async (req, res) => {
    try{
        const category = await Category.findById(req.params.id).populate('books');
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: `A categoria não pode ser encontrada: ${err}`})
    }
};

exports.create = async (req, res) =>{
    try{
        const category = await Category.create(req.body);

        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: `A categoria não pode ser criada: ${err}`})
    }
};

exports.update = async (req, res) => {
    try{
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: `A categoria não pode ser atualizada: ${err}`})
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

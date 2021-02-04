const Category = require('../Models/category');
const router = require('../Routes/book_routes');

exports.findAll = async (req, res) => {
    try{
        const category = await Category.find({});
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: 'As categorias não puderam ser encontradas'});
    }
};

exports.findById = async (req, res) => {
    try{
        const category = await Category.findById(req.params.id);
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: 'A categoria não pode ser encontrada'})
    }
};

exports.create = async (req, res) =>{
    try{
        const category = await Category.create(req.body);
        return res.send({category});
    }
    catch(err){
        return res.status(400).send({error: 'A categoria não pode ser criada'})
    }
};

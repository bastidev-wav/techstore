const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

const createProduct = async (req, res) => {
    try {
        const { nombre, precio, categoria, descripcion, stock, rating } = req.body;
        
        let imagenUrl = 'https://via.placeholder.com/300';
        if (req.file) {
            imagenUrl = `/imagen/${req.file.filename}`;
        } else if (req.body.imagen) {
            imagenUrl = req.body.imagen;
        }

        const product = new Product({
            nombre,
            precio,
            imagen: imagenUrl,
            categoria,
            descripcion,
            stock,
            rating
        });
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear producto', error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { nombre, precio, categoria, descripcion, stock, rating } = req.body;
        const product = await Product.findById(req.params.id);

        if (product) {
            product.nombre = nombre || product.nombre;
            product.precio = precio || product.precio;
            product.categoria = categoria || product.categoria;
            product.descripcion = descripcion || product.descripcion;
            product.stock = stock || product.stock;
            product.rating = rating || product.rating;

            if (req.file) {
                product.imagen = `/imagen/${req.file.filename}`;
            }

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar producto' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.deleteOne();
            res.json({ message: 'Producto eliminado' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto' });
    }
};

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};
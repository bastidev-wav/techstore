import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Edit } from 'lucide-react';
import './Admin.css';

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '', precio: '', categoria: '', stock: '', rating: ''
    });
    const [imagenFile, setImagenFile] = useState(null);
    const [editId, setEditId] = useState(null);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products');
        setProductos(res.data);
    };
    
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImagenFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('nombre', formData.nombre);
        data.append('precio', formData.precio);
        data.append('categoria', formData.categoria);
        data.append('stock', formData.stock);
        data.append('rating', formData.rating);
        if (imagenFile) {
            data.append('imagen', imagenFile);
        }

        try {
            if (editId) {
                await axios.put(`http://localhost:5000/api/products/${editId}`, data);
                alert("Producto actualizado");
            } else {
                await axios.post('http://localhost:5000/api/products', data);
                alert("Producto creado");
            }
            setFormData({ nombre: '', precio: '', categoria: '', stock: '', rating: '' });
            setImagenFile(null);
            setEditId(null);
            fetchProducts();
            e.target.reset(); // Limpia el input file
        } catch (error) {
            console.error("Error guardando producto", error);
        }
    };

    const handleDelete = async (id) => {
        if(window.confirm("¿Estás seguro de eliminar este producto?")) {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts();
        }
    };

    const handleEdit = (prod) => {
        setEditId(prod._id);
        setFormData({
            nombre: prod.nombre,
            precio: prod.precio,
            categoria: prod.categoria,
            stock: prod.stock,
            rating: prod.rating
        });
    };

    return (
        <div className="admin-container">
            <h2>Panel de Administración de Productos</h2>
            
            <form className="admin-form" onSubmit={handleSubmit}>
                <h3>{editId ? 'Editar Producto' : 'Nuevo Producto'}</h3>
                <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                <input type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange} required />
                <input type="text" name="categoria" placeholder="Categoría" value={formData.categoria} onChange={handleChange} required />
                <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
                <input type="number" step="0.1" name="rating" placeholder="Rating (1-5)" value={formData.rating} onChange={handleChange} required />
                
                <div className="file-input-group">
                    <label>Subir Imagen:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                
                <button type="submit" className="admin-btn-submit">
                    {editId ? 'Actualizar Producto' : 'Guardar Producto'}
                </button>
                {editId && <button type="button" className="admin-btn-cancel" onClick={() => setEditId(null)}>Cancelar</button>}
            </form>

            <div className="admin-list">
                <h3>Lista de Productos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(prod => (
                            <tr key={prod._id}>
                                <td><img src={prod.imagen} alt="prod" className="admin-img-thumb"/></td>
                                <td>{prod.nombre}</td>
                                <td>${prod.precio}</td>
                                <td>
                                    <button onClick={() => handleEdit(prod)} className="btn-edit"><Edit size={18}/></button>
                                    <button onClick={() => handleDelete(prod._id)} className="btn-delete"><Trash2 size={18}/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
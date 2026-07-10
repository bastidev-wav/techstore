const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/techstore');
        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error de conexion MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
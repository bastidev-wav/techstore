const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Asumiendo que db.js está en la carpeta config
const Product = require('./models/Product'); // Asumiendo que Product.js está en la carpeta models

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Tu lista de productos
const productos = [
  {
    "nombre": "iPhone 17 Pro 256GB Titanio",
    "precio": 1349990,
    "imagen": "https://d2r8lpm0zljdak.cloudfront.net/catalog/product/i/p/iphone_17_pro_silver_pdp_image_position_1__cles.jpg",
    "categoria": "Smartphone",
    "descripcion": "El smartphone más avanzado de 2026 con el nuevo chip A19 Pro, pantalla ProMotion de 144Hz y sistema de cámaras impulsado por IA.",
    "stock": 24,
    "rating": 4.9
  },
  {
    "nombre": "Notebook Apple MacBook Pro 14\" M4 512GB",
    "precio": 1899990,
    "imagen": "https://cdn.awsli.com.br/284/284108/produto/315479174/apple-macbook-pro-14-m4-cpu-10-gpu-10-16gb-512gb-2024-preto-space-black-frontal--pu7dgktrqm.jpeg",
    "categoria": "Notebook",
    "descripcion": "Potencia extrema con el procesador M4 de Apple, diseñado para profesionales creativos y desarrolladores exigentes.",
    "stock": 12,
    "rating": 4.8
  },
  {
    "nombre": "Consola PlayStation 5 Pro 2TB",
    "precio": 1099990,
    "imagen": "https://clsonyb2c.vtexassets.com/arquivos/ids/465172/711719595700_001.jpg?v=638658958190900000",
    "categoria": "Consolas",
    "descripcion": "La versión mejorada de PS5 con gráficos en 8K, Ray Tracing avanzado y 2TB de almacenamiento ultrarrápido.",
    "stock": 35,
    "rating": 4.7
  },
  {
    "nombre": "Tarjeta de Video NVIDIA GeForce RTX 5080 16GB",
    "precio": 1499990,
    "imagen": "https://assets.pcfactory.cl/public/foto/56729/1_500.jpg?t=1780947536124",
    "categoria": "Componentes",
    "descripcion": "Rendimiento gráfico sin precedentes con la arquitectura Blackwell, ideal para gaming en 4K a altas tasas de refresco.",
    "stock": 8,
    "rating": 4.9
  },
  {
    "nombre": "Monitor Samsung Odyssey OLED G8 34\" 240Hz",
    "precio": 1199990,
    "imagen": "https://www.winpy.cl/files/41012-8172-Monitor-Gamer-Samsung-Odyssey-G8-1.jpg",
    "categoria": "Monitor",
    "descripcion": "Experimenta colores vibrantes y negros puros con este monitor curvo QD-OLED, con tiempo de respuesta de 0.03ms.",
    "stock": 15,
    "rating": 4.6
  },
  {
    "nombre": "Audífonos Inalámbricos Sony WH-1000XM6",
    "precio": 349990,
    "imagen": "https://media.falabella.com/falabellaCL/80516684_1/w=1500,h=1500,fit=cover",
    "categoria": "Audio",
    "descripcion": "La sexta generación de audífonos con la mejor cancelación de ruido activa del mercado y batería de hasta 40 horas.",
    "stock": 50,
    "rating": 4.8
  },
  {
    "nombre": "Smartwatch Apple Watch Ultra 3",
    "precio": 899990,
    "imagen": "https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2484776/attachments/large/Apple_Watch_Ultra_3_49mm_LTE_Natural_Titanium_Ocean_Band_Anchor_Blue_1.jpg?1757707846",
    "categoria": "Wearables",
    "descripcion": "Reloj inteligente para deportes extremos, con caja de titanio reforzado, GPS de doble frecuencia y mayor autonomía.",
    "stock": 18,
    "rating": 4.7
  },
  {
    "nombre": "Tablet iPad Pro 13\" M4 OLED 256GB",
    "precio": 1449990,
    "imagen": "https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/cl/paris/735612999/variant/68c19866f55c2af01f5ad8df/images/6379e9e9-a408-44f9-8040-b4469fcc9945/735612999-0000-001.jpg",
    "categoria": "Tablet",
    "descripcion": "El iPad más delgado y potente jamás creado, ahora con una espectacular pantalla Tandem OLED.",
    "stock": 20,
    "rating": 4.9
  },
  {
    "nombre": "Mouse Gamer Logitech G Pro X Superlight 3",
    "precio": 169990,
    "imagen": "https://bestmart.cl/cdn/shop/files/mouse-gamer-logitech-g-pro-x-superlight-negro-4584919.png?v=1758762751",
    "categoria": "Periféricos",
    "descripcion": "Mouse ultraligero de tan solo 49 gramos con el nuevo sensor HERO 32K, preferido por jugadores de eSports.",
    "stock": 45,
    "rating": 4.8
  },
  {
    "nombre": "SSD WD Black SN850X 2TB PCIe Gen 5",
    "precio": 249990,
    "imagen": "https://imagenes.pc-express.cl/image/cache/catalog/productos/15935/1_1665252905000.-700x700.jpg",
    "categoria": "Almacenamiento",
    "descripcion": "Velocidades de lectura de hasta 14,000 MB/s con tecnología PCIe 5.0, reduce los tiempos de carga a cero.",
    "stock": 60,
    "rating": 4.8
  }
];

const importData = async () => {
    try {
        // 1. (Opcional) Borramos los productos existentes para no tener duplicados si corres el script varias veces
        await Product.deleteMany();
        console.log('Productos anteriores eliminados...');

        // 2. Insertamos el array completo de productos
        await Product.insertMany(productos);
        console.log('¡Nuevos productos importados exitosamente!');

        // 3. Cerramos el proceso
        process.exit();
    } catch (error) {
        console.error(`Error al importar datos: ${error.message}`);
        process.exit(1);
    }
};

// Ejecutar la función
importData();
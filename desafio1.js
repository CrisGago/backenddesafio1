class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`El código ${code} ya existe`);
                return; // Salir del método si el código ya existe
            }
        }

        const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        if (!Object.values(newProduct).every(value => value !== undefined && value !== null && value !== "")) {
            console.log("Completar todos los campos obligatorios");
            return;
        }

        ProductManager.id++;
        this.products.push({
            ...newProduct,
            id: ProductManager.id,
        });
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((producto) => producto.id === id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }
}

const productos = new ProductManager();

// Testing

//1.- Arreglo vacio
console.log(productos.getProducts());
//2.- Agrega producto
productos.addProduct('modulo1', 'presupuestador', '20000', 'img1', 'sp142', 5);
productos.addProduct('modulo2', 'ppto y planif', '45000', 'img2', 'sp143', 15);

console.log(productos.getProducts());

//3.- Probando getPorductsById - existente y Not found
try {
    console.log(productos.getProductById(1));
    productos.getProductById(3);
} catch (error) {
    console.error(error.message);
}

//4.- Validando no se repita campo "code"
productos.addProduct('modulo3', 'control', '5000', 'img3', 'sp143', 20);
//5.- Validando que todos los campos son obligatorio. Todos los datos (values) obligatorios
productos.addProduct('modulo4', 'certif', '15000', '', 'sp144', 2);  




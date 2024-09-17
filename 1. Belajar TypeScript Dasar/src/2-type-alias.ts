// Bisa jgua menggunakan union type
export type ID = string | number;

// Ini merupakan alias dengan type Category
export type Category = {
    // Dia punya id dan name
    id: ID;
    name: string;
}

// Alias dengan tipe data Product
export type Product = {
    id: ID;
    name: string;
    price: number,
    category: Category //Typenya category
} 

// Lanjutan ada di unit test
describe('Type Alias', function () {
    it('should support in typescript', function () {
        // category akan error kalo dia ga ada atribut sesuai Category
        const category = {
            id: 1, //Boleh string atau number
            name: "Handphone"
        };
        const product = {
            id: "1", //Boleh string atau number
            name: "Samsung S20",
            price: 20000000,
            category: category
        };
        // Tidak boleh dilakukan akan menyebabkan error karena property 'description' tidak ada pada Product
        // product.description = "Test";
        // Type Alias juga bisa menggunakan Union Type
        console.info(category);
        console.info(product);
    });
});
export {};

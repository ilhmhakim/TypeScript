"use strict";
describe('Array', function () {
    it('should same with JavaScript', function () {
        const name = ["Eko", "Budi", "Joko"];
        const values = [1, 2, 3];
        console.info(name);
        console.info(values);
    });
    it('should support readonly array', function () {
        const hobbies = ['Membaca', 'Menulis'];
        // Hanya boleh dibaca
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // Tidak bisa diubah valuenya, akan terjadi error
        // hobbies[0] = 'Main Game';
    });
});

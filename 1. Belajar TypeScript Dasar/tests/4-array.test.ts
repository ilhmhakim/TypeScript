describe('Array', function() {
    it('should same with JavaScript', function() {

        const name: string[] = ["Eko", "Budi", "Joko"];
        const values: number[] = [1, 2, 3];

        console.info(name);
        console.info(values);
    });

    it('should support readonly array', function() {
        const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis'];
        // Hanya boleh dibaca
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // Tidak bisa diubah valuenya, akan terjadi error
        // hobbies[0] = 'Main Game';
    });

    it('should support tupple', function() {
        const person: readonly [string, string, number] = ['Ilham', 'Hakim', 30];
        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // Akan error karena ReadOnly
        // person[0] = 'Tania';

    });
});
describe('Data Type', function(){
    it('should must declare', function(){
        // name tipe datanya String karena valuenya String
        let name: string = "Ilham Hakim";
        // gagal assign 100 karena dia tipe datanya Number
        // name = 100;

        let balance: number = 100000;
        let isVip: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // name = 100;
        // balance = "hello";
        // isVip = 5;

        // Klo dia 'npm test' bakal passed karena code akan dicomple ke JavaScript (test)
        // Klo dia 'npx tsc' bakal gagal (kompilasi)
        // Pastikan lakukan kompilasi terlebih dahulu untuk mengecek apakah ada error, baru ditest dengan Jest
        // Untuk melakukan auto compile dapat menggunakan 'npx tsc --watch'
    });
});
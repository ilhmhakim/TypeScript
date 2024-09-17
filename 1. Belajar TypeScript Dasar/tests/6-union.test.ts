describe('Union Type', function() {
    it('should support in typescript', function() {
        // Tipe datanya bisa number, string, atau boolean
        let sample: number | string | boolean = "Ilham";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

        //  Tidak bisa diubah ke Array karena bukan bagian dari Union Type yang dideclare
        // sample = [];
    }); 

    it('should support typeof', function() {
        // Harus diperhatikan pengecekannya klo dia bisa union ke berbagai tipe data
        function process(value: number | string | boolean){
            if(typeof value === "string") {
                return value.toUpperCase();
            } else if(typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Ilham")).toBe("ILHAM");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
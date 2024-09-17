describe('Any', function() {
    it('should support in typescript', function() {

        const person: any = {
            id: 1,
            name: "Ilham",
            age: 30
        }

        // Boleh diganti dengan tipe data lain, boleh juga ditambahkan atribut baru
        person.age = 31;
        person.address = "Indonesia";

        console.info(person);
    });
});
"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        // Hanya digunakan untuk kasus yang sederhana, kalo kasusnya kompleks lebih baik pakai Alias
        const person = {
            id: "1",
            name: "Ilham"
        };
        console.info(person);
        person.id = "2";
        person.name = "Hakim";
        console.info(person);
    });
});

import {sayHello} from "../src/1-say-hello";

describe('sayHello', function () {
    it('should return hello ilham', function () {
        expect(sayHello('ilham')).toBe('Hello ilham');
    });
});
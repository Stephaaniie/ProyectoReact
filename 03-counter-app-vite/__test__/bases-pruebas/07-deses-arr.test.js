import {retornaArreglo} from '../../src/bases-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
    test('Debe de retornar un string y un numero ', () => {
        const [letters, numbers] = retornaArreglo();
        expect(numbers).toBe(123);
        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(letters).toEqual(expect.any(String));
    });
});
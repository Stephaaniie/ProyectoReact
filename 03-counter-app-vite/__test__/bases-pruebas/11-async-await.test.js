const { getImagen } = require("../../src/bases-pruebas/11-async-await");

describe('Pruebas en 11-asinc-await', () => {
    test('getImagen debe de retornar un error', async() => {
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});
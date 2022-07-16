import { getSaludo } from '../../src/bases-pruebas/02-template-string.js';

describe('Pruebas de 02-template-string', () => {
    test('getSaludo debe retornar "Hola Fernando',() => {
        const name = 'Stephanie';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`)
    });
});
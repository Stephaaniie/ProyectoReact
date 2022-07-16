import { getUsuarioActivo } from "../../src/bases-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('GetUser debe de retornar un objeto', () => {
        const name = 'Stephanie';
        const user = getUsuarioActivo(name);
       expect(user).toStrictEqual({
        uid: 'ABC567',
        username: name
    })
    });
});
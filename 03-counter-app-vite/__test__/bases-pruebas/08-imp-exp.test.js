const { getHeroeById, getHeroesByOwner } = require("../../src/bases-pruebas/08-imp-exp");

import heroo from '../../src/data/heroes';

describe('Pruebas de 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => { 
       const id = 1;
       const hero = getHeroeById(id);
       expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroById debe retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe de regresar heroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(heroes).toEqual(heroo.filter((heroe) => heroe.owner === owner))
    });
});
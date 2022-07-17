import {renderHook, waitFor} from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas sobre useFetchGifs',() => {

    test('Debe regresar el estado inicial', () => { 
       const {result} = renderHook( () => useFetchGifs('One Puch'));
       const {image, isLoading} = result.current;
       expect(image.length).toBe(0);
       expect(isLoading).toBeTruthy(); 
    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        const {result} = renderHook( () => useFetchGifs('One Puch'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});
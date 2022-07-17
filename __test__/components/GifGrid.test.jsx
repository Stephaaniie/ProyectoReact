import { render, screen } from "react-dom";
import {GifGrid} from "../../src/components/GifGrid";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

describe('Pruebas sobre <GifGrid/>', () => {
    
    const category = 'One Puch';

    test('Debe de mostar el loadinf inicialmente', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading:true
        })

        render(<GifGrid category = {category}/>);  
        expect(screen.getByText('Cargando...'));
    });

    test('Debe mostrar los items cuando se carga las imagenes de useFetchGif', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.png'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.png'
            },
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').lengh).toBe(2);
    });
});
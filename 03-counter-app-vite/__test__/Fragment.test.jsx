import {getAllByText, render, screen} from '@testing-library/react'

import { Fragment } from '../src/Fragment';

describe('Prueba en <FirstApp/>', () => {

    const title = 'Hola soy Tefi';
    const subtitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot', () => {    
        const {container} = render(<Fragment title={title}/>)
        expect(container).toMatchSnapshot();
    });
    
    test('Debe de mostrar el texto "Hola soy tefi', () => {
        render(<Fragment title={title}/>);
        expect(screen.getByText(title)).not.toBeTruthy();
    });

    test('Debe de mostrar el titulo en un h1', () => {
        render(<Fragment title={title}/>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    }),

    test('Debe de enviar el subtitulo enviado por props', () => {
        render(
            <Fragment 
                title={title}
                subtitle={subtitle}
            />
        );
        expect(screen.getAllByText(subtitle).length).toBe(2);
    })
});
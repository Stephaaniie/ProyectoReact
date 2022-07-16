import { fireEvent, render } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas de la app Counter', () => {
    
    const initialValue = 20;
    
    test('Debe hacer match con snapsshot', () => {
        const {container} = render(<CounterApp value = {initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100 </CounterApp value={100}>', () => {
        render(<CounterApp value={100}/>);
        expect(screen.getByText(100)).toBeTruthy();
    });

    Text('Debe de incrementar con el boton +1.',() => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('Incrementar'));
        expect(screen.getByText('21')).toBeTruthy();
    });

    Text('Debe de Decrementar con el boton -1.',() => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('Decrementar'));
        expect(screen.getByText('19')).toBeTruthy();
    });
})
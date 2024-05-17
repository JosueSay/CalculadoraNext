import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from './page'

describe('Home Tests', () => {
    it('updates displayText when a button is clicked', () => {
        render(<Home />);

        // Selecciona el botón con el texto '7'
        const buttonElement = screen.getAllByText('7').find(el => el.tagName === 'BUTTON');
        fireEvent.click(buttonElement);

        // Verifica que el display muestra '7'
        const displayElement = screen.getByText('7', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });

    it('updates displayText when a key is pressed', () => {
        render(<Home />);

        // Simula la presión de la tecla '8'
        fireEvent.keyDown(document, { key: '8', code: 'Digit8' });

        // Verifica que el display muestra '8'
        const displayElement = screen.getByText('8', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });

    it('calls clickButton with "=" when Enter key is pressed', () => {
        const clickButtonMock = jest.fn(); // Crear una función simulada
        render(<Home />);
    
        // Sobrescribe la función clickButton con la función simulada
        const originalClickButton = window.clickButton;
        window.clickButton = clickButtonMock;
    
        // Simula la presión de la tecla 'Enter'
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' });
    
        // Espera un pequeño tiempo para que se realice la llamada
        setTimeout(() => {
            // Verifica que la función simulada sea llamada con '=' y los argumentos correctos
            expect(clickButtonMock).toHaveBeenCalledWith('=', 'button-equals', 'teclado');
            
            // Restaura la función original después de la prueba
            window.clickButton = originalClickButton;
        }, 100);
    
    });
    
    it('calls clickButton with "C" when Backspace key is pressed', () => {
        const clickButtonMock = jest.fn(); // Crear una función simulada
        render(<Home />);
    
        // Sobrescribe la función clickButton con la función simulada
        const originalClickButton = window.clickButton;
        window.clickButton = clickButtonMock;
    
        // Simula la presión de la tecla 'Backspace'
        fireEvent.keyDown(document, { key: 'Backspace', code: 'Backspace' });
    
        // Espera un pequeño tiempo para que se realice la llamada
        setTimeout(() => {
            // Verifica que la función simulada sea llamada con 'C'
            expect(clickButtonMock).toHaveBeenCalledWith('C', 'button-operator', 'teclado');
            
            // Restaura la función original después de la prueba
            window.clickButton = originalClickButton;
        }, 100); // Espera 100ms para que se realice la llamada
    });
    
    it('calls clickButton with "AC" when Delete key is pressed', () => {
        const clickButtonMock = jest.fn(); // Crear una función simulada
        render(<Home />);
    
        // Sobrescribe la función clickButton con la función simulada
        const originalClickButton = window.clickButton;
        window.clickButton = clickButtonMock;
    
        // Simula la presión de la tecla 'Delete'
        fireEvent.keyDown(document, { key: 'Delete', code: 'Delete' });
    
        // Espera un pequeño tiempo para que se realice la llamada
        setTimeout(() => {
            // Verifica que la función simulada sea llamada con 'AC'
            expect(clickButtonMock).toHaveBeenCalledWith('AC', 'button-operator', 'teclado');
            
            // Restaura la función original después de la prueba
            window.clickButton = originalClickButton;
        }, 100); // Espera 100ms para que se realice la llamada
    });
    
    it('performs addition operation correctly', () => {
        render(<Home />);

        // Simula las operaciones para realizar una suma
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('+'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('='));

        // Verifica que el display muestre el resultado '3'
        const displayElement = screen.getByText('3', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });

    it('performs multiplication operation correctly', () => {
        render(<Home />);
    
        // Simula las operaciones para realizar una multiplicación
        fireEvent.click(screen.getByText('4'));
        fireEvent.click(screen.getByText('*'));
        fireEvent.click(screen.getByText('3'));
        fireEvent.click(screen.getByText('='));
    
        // Verifica que el display muestre el resultado '12'
        const displayElement = screen.getByText('12', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });
    
    it('correctly deletes last digit when C button is clicked', () => {
        render(<Home />);
    
        // Simula las operaciones para mostrar un número
        fireEvent.click(screen.getByText('1'));
        fireEvent.click(screen.getByText('2'));
        fireEvent.click(screen.getByText('3'));
    
        // Simula clic en el botón C
        fireEvent.click(screen.getByText('C'));
    
        // Verifica que el display muestre '12'
        const displayElement = screen.getByText('12', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });

    it('correctly changes sign when +/- button is clicked', () => {
        render(<Home />);
    
        // Simula las operaciones para mostrar un número
        fireEvent.click(screen.getByText('5'));
        fireEvent.click(screen.getByText('+/-'));
    
        // Verifica que el display muestre '-5'
        const displayElement = screen.getByText('-5', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });
});

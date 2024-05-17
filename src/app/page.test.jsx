import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from './page'

describe('||    HomeTest    ||', () => {
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
        render(<Home />);

        // Simula la presión de la tecla 'Enter'
        fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' });

        // Verifica que el display muestra '='
        const displayElement = screen.getByText('=', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });

    it('calls clickButton with "C" when Backspace key is pressed', () => {
        render(<Home />);

        // Simula la presión de la tecla 'Backspace'
        fireEvent.keyDown(document, { key: 'Backspace', code: 'Backspace' });

        // Verifica que el display muestra 'C'
        const displayElement = screen.getByText('C', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });

    it('calls clickButton with "AC" when Delete key is pressed', () => {
        render(<Home />);

        // Simula la presión de la tecla 'Delete'
        fireEvent.keyDown(document, { key: 'Delete', code: 'Delete' });

        // Verifica que el display muestra 'AC'
        const displayElement = screen.getByText('AC', { selector: 'p' });
        expect(displayElement).toBeInTheDocument();
    });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('||    DisplayComponentTest    ||', () => {
    it('renders text correctly', () => {
        render(<Display text="123" />);
        const displayElement = screen.getByText('123');
        expect(displayElement).toBeInTheDocument();
    });

    it('renders text with correct className', () => {
        render(<Display text="123" className="display-number" />);
        const displayElement = screen.getByText('123');
        expect(displayElement).toHaveClass('display-number');
    });

    it('renders empty text', () => {
        render(<Display text="" />);
        const displayElement = screen.queryByText('', { selector: 'p' }); // Buscar específicamente un elemento <p> con texto vacío
        expect(displayElement).toBeNull();
    });
    
    it('renders large text correctly', () => {
        render(<Display text="999999999" />);
        const displayElement = screen.getByText('999999999');
        expect(displayElement).toBeInTheDocument();
    });

    it('renders text with custom className', () => {
        render(<Display text="ERROR" className="display-text" />);
        const displayElement = screen.getByText('ERROR');
        expect(displayElement).toHaveClass('display-text');
    });
});

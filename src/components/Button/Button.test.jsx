import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('||    ButtonTest    ||', () => {

    it('Render Correctly Button', () => {
        render(<Button title='' />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
        //screen.debug()
    })

    it('Render Button With Text', () => {
        const { getByText } = render(<Button title='12345' />)
        const element = getByText('12345')
        expect(element).toBeInTheDocument()
        //screen.debug()
    })

    it('Button Click Calls onClick', () => {
        const spy = jest.fn()
        const { getByText } = render(<Button title='12345' onClick={spy} />)
        const element = getByText('12345')
        fireEvent.click(element)
        expect(spy).toHaveBeenCalledTimes(1)
        //screen.debug()
    })

    it('Render Button With Different ClassNames', () => {
        const { rerender } = render(<Button title='Click Me!' className='button-text' />)
        const element1 = screen.getByText('Click Me!')
        expect(element1).toHaveClass('button-text')
        
        rerender(<Button title='9' className='button-number' />)
        const element2 = screen.getByText('9')
        expect(element2).toHaveClass('button-number')
        
        rerender(<Button title='=' className='button-operator' />)
        const element3 = screen.getByText('=')
        expect(element3).toHaveClass('button-operator')
        
        rerender(<Button title='ABCDEFGHIJKLMÑOPQRSTUVWXYZ' className='button-text' />)
        const element4 = screen.getByText('ABCDEFGHIJKLMÑOPQRSTUVWXYZ')
        expect(element4).toHaveClass('button-text')
    })

    it('Button Without Text', () => {
        render(<Button title='' className='button-text' />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeEmptyDOMElement()
        //screen.debug()
    })
})

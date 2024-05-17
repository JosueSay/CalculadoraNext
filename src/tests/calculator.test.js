import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { suma } from '../app/calculator'

describe('||    TestSuma    ||', () =>
    {
        it('Suma de 2 valores: 1 + 1 = 2', () => {
            expect(suma(1,1)).toBe(2)
         })
         it('Suma de valores grandes 1: 999999999 + 1 = Error', () => {
            expect(suma(999999999,1)).toBe("error")
         })
         it('Suma de valores grandes 2: 999999999 + 999999999 = Error', () => {
            expect(suma(999999999,1)).toBe("error")
         })
         it('Suma de dos decimales 1: 2.5 + 2.5 = 5', () => {
            expect(suma(2.5,2.5)).toBe(5)
         })
         it('Suma de dos decimales 2: 2.2 + 2.2 = 4.4', () => {
            expect(suma(2.2,2.2)).toBe(4.4)
         })
         it('Suma de decimales grandes: 9999999.9 +  = 0.1', () => {
            expect(suma(9999999.9,0.1)).toBe(10000000)
         })
         it('Suma de decimales grandes 1: 9999999.9 +  = 0.1', () => {
            expect(suma(9999999.9,0.1)).toBe(10000000)
         })
    }
)
 
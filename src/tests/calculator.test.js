import { suma, resta, multiplica, divide, cambiarSigno, borrarUltimoDigito, borrarTodo } from '../app/calculator';

describe('Calculator functions', () => {
    describe('Suma tests', () => {
        it('Suma de 2 valores: 1 + 1 = 2', () => {
            expect(suma(1, 1)).toBe("2");
        });

        it('Suma de valores grandes: 999999999 + 1 resulta en ERROR', () => {
            expect(suma(999999999, 1)).toBe("ERROR");
        });

        it('Suma de dos decimales: 2.5 + 2.5 = 5', () => {
            expect(suma(2.5, 2.5)).toBe("5");
        });

        it('Suma de decimales grandes: 9999999.9 + 0.1 resulta en ERROR', () => {
            expect(suma(9999999.9, 0.1)).toBe("ERROR");
        });
    });

    describe('Resta tests', () => {
        it('Resta de 2 valores: 3 - 2 = 1', () => {
            expect(resta(3, 2)).toBe("1");
        });

        it('Resta de valores grandes: 1 - 999999999 resulta en ERROR', () => {
            expect(resta(1, 999999999)).toBe("ERROR");
        });

        it('Resta de valores grandes 2: 999999999 - 1 resulta en ERROR', () => {
            expect(resta(999999999, 1)).toBe("ERROR");
        });
    });

    describe('Multiplicación tests', () => {
        it('Multiplicación de 2 valores: 2 * 3 = 6', () => {
            expect(multiplica(2, 3)).toBe("6");
        });

        it('Multiplicación de valores grandes: 999999 * 999999 resulta en ERROR', () => {
            expect(multiplica(999999, 999999)).toBe("ERROR");
        });

        it('Multiplicación de decimales: 2.5 * 2 = 5', () => {
            expect(multiplica(2.5, 2)).toBe("5");
        });
    });

    describe('División tests', () => {
        it('División de 2 valores: 6 / 2 = 3', () => {
            expect(divide(6, 2)).toBe("3");
        });

        it('División por cero: 6 / 0 resulta en "División por cero"', () => {
            expect(divide(6, 0)).toBe("División por cero");
        });

        it('División de decimales: 5 / 2 = 2.5', () => {
            expect(divide(5, 2)).toBe("2.5");
        });
    });

    describe('Cambiar Signo test', () => {
        it('Cambio de signo de un número positivo: 5 pasa a ser -5', () => {
            expect(cambiarSigno(5)).toBe("-5");
        });

        it('Cambio de signo de un número negativo: -5 pasa a ser 5', () => {
            expect(cambiarSigno(-5)).toBe("5");
        });
    });

    describe('Borrar último dígito test', () => {
        it('Borrar último dígito de 1234 debe devolver 123', () => {
            expect(borrarUltimoDigito("1234")).toBe("123");
        });

        it('Borrar último dígito de 1 debe devolver vacío', () => {
            expect(borrarUltimoDigito("1")).toBe("");
        });

        it('Borrar último dígito de un string vacío debe devolver vacío', () => {
            expect(borrarUltimoDigito("")).toBe("");
        });
    });

    describe('Borrar todo test', () => {
        it('Borrar todo debería devolver un string vacío', () => {
            expect(borrarTodo()).toBe("");
        });
    });
});

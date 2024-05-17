# 📟 Calculadora Test

## 📝 Descripción

Este proyecto es una calculadora simple hecha en Next.js. La calculadora consta de una pantalla (display) y un teclado numérico compuesto de botones HTML. Todo el input se realiza desde los botones presionado por el teclado o mouse. 

## ⚙️ Funcionalidad

- **Entrada de Números:** Al presionar un número en el teclado numérico, se muestra en el display. Los números se concatenan a la derecha del display.
- **Operaciones:** Al presionar una tecla de “operación”, el siguiente número ingresado limpia el display antes de mostrarse. Al presionar una operación, se muestra el resultado actual en el display.
- **Botón de Igualdad:** Muestra el resultado de la operación.
- **Operaciones Disponibles:** Suma, Resta, Multiplicación, División, Cambio de signo (+/-).
- **Límites del Display:** 
  - No más de 9 caracteres.
  - No muestra números negativos, muestra "ERROR" si el resultado es negativo.
  - No muestra números superiores a 999999999, muestra "ERROR" si el resultado es mayor.
- **Botónes especiales:** 
  - "=" es el botón "Enter".
  - "C" es el botón "Backspace".
  - "AC" es el botón "Suprimir".

## 📊 Referencias de la calculadora

La calculadora está basa en la siguiente funcionalidad [aquí](https://codepen.io/trobes/pen/EerrNd).

## 🌐 Publicación

- [Calculadora en Producción](https://dominio.com/calculadora)
- [Código Fuente en GitHub](https://github.com/JosueSay/CalculadoraNext)

## 📦 Scripts del Proyecto

Estos son los comandos de npm que puedes usar en este proyecto:

- `npm run dev`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm start`: Inicia el servidor de la aplicación compilada.
- `npm run lint`: Corre el linter para encontrar y corregir problemas en el código.
- `npm run storybook`: Inicia Storybook para desarrollar y visualizar componentes de UI de forma aislada.
- `npm run build-storybook`: Compila Storybook para producción.
- `npm test`: Corre los tests con Jest.
- `npm run coverage`: Genera un reporte de cobertura de los tests.

## 🏆 Acciones adicionales

- **Punto Decimal:** El punto cuenta como un carácter dentro del límite de 9, tanto para el ingreso de datos como para los resultados.
- **División:** Respetando la regla de los 9 caracteres y manejando resultados con muchos decimales.
- **Función +/-:** Convierte el número desplegado en negativo, contando como un carácter dentro del límite de 9.
- **Ingreso desde el Teclado:** Permite ingresar números y operaciones por medio del teclado, resaltando el botón correspondiente.
- **Cobertura de Tests:** Implementado con `npm run coverage` para mostrar el porcentaje de código protegido por tests.
- **Implementación en Next.js:** La calculadora está hecha en Next.js.

## 🛠️ Tecnologías Utilizadas

- Next.js
- JavaScript
- Jest para tests
- Storybook para componentes

## 🚀 Cómo Correr el Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JosueSay/CalculadoraNext.git
   ```

2. Instala las dependencias
    ```bash
       npm install
    ```

3. Correr la aplicación en modo desarrollo
    ```bash
       npm run dev
    ```

4. Correr los test
    ```bash
       npm run test
    ```

5. Genera el reporte de cobertura:
    ```bash
       npm run coverage
    ```

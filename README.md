# react-partners

curso jonmircha sobre react
https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk

## 02. Create React App 

###Temas
`npx create-react-app`
`npm start`
`npm run build`
`npm run test`
`npm run eject`

###Instalar:
- **React Dev Tools Chrome**: Es una extensión para Chrome que agrega de herramientas de depuración para React.
- **Simple React Snippets for VSCode**: Es una extensión para Visual Studio Code que nos permite usar atajos para agilizar la escritura de código React.

## 03. Sintaxis JSX
No es HTML sino que es una sintaxis similar que se encapsula dentro del render en JS. Podemos:
- Crear estructuras de control
- Asignar variables
- Aceptarlo como argunmento o retorno en funciones.
- Expresiones JS

Atributos que se reemplazan:
- **class** por **className**
- **for** por **htmlFor**

JSX se transforma en javascript y los posiciona como elementos en el DOM. Se puede usar el REPL de Babel para ver como se transforma el codigo en directo.
Tener en cuenta que al hacer el render no se permiten elementos adyacentes en el JSX, sino que deben estar todos envueltos en un contenedor padre div o un fragmento (<></>)

## 04. Componentes
Los componentes pueden tener estados (variables internas que lo controlen) y se le pueden pasar propiedades (props) para que reciba valores. En React el flujo de los datos fuciona en una sola dirección (de componentes **padres** a componentes **hijos**)

**React permite definir componentes como clases o como funciones**

### Tipos de componentes

Como una clase que extiende de **Component** con un metodo **render**:
`import  React, { Component } from "react";
class Title extends Component {}`

o como una funcion que retorna lo que se va a renderizar:
`const Title = () => {}`
Desde React 16 se introdujo el concepto de hooks permitiendo crear componentes en funciones que ademas tuviesen un estado.

### Armar un componente
Por convenciones se suele armar una carpeta components dentro de src donde se alojaran. Para empezar a trabajar con un componente de clase es necesario importarlos de la libreria react:
`import React, { Component } from 'react';`
Si se utiliza un componente funcional este paso no es necesario
Recordar que al final se debe exportar el componente de la siguiente manera:
`export default Componente;`

## 05. Propiedades
# react-partners

[Notas del curso](https://jonmircha.com/react)

[Curso en Youtube](https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk)

## 02. Create React App 

### Temas
`npx create-react-app`
`npm start`
`npm run build`
`npm run test`
`npm run eject`

### Instalar:
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

Son valores que recibe un componente hijo de uno padre. Se agrupan en un objeto llamado **props**, el cual puede recibir diferentes tipos de datos como:
- Strings
- Numbers
- Booleans
- Arrays
- Objects
- Functions
- React Elements
- React Components
Las props son **inmutables**, es decir que son valroes de solo lectura.
Si se define al componente en una **clase**, las props se reciben en el constructor de la clase mientras que sl el comoponente se define como una **funcion**, las props se reciben como un parametro de la función.

**defaultProps**: Se utiliza para marcar propiedades por defecto en un componente.

### Prop Types
Se puede instalar como **dependencia** dentro de un proyecto JS. Mediante un atributo `Propiedades.propTypes` me permite documentar el tipo de identidad de cada propiedad pasada a un componente. React va a chequear las propiedades pasadas a un componente y alertar si no coinciden con lo solicitado. De forma similar, tambien permite marcar una propiedad como obligatoria con `isRequired` [prop-types en NPM](https://www.npmjs.com/package/prop-types)

## 06. Estado
El **state** son los valores internos que manejan la logica y los datos de un componente, permite que éste reaccione a culaquier cambio lo que hará que se vuelva a renderizar en la interfaz. Tiene 3 caracteristicas:
- Es inmutable.
- No se puede modificar directamente
- Es asincrono.

Para hacer cambios hay que hacer uso del método **setState()**
La propagación del estado fluye de forma **unidireccional y descendiente** (hacia abajo), esto significa que un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades.
En el momento que los valores del estado del padre sufran cambios esto causará que tanto el padre como los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.

Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado **state**.

Cada vez que cambia el state React vuelve a renderizar (pintar) el componente en la vista.

## 07. Renderizado Condicional
En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Puedes usar el condicional **if o el operador ternario** para crear elementos dinámicamente en base al valor del estado o las propiedades que recibe el componente.
`{ this.state.session ? <IsLoggedIn /> : <NotLoggedIn /> }`

## 08. Renderizado de Elementos
Puedes hacer colecciones de elementos e incluirlos en JSX usando llaves {}.

Recorriendo los elementos de un **array** y usando la función **map()** de Javascript.

Al ejecutar un map de un array que pase por un componente, serás advertido que una **key** debería ser proporcionada para elementos de lista.

Una “key” es un atributo especial de tipo string que debes incluir al crear listas de elementos.

Las keys ayudan a React a identificar que elementos han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle una **identidad estable**.

La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar los IDs de tus datos como key.

Cuando no tengas IDs estables para renderizar, puedes usar como key el índice de los elementos del array de datos como último recurso.

Las keys usadas dentro de arrays deberían ser únicas entre sus hermanos. Sin embargo, no necesitan ser únicas globalmente. Podemos usar las mismas keys cuando creamos dos o más arrays diferentes.

## 09. Eventos
Manejar eventos en React es muy similar a manejar eventos en el DOM. Sin embargo existen algunas diferencias de sintaxis:
- Los eventos de React se nombran usando camelCase, en vez de minúsculas.
- Con JSX pasas una función como el manejador del evento, en vez de un string.
Ejemplo en HTML:
`<button onclick="cambiarIdioma()">Cambiar idioma</button>`
Ejemplo en React:
`<button onClick={cambiarIdioma}>Cambiar idioma</button>`
Otra diferencia es que en React no puedes retornar **false** para prevenir el comportamiento por defecto. Debes, explícitamente, llamar **preventDefault**.
### Binding
Cada vez que se defina un evento en un componente basado en clases es necesario hacer un binding (es recomendable **hacerlo en el constructor**) para poder **asignar el evento** al contexto. Al usar los componentes basados en función esto es reemplazado por los hooks.

## 10. Eventos y Property Initializers
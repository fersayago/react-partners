# react-partners

[Notas del curso](https://jonmircha.com/react)

[Curso en Youtube](https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk)

## 02. Create React App 

### Temas
- `npx create-react-app`
- `npm start`
- `npm run build`
- `npm run test`
- `npm run eject`

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
Creamos un componente de clases nuevo llamado EventosES7.js para usar property initializers. No es necesario definir el constructor ya que directamente se va a definir la propiedad **state**. Para evitar el bind, los eventos dentro de la clase se van a definir con arrow functions ya que estas funciones heredan el this del contexto en el que se encuentran.
`sumar = (e) => { this.setState ({}) }`

## 11. Eventos Nativos, Sintéticos y Personalizados
Creamos el nuevo componente que vamos a usar `MasSobreEventos.js` y dentro del mismo un boton que llama al metodo `handleClick()` que es el manejador de eventos que se va asociar.
**Toda funciona manejadora de evento solo puede recibir el evento en si**
Para asignar el evento al boton se utiliza `onClick={this.handleClick}` (no usar parentesis al final de la funcion ya que esto significa ejecución inmediata)
Al ver las propiedades del evento nos aparece que esto es un **SyntheticBaseEvent**
### SyntheticBaseEvent
React envuelve el evento nativo del navegador y le da soporte a los diferentes navegadores y versiones donde react se soporta. Para indagar en este temas podemos recurrir a la [documentacion oficial de React sobre eventos](https://es.reactjs.org/docs/events.html)

React -> SyntheticEvent
JS Vainilla -> nativeEvent

Agregamos la variable mensaje al manejador de eventos y le pasamos el parametro desde el boton. Para hacer esto tenemos que crear un funcion con evento que se ejecute al tocar el boton, y que invoque a la funcion handleClick() pasandole los argumentos evento y el mensaje a mostrar de la siguiente manera:
`<button onClick={(e) => this.handleClick(e, "Pasando parametro desde un evento")}>`
### Eventos Personalizados
Si en lugar de tener un boton tenemos un componente propio que ya es un botón, no podemos pasar el elemento onClick() al componente ya que no es una etiqueta JSX y no funciona como tal. Si quiero que funcione el evento JSX en un componente personalizado se tiene que pasar el evento como una propiedad al componente para que este pueda usarlo en el click del boton con JSX:
`<Boton myOnClick={(e) => this.handleClick(e, "Pasando parametro desde un evento")}/>`
Una vez dentro del componente, usamos las props para tomar el elemento que pasamos en su creacion mediante `= (props.propiedadRecibida) => {}` o, en caso de que sea necesario, destructurando el objeto desde las props.

## 12. Comunicación entre Componentes
Son metodos que se ejecutan automaticamente en un **Componente de Clase** y ocurren en 3 fases:
### Montaje
Estos métodos se ejecutan cuando se crea un componente y se inserta en el arbol del DOM.

- **constructor()**: Se ejecuta al crear la instancia del componente, en el constructor puedes inicializar el estado y enlazar manejadores de eventos.
- **render()**: Es el único método requerido, cuando se ejecuta, examina el estado y las propiedades y dibuja el componente en el árbol del DOM.
- **componentDidMount()**: Se invoca inmediatamente después de que un componente se ha insertado al árbol del DOM. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.

### Actualización
Estos métodos son ejecutados por cambios en el estado o las propiedades de los componentes
- **render()**: redibuja el componente cuando detecta cambios en el estado o las propiedades del componente.
- **componentDidUpdate()**: Se ejectura inmediatamente despues de que la actualización del estado o las propiedades sucede, al igual que componentDidMount es un método ideal para hacer peticiones externas.

### Desmontaje
Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM.
- **componentWillUnmount()**: se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.

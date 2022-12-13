import React, { Component } from 'react'; //importación de react para que se sepa que se importa un proyecto React, Archivo js con formato react
import PropTypes from 'prop-types';


class Greeting extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            age : 26,
        }
    }
    render() {
        return (
            <div>
                <h1>Hola {this.props.name}</h1>
                <h2> Tu edad es de: {this.state.age}</h2>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1

            }
        ))
    }
}

//Metodo render. siempre tiene parentesis y dentro el archivo HTML
//No se puede renderizar más de un elemento a la vez


Greeting.propTypes = {
    name: PropTypes.string,

};

//Contenido que puedo pasar a un componente de un componente de orden superior

export default Greeting;

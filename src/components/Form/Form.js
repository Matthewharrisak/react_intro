import React, { Component } from 'react';
import List from '../List/List';


class Form extends Component {
    state = {
        user:{
    name: '',
    city: ''
            },
          userArray:  [],  
        }
            
       handleChange = (event , typeOfKey) => {
            console.log(event.target.value , typeOfKey);

            this.setState({
                user:{
                    ...this.state.user, // this is keeping the prior values and typeOfKey is changing ! like arrays
                    [typeOfKey]: event.target.value

            }
        });
        }

        submitValues = () => {
            console.log(this.state);

            // this.state.userArray.push(this.state.user);
            this.setState({
                userArray: [...this.state.userArray, this.state.user]
            })
        }
        render(){
        return (
        
        <>
        <label htmlFor='name'>Name:</label>

        <input type = "text" onChange={(event) => this.handleChange(event, 'name')}/>
        <label htmlFor='city'>City:</label>
        <input type = "text" onChange={(event) => this.handleChange(event, 'city')}/>
        <button onClick={this.submitValues}>Submit</button>
        <p>Name:{this.state.user.name} is from {this.state.user.city} </p>
        <List userArray ={this.state.user}/>

         </>
         )
    }
}






  export default Form;
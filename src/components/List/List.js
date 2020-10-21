import React, { Component } from 'react';



class List extends Component{
    render(){
        return(
            <>
            <p>array: {JSON.stringify(this.props.userArray)}</p>
            </>

        )
    }
}


export default List
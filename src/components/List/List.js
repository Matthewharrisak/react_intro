import React, { Component } from 'react';



class List extends Component{

    state={
        favoriteFoods:['soy sauce,' ,
         'granola,' , 
         'sandwhiches,' 
         ,'pasta']
    }

    render(){
        return(
            <>
            <p>array: {JSON.stringify(this.props.userArray)}</p>

            <ul>
            {this.props.userArray.map((user) => {
                return <li key={user.name}>{user.name} is from {user.city}</li>
             })}

            </ul>
            <ol>
                {this.state.favoriteFoods.map((food)=>{ // food here is naming the indexed object that being looked at with map
                    return <li key={food}> {food}</li>
    })}
            </ol>
            </>
     
        )
    }
}


export default List
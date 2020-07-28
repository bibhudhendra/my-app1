import React from "react";

const Ninjas = (props) => {
    
    const {ninjas, deleteNinja} = props;
    const ninjaList = ninjas.map(ninja => {

        if(ninja.age >= 23) {
            return (
                <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div> 
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
            </div>
            )
        }
        else {
            return null;
        }
    });
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas;
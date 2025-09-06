import React from "react";
class UserClass extends React.Component{
constructor(props){
    super(props);

    this.state ={
        count:0,
    }

}

render(){

    const {name, City ,Country} = this.props

    return(
        <div className="user">
            <h2>Name:{name}</h2>
            <h3>City:{City}</h3>
            <h1>Country:{Country} </h1>

        </div>
    )
}
}
export default UserClass;
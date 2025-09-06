const User = ({name,City, Country}) =>{
    return(
        <div className="user">
        
        <h1>Name: {name} </h1>
        <h1>City: {City} </h1>
        <h1>Country: {Country} </h1>
        </div>
    )
}
export default User;
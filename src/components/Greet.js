import React from 'react'

// function Greet(){
//     return <h1>Hello Toykan!</h1>
// }

const Greet = (props) => {
console.log(props)
// const{name,heroName} = props
return (
  <div>  
      <h1>Hello {props.name} a.k.a {props.heroName}</h1>
  <h5>{props.children} </h5>
  </div>
) 
}
export default Greet;
function Button(){
    function handleClick(){
        console.log('Ouch!');
    }
return (
   <button onClick={handleClick}>Click me</button> 
)
}

export default Button;
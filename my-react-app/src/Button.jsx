function Button(){
    function handleClick(e){
        console.log(e);
        console.log('Ouch!');
    }
return (
   <button className="button" onClick={(e)=>handleClick(e.preventDefault)}>Click me</button> 
)
}

export default Button;
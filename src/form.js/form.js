import { useEffect } from "react";
import { useState } from "react";
 function Form (){
    const[ritik,love]=useState("");
    const[last,love1]=useState("");
    const[num,setnum]=useState("");
    const[store,newstore]=useState([]);
    const firstsys=(e)=>{
        const ans=e.target.value;
        love(ans);

    }
const system=(e)=>{
        const ans1=e.target.value;
        love1(ans1)
        console.log(ans1);
    }
    const RatingChange=(e)=>{
        const numval=e.target.value;
        setnum(numval)
       // setnum("");
    }

   const storeVal=()=>{
    newstore([...store,{firstname:ritik,lastname:last,rating:num}])
    setnum("");
    love("");
    love1("");

   } 

   useEffect(()=>{
    if(store.length===0){
        document.body.style.overflow='hidden';
    }
    else{
        document.body.style.overflowY='auto';
    }

   },[store])
    return(
        <>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>
            <label >Name:
            <input type="text" value={ritik} onChange={firstsys} required/></label>
            <br></br>
            <label>Department: 
            <input type="text" value={last} onChange={system}/>  </label>
            <br></br>
            <label>Rating:
                <input type="number" value={num} onChange={RatingChange}/>
            </label>
        </form>
        
        
        <button onClick={storeVal}>search</button>
       
        
        {store.length>0?(
            <div className="main">
       { store.map((name,index)=>(
                    
                    <div className="inner">Name:{name.firstname}||Department:{name.lastname}||Rating:{name.rating}
                    
                    </div>
                    
                
            
        ))}
        </div>

       ) :(<hr></hr>)}
    
        </>
    )
}
export default Form;
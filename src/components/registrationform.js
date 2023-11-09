import { useState } from "react";
  import axios from "axios";
  import Frontfooter from './Frontfooter';
  const Registrationform=()=>{
    const [form2data,setFormdata]=useState({
        'email':'',
        'password' :'',
    })
        const handlesubmit=(e)=>{
            e.preventDefault();
            console.log(form2data)  
            axios.post('http://localhost:5000/addstuden',{form2data})
            .then((res)=>
            alert(res.data.msg))
            if(form2data.email!=="" && form2data.password!==""){
                window.location="http://localhost:3000/loginform"
            }
    }
    return(
           <div>
            <div  className="w-full font-bold text-4xl cursor-pointer font-[Poppins] absolute  flex items-center justify-center z-[-1] bg-[url('https://cdn.wallpapersafari.com/1/78/kt0qwH.jpg')] h-4/5 bg-center bg-cover">
            <form onSubmit={handlesubmit}style={{paddingLeft:"300px",paddingTop:"50px",paddingBottom:"20px",color:"white"}}>
                <h1 className='test-skyblue-800 text-5xl'style={{color:"white",paddingLeft:"150px"}}>Registration Form</h1>
                <br/>  
                        <label>Email:</label>
                        <input style={{paddingRight:"50px" , color:"Black" }} type="email" name='email' onChange={(e)=>setFormdata({...form2data,email:e.target.value})} />
                        <br /><br/>
                        <label>Password:</label>
                        <input style={{color:"Black"}} type="password" name='password' onChange={(e)=>setFormdata({...form2data,password:e.target.value})} />
                        <br /><br/>
                        <input type="submit" value="Submit   " style={{paddingLeft:"180px"}}/>
                        <a className="text-white-800 hover:text-gray-400 duration-500 cursor-pointer"
                    href="http://localhost:3000/loginform">Login Form</a>
                    </form>
            </div>
            <Frontfooter />
        </div>
    )

  }
  export default Registrationform
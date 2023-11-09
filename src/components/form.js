import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const form = () => {
    const [formdata,setFormdata]=useState({
        'Name':'',
        'Recipe':'',
        'Number':'',
        'branch':''
    })
    // const {id} = useParams()
    // console.log(id)
    // useEffect(() => {
    //     axios.get('http://localhost:5000/getstudentbyid/'+id)
    //       .then((res) => {
    //         console.log('9')
    //         console.log(res.data)
    //         setFormdata(res.data.studentdata);
    //       })
    //       .catch((err)=>{console.log(err)})
    //   }, []); 
  
    const handlesubmit = (e)=>{
        console.log('9')
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addstud',{formdata})
        //axios.put('http://localhost:5000/updatedata/'+id,formdata)
        .then((res)=>
        {alert(res.data.message)
        window.location.href='/Getdata';}
        )
    }
    return(
        <div>
            <h1>Share Your Recipes Here </h1>
            <form onSubmit={handlesubmit}>
                <label>Your Name</label>
                <input
                    type = 'text'
                    name = 'Name'
                    onChange={(e) => setFormdata({...formdata,name:e.target.value})}/>
                <br/>
                <label>Recipe Name</label>
                <input
                    type = 'text'
                    name = 'Recipe'
                    onChange = {(e) => setFormdata({...formdata,rollno:e.target.value})}/>
                <br/>
                <label>Mobile Number</label>
                <input
                    type = 'text'
                    name = 'Number'
                    onChange = {(e) => setFormdata({...formdata,college:e.target.value})}/>
                <br/>
                <label>Branch</label>
                <input
                    type = 'text'
                    name = 'branch'
                    onChange = {(e) => setFormdata({...formdata,branch:e.target.value})}
                />
                <br/>
                <input type = "submit" value = "submit"/>
            </form>
        </div>
    )
}
export default form
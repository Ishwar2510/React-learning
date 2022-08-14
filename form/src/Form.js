import React, { useState } from 'react'

function Form(){
    const [formData,setFormData]=useState({
        fname:'',
        lname:'',
        pn:'',
        adre:'',
        email:''
    })

    function eventChange(event ){
        setFormData((preval)=>{
            return (
                {
                    ...preval,
                    [event.target.name]:event.target.value.trim()
                }
            )
        })

    }

    function formSubmit(event){
        event.preventDefault();
        console.log("form submitted")
        alert ("Form Submitted")
    }
    return (
        <>
        <form onSubmit={formSubmit}>
            fname:
            <input required type ="text" name="fname" value={formData.fname} onChange={eventChange}></input><br/><br/>
            lname:
            <input required type ="text" name ="lname"value={formData.lname} onChange={eventChange}></input><br/><br/>
            phoneNumber:
            <input required type ="number" name="pn"value={formData.pn} onChange={eventChange}></input><br/><br/>
            adress:
            <input required type ="text" name="adre" value={formData.adre} onChange={eventChange}></input><br/><br/>
            <input required type ="email" name="email" value={formData.email} onChange={eventChange}></input><br/><br/>

            <button required type ='Submit'>Submit</button>
        </form>

        </>
    )
}
export default Form
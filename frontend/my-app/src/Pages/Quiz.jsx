import React, { useState } from 'react'
import styled from "styled-components"
const Quiz = () => {
    const [question,setquestion]=useState("")
    const [ans,setans]=useState("")
    
    const handleclick=(e)=>{
        e.preventDefault()
        let obj={
            question
        }
        fetch("https://delightful-blue-vest.cyclic.app/api/gpt-3",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
           
           setans(data.answer)
            
        }).catch((err)=>{
            console.log(err)
        })
        setquestion("")

    }
  
    return (
        <Div style={{ display: "flex", flexDirection: "column", margin: "auto", height: "500px",borderRadius:"15px", width: "800px" }}>
            <div style={{ margin: "auto" }}>
                <h1>Shayri Generator</h1>
            </div>
            <div style={{ margin: "auto" }}>
                <label htmlFor="">Topic</label>
            </div>
            <input style={{ height:"50px", width: "100%", borderColor: "teal",textAlign:"center",borderRadius:"15px" }} type="text" value={question} onChange={(e) => setquestion(e.target.value)} />
            <div style={{ margin: "auto" }}>
                <button style={{ height: "50px", width: "400px", borderColor: "teal", backgroundColor: "teal",color:"white",borderRadius:"15px" }} onClick={handleclick}>Submit</button>
            </div>
            <div style={{ margin: "auto" }}>
                <label htmlFor="">Answer</label>
            </div>
            <textarea style={{ height: "200px", width: "100%", borderColor: "red",textAlign:"center" ,justifyContent:"center",borderColor:"teal",borderRadius:"15px"}} type="text" value={ans || ""} />

        </Div>
    )
}

export default Quiz


const Div=styled.div`
font-size: large;
font-weight: 600;
font-family: Verdana, Geneva, Tahoma, sans-serif;
   // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`
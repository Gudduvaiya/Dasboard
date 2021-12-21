import React from 'react'
import "./Home.css"

function Thirdsection() {
    const body={
        height: "430px",
        backgroundImage: 
        "url('https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "0px -400px",
        display: "flex",
    // justifyContent:"center",
    flexDirection: "column",
    alignItems: "center",
    // marginTop:'15px',
    }
    const p = {
        width: "1400px",
        color: "white",
        marginTop: "24px",
        fontSize: "25px",
        fontFamily: "'Pushster', cursive"
      };
    return (
        <div id='services' style={body}>
            <h1 style={{scrollBehavior:"smooth",marginTop: "20px"}}>OUR SERVICES</h1>
            <h2 style={{
            marginTop: "-5px",
            color: "#f0a110",
            fontWeight: "bold",
            marginBottom: "1px",
          }}>IEMSecure Services</h2>
        <p style={p}>
        IEMSecure provides the following services to help your content better-
        <ul style={{marginTop:"15px"}}>
            <li>IEMSecure checks your content for plagiarism and lets you know if any of your content matches the content of any site.</li>
            <li>IEMSecure also checks your content for grammar errors on the go.Along with plagiarism checking, you will also receive grammatical errors in the content and suggestions for the same.</li>
        </ul>
        </p>
        </div>
    )
}

export default Thirdsection

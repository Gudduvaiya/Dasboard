import React from "react";
import "./Home.css";
function Firstsection() {
  const firstbody = {
    height: "410px",
    backgroundColor:"black",
    // backgroundImage:
    //   "url('https://images.unsplash.com/photo-1548003671-5361469aaebe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80')"
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0px -169px",
    display: "flex",
    // justifyContent:"center",
    flexDirection: "column",
    alignItems: "center",
    // marginTop:'15px',
    color: "white",
  };
  const p = {
    width: "1400px",
    marginTop: "24px",
    fontSize: "21px",
    fontFamily: "'PT Sans', sans-serif"
  };
  const button={
      backgroundColor:"black",
      border:"6px solid white",
      borderRadius:"20px",
      color:"white",
      fontSize: "18px",
    padding: "10px",
    marginTop: "15px",
    textDecoration: "none"
  }
  return (
    <div style={firstbody}>
      <h1
        style={{
          marginTop: "15px",
          fontSize: "70px",
          fontFamily: " 'Shizuru', cursive",
        }}
      >
        WHAT IS PALAGIARISM
      </h1>
      <p style={p}>
        The definition of Plagiarism connects with the idea of using other
        people’s thoughts and ideas in the same way without giving the proper
        acknowledgment to them. Therefore in Latin, the word “plagarius” means
        to kidnap. Thus often when we heard that “it is plagiarized content”
        then it means an offensive act of intellectual theft. When you are
        taking or simply copying any content from any web links, you must give a
        citation to that source from which you are copying. Committing
        plagiarism might save time for you but it pays off high. Students often
        indulge in saving extra time using plagiarism content. Depending on the
        institution's rules, they are often expelled or suspended.
      </p>
      <a button style={button} href="https://en.wikipedia.org/wiki/Plagiarism" target="blank">Know More</a>
    </div>
  );
}

export default Firstsection;

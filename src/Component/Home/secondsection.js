import React from "react";
import "./Home.css";

function Secondsection() {
  const body = {
    height: "500px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1636471815144-616b00e21f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0px -130px",
    display: "flex",
    // justifyContent:"center",
    flexDirection: "column",
    alignItems: "center",
    // marginTop:'15px',
  };
  const p = {
    width: "1400px",
    color: "white",
    marginTop: "15px",
    fontSize: "21px",
  };
  return (
    <div id="about" style={body}>
      <h1 style={{ scrollBehavior: "smooth", marginTop: "20px",fontFamily: "'Pushster', cursive" }}>
        IEM Secure
      </h1>
      <p style={p}>
        IEMSecure is a plagiarism-checking website provided by IEM America
        Corporation. The use of all services of IEMSecure is subject to the
        terms and conditions of use. IEMSecure uses search engines to check,
        under the terms agreed upon. The results you receive are generated by
        the post-processing of the search results that you receive. You can read
        the Frequently Asked Questions to know more about IEMSecure. Please
        don’t hesitate to contact us at any time for any queries or suggestions.
        <h2
          style={{
            marginTop: "12px",
            color: "#f0a110",
            fontWeight: "bold",
            marginBottom: "1px",
          }}
        >
          Check if your content is original
        </h2>
        <p>
          You should be sure that the content you upload to your website should
          not be plagiarized. Plagiarized content can be harmful to your
          reputation and deteriorate your search engine ranking. Protect
          yourself from all these by checking your content for plagiarism on the
          IEMSecure website.
        </p>
        <h2 style={{
            marginTop: "12px",
            color: "#f0a110",
            fontWeight: "bold",
            marginBottom: "1px",
          }}>Check if anyone is copying your content</h2>
        <p>
          Your content can be copied by anyone in this world. This can reduce
          the traffic to your website and should be not be allowed. By using
          IEMSecure you can check for content that may have been copied from
          your website.
        </p>
      </p>
    </div>
  );
}

export default Secondsection;
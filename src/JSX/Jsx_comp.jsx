import React from 'react'
import './style.css';

function Jsx_comp() {

  let com = "Hello I am jsx component"

  const mynum = <h1>My self...</h1>;
  const myvalue = <h1>React is {5+5} better than JSX</h1>;

  const comp = (
    <div>
      <h1>I am header</h1>
      <h1>I am header too</h1>
    </div>
  );

const mystyle = {fontsize:"20px", color:"red"}
  return (
    <div>
        <h1>{"Hii I am document.write component"}</h1>
        <hr />

        <h1>{com}</h1>
        <hr />
        <h1>{mynum}</h1>
        <hr />
        <h1>{myvalue}</h1>

        <h1>{comp}</h1>

        <h1 style={mystyle}> Hello!! I am inline CSS</h1>
        <hr />

        <h1 style={{textDecoration:"underline",fontStyle:"italic", backgroundColor:"yellow"}}> Hi! I am internal css only</h1>
        <hr />

        <h1 class="mybox">Hi! I am external CSS</h1>
        <h1 className="mybox">Hi! I am external CSS only</h1>
    </div>
  )
}

export default Jsx_comp
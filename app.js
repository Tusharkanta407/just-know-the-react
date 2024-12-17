/**
 home work 
 <div id = " parent">
 <div id = " child">
 <h1>i am from asia </h1>
 </div>
 </div>**/
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 
 
 const Like = () => <h1 id="abhipsa">I like a girl who is my friend</h1>;
 const Tushar = () =>{
    return(
    <form>
       <input id='name' placeholder='Enter your Name' />
      <input type='email' placeholder='Enter your Email' />
      <input type='password' placeholder='Enter your Password' />
    </form>
    );
 };
const App =() =>{
    const date = new Date().toLocaleTimeString();
    const name = "Abhipsa";
    return(
        <div>
            <Like/>
            <Tushar/>
            <h1>Welcome to our world baby {name}</h1>
            <h2>the time is very good for us {date}</h2>
            
        </div>
    )

}
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);
 
 console.log('Rendered successfully!');
 


/**
 home work 
 <div id = " parent">
 <div id = " child">
 <h1>i am from asia </h1>
 </div>
 </div>
 */
 const parent = React.createElement("div",{
    id : "parent"
 },React.createElement("div",{
    id : "child"
 },[React.createElement("h1",{},"I am from Asia"),("h2",{},"I am from norway")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(head);
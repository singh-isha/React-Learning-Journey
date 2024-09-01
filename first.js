const heading = React.createElement(
  "h1",
  { id: "heading" }, // this is where we can provide attribute to the tag  like : ID's , class and even just a name .
  "hiii through React" //these are props , these  are the children of attributes which we provide to them
);

const root = ReactDOM.createRoot(document.getElementById("main"));
//this render put that heading into DOM by root
root.render(heading);

// how to create div type structute in in react
/*<div id="parent">
<div id ="child">
 <h1>hello world</h1>
 </div>
 </div> */

// react.create Element creates (Object) which is understands by  HTML browser , does NOT create any HTML tag
root.render;


const parent = React.createElement("div", { id: "parent " }, [
    React.createElement("div", { id: "child " }, [
        React.createElement("h1", {}, "hii,i am child"),
        React.createElement("h2", {}, "hii,i am sibling"),
        // pass more than one child or create siblings of existing child then need to create an array for this
    ]),
    // create more than one child then need to create an array for this
  React.createElement("div", { id: "child1 " }, [
    React.createElement("h1", {}, "hii,i am child"),
    React.createElement("h2", {}, "hii,i am sibling"),
  ]),
]);
console.log(parent);

const root1 = ReactDOM.createRoot(document.getElementById("main"));

root.render(parent);

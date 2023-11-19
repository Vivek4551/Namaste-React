// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

// Create Header element like navbar using createElement
/*
 * 
<div class="header">
<h1>Title</h1>
<ul>
<li>Home</li>
<li>About Us</li>
</ul>
 * 
 * 
 */
// const heading = ce(
//   "div",
//   {
//     className: "header",
//     key: "header",
//   },
//   [ce(
//     "h1",
//     {
//       key: "Title",
//     },
//   "Title"), ce(
//     "ul",
//     {
//       key: "ul",
//     },
//   [ce(
//     "li",
//     {
//       key: "Home",
//     },
//   "Home"),ce(
//     "li",
//     {
//       key: "About Us",
//     },
//   "About Us")])]
// )

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component

// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}
// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/>
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);


// MY CODE FROM HERE , WHAT I HAVE WRITTEN WHILE LEARNING THIS

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// JSX -> javascript syntax which is easier to create react elements, it is not HTML in JS , it is html like syntax or XML like
// const jsxHeading = (
//   <h1 id="heading" tabIndex="5">
//     Namaste React using JSX!
//   </h1>
// );

// Component -> class based component, Functional based component
// Functional based component -> a javscript function which returns some pieces of jsx or react element is called functional based component
// const headingComponent = () => {
//   return (
//     <h1 id="heading" tabIndex="5">
//       Namaste React from Vivek1!
//     </h1>
//   );
// }

const TitleComponent = () => (
  <h1 id="head" tabIndex="5">
    Namaste React from TitleComponent!
  </h1>
);

const elem = <span>React Element</span>

// react element
const title = (
  <h1 id="head" tabIndex="5">
  {elem}
    Namaste React from title react element!
  </h1>
);

// another way for functional component
// component composition
// const HeadingComponent2 = () => (
//   <div id="container">
//     <TitleComponent />
//     <h1 id="heading" tabIndex="5">
//       Namaste React from Vivek!
//     </h1>
//   </div>
// );

const HeadingReturn = () => {
  return (
    <div id="container">
      <TitleComponent />
      {TitleComponent()}
      <TitleComponent></TitleComponent>
      <h1 id="heading" tabIndex="5">Namaste React from Vivek!</h1>
      {title}
    </div>
  );
}

// console.log(heading);
// console.log(jsxHeading);

const root2 = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHeading);
// root.render(headingComponent());
// root.render(<HeadingComponent2 />);
root.render(HeadingReturn());

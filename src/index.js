import React from 'react';
import ReactDom from 'react-dom';


// since this has a capital function name, React knows this is a component
function Greeting() {
  return <h4>This is Emre and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
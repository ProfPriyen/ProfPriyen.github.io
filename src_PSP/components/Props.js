//1.	npm i -D react-router-domimport './App.css'; // Require when You want to import css property.
import F2 from './F2.js';

function Props() {
 const abc="import from file F2 along with this message";
  return (
 <div>
   <h1>Hello World</h1>
    <F2 name="Priyen"   surname="Patel"/> 
    <F2 name="ABC"   surname="XYZ"/>
    <F2 name={abc}  surname="Not given"/>
   
    </div>
  );
}

export default Props;

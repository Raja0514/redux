//component
//import Functinalcomp from "./components/Functionalcomp";

//component
//  import Test from "./components/Test";
//  import Test3 from "./components/Test3";
//  import Test1 from "./components/Test1";

//string declration
// const data = "hello world";

//number declartion
// const number = 50;

//function declartion
// function senddata() {
//   return (
//     <>
//       <p>i am function</p>
//     </>
//   );
// }

// const obj={
//   name:'raja',
//   age:35
// }

//object declartion
// const obje = {
//   data0: "object",
//   data1: "object",
//   data2: "object",
// };

//array declartion
//const arrays = ["array", "array", "array", "array"];

// function App() {
//   return (
//     <div >
//       <Test/>
//       <Test1/>
//       <Test3/>
//     </div>
//   );
// }

// export default App;

import Header from "./components/Header";
import Product from "./components/Product";

import Image1 from "./aseets/download.jpg";
import Image2 from "./aseets/images (1).jpg";
import Image3 from "./aseets/images (2).jpg";
import Image4 from "./aseets/images.jpg";

import Cartitems from "./components/Cartitems";

import './components/Style.css'

const mobiles = [
  {
    id: 1,
    name: "Samsung Galaxy1",
    price: "150 OMR",
    model: "S8 Plus",
    url: Image1,
  },
  {
    id: 2,
    name: "Samsung Galaxy2",
    price: "175 OMR",
    model: "S8 plus",
    url: Image2,
  },

  {
    id: 3,
    name: "Samsung Galaxy3",
    price: "200 OMR",
    model: "S8 Plus",
    url: Image3,
  },

  {
    id: 4,
    name: "Samsung Galaxy4",
    price: "250 OMR",
    model: "S8 Plus ",
    url: Image4,
  },
];


function App() {
  return (
    <>
      <div>
      <Header />
      </div>
      
      <div className="product">
      {
       mobiles.map((items,index)=><Product key={index} item={items}/>)

       
      }
      </div>
      <div className="cartitems">
       <Cartitems/>
      </div>
     
    </>
  );
}

export default App;

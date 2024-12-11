import './App.css';
import Count from './components/Count'

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }



const Person = (props) => {
  return (
    <>
    <h2> Name : {props.name} </h2>
    <h3> Last Name : {props.lastName} </h3>
    <h3> Age : 30 </h3>
    </>
  )
}


const App = () => {

  const name = "Ali";
  const isNameShowing = false;
  const isMinor = 18;

   return (
    <div className='App'>
       <h1> Hello {name} </h1>
       <h1> Hello {isNameShowing ? name : "World"} </h1>

       {
        isMinor >= 18 ? ( <> Is Major </>) 
        : ( <> Is Minor </> )
       }

       <Person name='Ali' lastName='Zawa'/>
       <Person />


       <Count />


    </div>
   )
}

export default App;

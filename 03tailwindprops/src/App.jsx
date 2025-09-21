import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className='bg-green-400 text-black p-4'>Tailwind test</h1>
//       className="flex flex-col rounded-xl  p-4"
//       style={{
//         border: "0.88px solid",

//         backdropFilter: "saturate(180%) blur(14px)",
//         background: " #ffffff0d",
//       }}
//     >
//       <div>
//         <img
//           src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
//           alt="nft-gif"
//           width="350"
//           height="350"
//           className="rounded-xl"
//         />
//       </div>
//       <div className="flex flex-col  rounded-b-xl py-4 ">
//         <div className="flex justify-between">
//           <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
//           <h1 className="font-bold font-RubikBold">Price</h1>
//         </div>
//         <div className="flex  justify-between font-mono">
//           <p>#345</p>
//           <p>0.01</p>
//         </div>
//       </div>
          
//     </>
//   )
// }




 function App() {
  let myObj={
    username:"Devansh",
    age:21
  }
  return (
    <>
    <Card username="Chai aur code " />
    <Card />
    </>
  )
}




export default App

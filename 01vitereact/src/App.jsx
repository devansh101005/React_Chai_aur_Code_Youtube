
import Chai from "./chai"
function App() {
const username= "Chai aur code"

  return (
    // <h1>Chai aur react with vite|Devansh</h1>
    <>
    <Chai/>
    <h1>Chai aur react {username}</h1>
    {/* that username used in h1 is evaluation expression ,so it cant be used like js */}
    {/* yahan ek baar mai ek hi element export kar skte hain
    ye jsx ka rule hai
     to escape this   div bna do  */}
    </>
  )
}

export default App

import { useState } from "react";
import Login from "./Components/Login";
import Notices from "./Components/Notices";
import myContext from "./Components/Context/Context";

export default function App() { 
  const [user, setUser] = useState({
    name:'',
    isLoggedIn: false
  });
  return (
    <div className='App'>
      {/* Either login or Notices Components will be visible at a time */} 
      <myContext.Provider value={{user, setUser}}>
        {
          // user.isLoggedIn ? <Notices /> : 
          // <Login />
          <Notices />
        }
      </myContext.Provider>
        
    </div>
  )
}

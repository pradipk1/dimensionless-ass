import { useContext, useState } from "react";
import './css/Login.css'
import myContext from "./Context/Context";

const Login = () => {

  const {user, setUser} = useContext(myContext);
  console.log(user);

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [pClass, setPClass] = useState("invalidAlert")

  const [users, setUsers] = useState([])

  const handleForm = (e) => {
    e.preventDefault();

    fetch('http://localhost:3002/users')
    .then(res => res.json())
    .then((data) => {setUsers(data)})

    let flag = false;
    users.map((ele) => {
      if(ele.username===userData.username && ele.password===userData.password){
        flag = true;
      }
    });
    if(flag===true){
      setUser({
        ...user,
        name: userData.username,
        isLoggedIn: true
      })
    } else {
      setPClass('invalidAlertActive');
    }
  }
  
  return (
    <>
      <div data-testid="loginForm">
        <h1>Login</h1>
        <form onSubmit={handleForm}>
          <label>
            Username:
            <input type="text" name="username" onChange={(e) => {
              setUserData({
                ...userData,
                username: e.target.value
              })
            }}/>
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" onChange={(e) => {
              setUserData({
                ...userData,
                password: e.target.value
              })
            }}/>
          </label>
          <br />
          <input type="submit"></input>
        </form>
      </div>
      {/* Show the below p tag only when someone tried to login with invalid credentials */}
      <p data-testid="invalidAlert" className={pClass}>Invalid credentials</p>
    </>
  );
};

export default Login;

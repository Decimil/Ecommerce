// import { useRef, useState, useEffect , useContext} from "react";
// import AuthContext from "./context/AuthProvider";
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from './api/axios'

// const LOGIN_URL = 'http://localhost:1337';

// const Login = () => {
//     const userRef = useRef();
//     const errRef = useRef();
//     const theme = createTheme();
//     const { setAuth } = useContext(AuthContext);
//     const [errMsg, setErrMsg] = useState('');
//     const [user, setUser] = useState('');
//     const [ pwd, setPwd] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     },[user, pwd])

//     const handleSubmit = async (e) =>{

//         e.preventDefault();
//         try {
//           const response = await axios.post(LOGIN_URL, 
//             JSON.stringify({user,pwd}),
//             {
//             headers: {'Content-Type':'application/json'},
//             withCredentials: true
//             });

//           console.log(Json.stringify(response?.data))
//           const accessToken = response?.data?.accessToken;
//           const roles = response?.data?.roles;
//           sethAuth({user, pwd, roles, accessToken});
//           setUser('');
//           setPwd('');
//           setSuccess(true);
//         }
//         catch(err)
//         {
//           if(!err?.response)
//           {
//             setErrMsg('No Server Response');
//           } else if (err.response?.status === 400)
//           {
//             setErrMsg('Missing Username or Password');
//           }
//           else if (err.response?.status === 401)
//           {
//             setErrMsg('Unauthorized');
//           }else{
//             setErrMsg('Login Failed');
//           }
//           errRef.current.focus();
//         }    

//       }
    
//       return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>You are logged in!</h1>
//                     <br />
//                     <p>
//                         <a href="#">Go to Home</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Sign In</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                         />

//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                         />
//                         <button>Sign In</button>
//                     </form>
//                     <p>
//                         Need an Account?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <a href="#">Sign Up</a>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Login
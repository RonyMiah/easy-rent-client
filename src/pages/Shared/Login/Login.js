import React from 'react';
import Grid from '@mui/material/Grid';
import loginImage from '../../../images/login.jpg';
import Typography from '@mui/material/Typography';
import './Login.css';
import { TextField } from '@mui/material';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    const { register, handleSubmit } = useForm();
    const { signInWithGoogle, logInUser, error } = useAuth()

    // const { isFetching, error } = useSelector((state) => state.login);
    const navigate = useNavigate()

    const onSubmit = data => {
        logInUser(data.email, data.password)
        console.log(data)
        navigate('/home')
    };


    const handleGoogleSignIn = () => {
        signInWithGoogle(navigate)
        navigate('/home')


    }


    // const handleClick = (e) => {
    //     e.preventDefault();
    //     login(dispatch, { userName, password });
    //     console.log(userName, password);
    //     navigate('/home')

    // };


    return (
        <div className='login-container'>
            <Typography className='login-header' variant="h4" gutterBottom component="div">
                Please Log in
            </Typography>
            <div className='login-grid'>
                <Grid container spacing={3} maxWidth="lg" justifyContent="center"
                    alignItems="center">
                    <Grid sx={{padding:0}} item xs={12} md={6}>
                        <img className='login-img' src={loginImage} alt="" /> <br />
                        <Link to='/register'>New here? Please Sign up </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField {...register("email")} type='email' id="outlined-basic" label="Email" variant="outlined" /> <br />
                        <TextField {...register("password")} type='password' id="outlined-basic" label="Password" variant="outlined" /> <br />
                            {/* <Button type="submit" variant="contained" color="primary" onClick={handleClick} disabled={isFetching}>Login</Button> */}
                            <input type="submit" className="btn solid" />
                        </form>
                        {error && <TextField>Something went wrong...</TextField>}
                    </Grid>
                    <Typography sx={{marginBottom:'16px'}}> or Log in with <AiOutlineMail onClick={handleGoogleSignIn} className='login google'></AiOutlineMail> </Typography>
                </Grid>
            </div>
        </div>
    );
};

export default Login;
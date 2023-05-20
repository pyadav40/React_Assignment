import { Grid, Paper,Typography, TextField, Button} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom';
 
let initState={name:'',mobile:'',email:''}
const LoginPage = () => {
  let [loginfo,setLogInfo]=useState(initState)

 let [formState, setFormState]=useState(false)
 
const paperStyle={color:'white',height:'65vh',width:350, padding:10, margin:'50px auto', background: 'linear-gradient(23deg, rgba(2,0,36,1) 0%, rgba(147,224,36,0.6615021008403361) 13%, rgba(0,212,255,1) 100%)' };
const logField ={ padding:10, align:'center'}

useEffect(()=>localStorage.removeItem('User_details'),[])


let handleChange=(e)=>
{
  setLogInfo({...loginfo,[e.target.name]:e.target.value})
  setFormState(true)
}
 
let onSubmit=(e)=>
{
  e.preventDefault();
  // setErrors(validate(loginfo))
  localStorage.setItem('User_details',JSON.stringify(loginfo))
  
}
 
  return (  
    <Grid>
        <Paper style={paperStyle}>
        <form method='post' onSubmit={onSubmit}>
        <Grid align='center'>
        <Typography variant='h6'>Sign-In</Typography>
        </Grid>
        <Grid align='center' style={logField}>
          <TextField required name='name' onChange={handleChange} color="secondary" fullWidth label='User Name' required variant='outlined' placeholder='User Name'/>
        </Grid>
        <Grid align='center'style={logField}> 
          <TextField name='mobile' onChange={handleChange} color="secondary"  fullWidth type='number' label='Mobile Number' required variant='outlined' placeholder='Mobile No.'/>
        </Grid> 
        <Grid align='center'style={logField}> 
          <TextField  name='email' onChange={handleChange} color="secondary" fullWidth type='email' label='E-Mail' required variant='outlined' placeholder='E-Mail'/>
        </Grid> 
        <Button type='submit' variant="contained" fullWidth>Submit</Button>
        
        <Grid align='center'style={logField}> 
  
        {/* <NavLink to="/Comp1">Component Detail 1</NavLink> */}
        
 
        </Grid> 
        </form>
        <Grid align='center'style={logField}> 
       {formState?<Button to="/Comp1" component={NavLink} variant="outlined">Component Details 1</Button>:
       <><Button variant="outlined">Component Details 1</Button><Typography color="black">You must enter details before accessing the Page</Typography></>}
        </Grid>
        </Paper>
    </Grid>
  )
}

export default LoginPage
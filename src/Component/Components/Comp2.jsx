import React from 'react'
// import Data from './Data'
import { useState } from 'react';
import { Grid,Paper,FormControlLabel,Checkbox, Box} from '@mui/material';
 
const Comp2 = ({arr1}) => {
var my_arr = Array(arr1.length-1).fill(false);
let [isCheckedarr1,setarr1]=useState(my_arr)
let [isheadchecked,sethead]=useState(false)
//  console.log(my_arr)
const paperStyle={color:'white',height:"auto",width:450, padding:10, margin:'50px auto', background: 'linear-gradient(23deg, rgba(2,0,36,1) 0%, rgba(147,224,36,0.6615021008403361) 13%, rgba(0,212,255,1) 100%)' };
 
const handleChange1 = (event) => {
  sethead(event.target.checked)
  // setarr1([event.target.checked,event.target.checked,event.target.checked,event.target.checked,event.target.checked])
  setarr1(Array(arr1.length-1).fill(event.target.checked))
};

 
 
const handleChange2 = (event, index) => {
  const newArr = [...isCheckedarr1]; // Create a copy of the array
  newArr[index] = event.target.checked; // Update the value at the specified index
  setarr1(newArr); // Update the state with the new array
};

 
// ----------------------
const children = arr1.slice(1).map((ele,i)=>
{
 
  return (
    <Box key={i} sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
    <FormControlLabel
      label={ele}
      value={i}
      control={
        <Checkbox checked={isCheckedarr1[i]} onChange={(event) => handleChange2(event, i)} />
      }
    />
  </Box>
    )
})
 

// -----------
  return (
    <Grid>
        <Paper style={paperStyle}>
    
    <FormControlLabel
    label={arr1[0]}
    control={
      <Checkbox
        checked={isheadchecked || isCheckedarr1.every((value) => value === true)}
        onChange={handleChange1}
      />
    }
  />  
   
     
      {children}
          </Paper>
          </Grid>
  )
}

export default Comp2
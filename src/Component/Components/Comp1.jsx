import { Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Data from '../Data';
import Comp2 from './Comp2';

const deptData=JSON.parse(JSON.stringify(Data))

const columns=[
{field:'id',headerName:'ID', width:70},
{field:'title',headerName:'Title', width:150},
{field:'body',headerName:'Discription',flex:1, width:'auto'}
]

  
const Comp1 = () => {
  const logField ={ padding:10, align:'center'}

let arr1=Object.values(deptData[0])
arr1=[arr1[0],...arr1[1]]
let arr2=Object.values(deptData[1])
arr2=[arr2[0],...arr2[1]]
 
let [data_api,updateData]=useState([])
  let getData=()=>
  {
    async function getAPIData()
    {
        const apidata=await fetch('https://jsonplaceholder.typicode.com/posts')
        const res=await apidata.json();
        updateData(res)
    }
    getAPIData();
  }
 
  useEffect(()=>{
    getData();},[]);
 
 const rows=data_api;
  
    return (  
        <Box sx={{marginLeft:20, marginTop:5, height: 400, width: '70%' }}>
         <DataGrid align='center' rows={rows} columns={columns}
         sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'secondary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'info.main',
          },
        }}
         initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick/>
        <Grid align='center'style={logField}> 
        
        {/* <NavLink to="/Comp2">Component Details 2</NavLink> */}
        {/* <Button to="/Comp2" component={NavLink} variant="contained">Component Details 2</Button> */}
        {/* <Button to="/CompTest3" component={NavLink} variant="contained">Component Details 2</Button> */}

  </Grid> 
    <Comp2 arr1={arr1}/>
    <Comp2 arr1={arr2}/>
      </Box>
      
  )
}

export default Comp1
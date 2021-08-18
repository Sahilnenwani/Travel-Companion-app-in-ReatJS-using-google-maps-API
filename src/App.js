import React, {useState, useEffect}from "react"
import {getPlacesData} from "./api"
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./Compnents/Header/Header";
import List from "./Compnents/List/List.jsx";
import Map from "./Compnents/Map/Map.jsx";


function App() {
const [places, setplaces]=useState([]);
const [cooridnates,setcooridnates] =useState({});
const [bounds,setbounds] =useState(null);


useEffect(() => {
  navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
  setcooridnates({lat:latitude, lng:longitude })    
  })
}, [])

useEffect(() => {
    
  getPlacesData(bounds.sw,bounds.ne)
    .then((data)=>{
      setplaces(data)
    })
}, [cooridnates,bounds]);

  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width:'100%'}} >
      <Grid item xs={12} md={4}>
      <List places={places}/>
      </Grid>
      <Grid item xs={12} md={8}>
      <Map setcooridnates={setcooridnates} setbounds={setbounds} cooridnates={cooridnates}/>
      </Grid>


    </Grid>
      
    </>
  );
}

export default App;

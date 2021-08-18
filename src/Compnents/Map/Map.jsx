// import React from 'react';
// import GoogleMapReact  from 'google-map-react';
// import { Paper,Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
// import Rating from "@material-ui/lab"

// import useStyles from './style'

// const Map = ({setcooridnates,setbounds,cooridnates}) => {
//     const classes = useStyles;
//     const isMobile= useMediaQuery('(min-width:600px)');
    
//     return (
//         <div className={classes.mapContainer}>
//             <GoogleMapReact              
//                 bootstrapURLKeys={{ key: 'AIzaSyCZYfki69FHrablhsPw_CjWcAi5EMQwW2s' }}
//                 defaultCenter={cooridnates}
//                 center={cooridnates}
//                 defaultZoom={14}
//                 margin={[50, 50, 50, 50]}
//                 options={' '}
//                 onChange={''}
//                 onChildClick={''}     
//             >   
//             </GoogleMapReact>
//             <h1>Maps</h1>
//         </div>
        
//     )
// }

// export default Map









import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
import useStyles from './style';

const Map = ({ setcooridnates,setbounds,cooridnates }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div style={{margin:"20px"}} className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCZYfki69FHrablhsPw_CjWcAi5EMQwW2s' }}
        defaultCenter={cooridnates}
        center={cooridnates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setcooridnates({ lat: e.center.lat, lng: e.center.lng });
          setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      >
        
      </GoogleMapReact>
    </div>
  );
};

export default Map;








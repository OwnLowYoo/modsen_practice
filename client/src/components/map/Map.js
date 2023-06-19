import React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl'
import {Box} from "@mui/material";
import {useValue} from "../../context/ContextProvider";
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = () => {
    const {state:{location:{lng, lat}}, dispatch} = useValue()
    return (
        <Box
            sx={{
                height:725,
                position:'relative'

            }}
            >
            <ReactMapGL
                mapboxAccessToken={process.env.REACT_APP_TOKEN}
                initialViewState={{
                    longitude:lng,
                    latitude:lat,
                    zoom:8
                }}
                mapStyle='mapbox://styles/mapbox/streets-v11'
                >
                <Marker
                latitude={lat}
                longitude={lng}
                draggable
                onDragEnd={(e)=> dispatch({type:'UPDATE_LOCATION', payload:{lng:e.lngLat.lng, lat:e.lngLat.lat}})}
                />
            </ReactMapGL>
        </Box>
    )
};

export default Map;
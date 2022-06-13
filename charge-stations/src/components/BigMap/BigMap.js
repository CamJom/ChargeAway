import React, { useState } from "react"
import ReactMap from "react-map-gl"

export default function BigMap() {

  // const [viewport, setViewPort] = useState({
  //   latitude: 37.2431,
  //   logitude: 115.7930,
  //   zoom: 10
  // })
  
  return (
    <div>
      <ReactMap
      initialViewState={{
        longitude: -122.7643204,
        latitude: 45.3024788,
        zoom: 18
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoiY2Ftam9tIiwiYSI6ImNsNGJ1dXJ1NTAwZGUzY3M2dzQzbWgyNWUifQ.FJxrn7ZeGKS-1Gnz3OlvwQ
      "
      />
    </div>

  )
}

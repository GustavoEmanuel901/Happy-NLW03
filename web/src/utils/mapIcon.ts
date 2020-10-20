import L from 'leaflet';

import mapMarkerImg from '../images/Face.svg';

const MapIcon = L.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default MapIcon
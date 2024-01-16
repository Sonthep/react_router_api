import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

// Center coordinates for Bangkok
const center = {
  lat: 13.7563,
  lng: 100.5018,
};

const GoogleAPI = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCBMzhHWIENwZuLv9KkorSNqBWjV-kYfGE', // Replace with your API key
    libraries,
  });

  

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12} // Adjust zoom level as needed
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleAPI;

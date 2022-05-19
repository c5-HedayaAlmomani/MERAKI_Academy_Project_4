// import React from "react";
// import GoogleMapReact from "google-map-react";
// // import LocationPin from "../LocationPin/LocationPin";
// import locationIcon from "@iconify/icons-mdi/map-marker";
// import { Icon, InlineIcon } from "@iconify/react";

// const Map = () => {
//   const location = {
//     address: "1600 Amphitheatre Parkway, Mountain View, california.",
//     lat: 37.42216,
//     lng: -122.08427,
//   };
//   return (
//     <div className="map">
//       <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//       <div className="google-map">
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: "https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyBVSc2POPGzhUp_9yht4WLebYh7IFU5UpU&parameters",
//           }}
//           defaultCenter={location}
//         >
//           {/* <LocationPin */}
//     <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//     lat={location.lat}
//             lng={location.lng}
//             text={location.address}
//   </div>

//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// };

// export default Map;
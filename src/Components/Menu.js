import React from 'react';

function Menu({ image, name, type, id }) {
  return (
    <div className="item" key={id}>
      <div className="item-con" >
        <div className="item-container">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <p>{type}</p>
          <p>{id}</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;

// import React from 'react';

// function Menu({ menuItem }) {
//   return (
//     <div className="item">
//       {menuItem.map((app, index2) => {
//         return (
//           <div className="item-con" key={app._id}>
//             <div className="item-container">
//               <img src={app.imageUrl} alt="" />
//               <h2>{app.name}</h2>
//               <p>{app._id}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Menu;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Menu({ menuItem }) {
//   const [apps, setApps] = useState([]);

//   const url = 'https://data-polahub.herokuapp.com/api/data-app';

//   useEffect(() => {
//     getIconApp();
//   }, []);

//   const getIconApp = () => {
//     axios
//       .get(`${url}`)
//       .then((res) => {
//         // handle success
//         const allIconApp = res.data;
//         // console.log(allIconApp);
//         setApps(allIconApp);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   };

//   return (
//     <div className="item">
//       {apps.map((app, index2) => {
//         return (
//           <div className="item-con" key={app._id}>
//             <div className="item-container">
//               <img src={app.imageUrl} alt="" />
//               <h2>{app.name}</h2>
//               <p>{app._id}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Menu;

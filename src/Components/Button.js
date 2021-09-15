import React from 'react';

function Button({ type, id, handleClick }) {
  // const handleClick = (cat) => {
  //   filter(cat);
  // };

  // () => filter(cat)
  return (
    <div className="buttons" key={id}>
      <button
        id={type}
        type={type}
        // onClick={(e) => e.preventDefault(filter(button))}
        onClick={handleClick}
        className="btn"
      >
        {type}
      </button>
    </div>
  );
}

export default Button;

// import React, { useState } from 'react';

// function Button({ button, filter }) {
//   const [clickedId, setClickedId] = useState(-1);

//   const handleClick = (event, i) => {
//     console.log(i);
//     setClickedId(i);
//     // doSomethingAfterClick(event);
//   };
//   return (
//     <div className="">
//       {button.map((cat, i) => (
//         <button
//           type="button"
//           name={cat._id}
//           onClick={(event) => {
//             handleClick(event, i);
//             filter(cat);
//           }}
//           className={`py-4 pl-3 customButton ${
//             i === clickedId ? 'active' : ''
//           }`}
//         >
//           {cat}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default Button;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Button({ button, filter }) {
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
//     <div className="buttons">
//       {apps.map((cat, i) => {
//         return (
//           <button type="button" onClick={() => filter(cat)} className="btn">
//             {cat.type}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// export default Button;

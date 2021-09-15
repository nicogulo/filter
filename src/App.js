// import React, { useState, useEffect } from 'react';
// import Menu from './Components/Menu';
// import Button from './Components/Button';
// import axios from 'axios';

// function App() {
//   const [menuItem, setMenuItem] = useState([]);

//   const url = 'https://data-polahub.herokuapp.com/api/data-app';
//   const allCategories = ['All', ...new Set(menuItem.map((app) => app.type))];
//   console.log(allCategories);

//   const [buttons, setButtons] = useState(allCategories);
//   useEffect(() => {
//     getIconApp();
//   }, []);

//   const getIconApp = () => {
//     axios
//       .get(`${url}`)
//       .then((res) => {
//         // handle success
//         const allIconApp = res.data;
//         setMenuItem(allIconApp);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   };

//   //Filter Function
//   const filter = (button) => {
//     if (button === 'All') {
//       setMenuItem(menuItem);
//       return;
//     }
//     const filteredData = menuItem.filter((app) => app.type === button);
//     setMenuItem(filteredData);
//   };

//   return (
//     <div className="App">
//       <div className="title">
//         <h1>
//           Menu
//           <span> Filter</span>
//         </h1>
//       </div>

//       <Button button={allCategories} filter={filter} />
//       <Menu menuItem={menuItem} />
//     </div>
//   );
// }
// export default App;

// const getIconApp = () => {
//   axios
//     .get(`${url}`)
//     .then((res) => {
//       // handle success
//       const allIconApp = res.data;
//       setMenuItem(allIconApp);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     });
// };

import React, { useState, useEffect } from 'react';
import Menu from './Components/Menu';
import Button from './Components/Button';
import axios from 'axios';

function App() {
  //   // const [menuItem, setMenuItem] = useState([]);
  //   // const url = 'https://data-polahub.herokuapp.com/api/data-app';

  //   // const allCategories = [
  //   //   'All',
  //   //   'semua',
  //   //   ...new Set(datas.map((data) => data.type)),
  //   // ];
  //   // console.log(allCategories);

  //   // //Filter Function
  //   // const filter = (button) => {
  //   //   if (button.type === 'All') {
  //   //     return datas;
  //   //   }
  //   //   const filteredData = datas.filter((data) => data.type === button);
  //   //   setDatas(filteredData);
  //   // };

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getIcon();
  }, []);

  const getIcon = async () => {
    const res = await axios.get(
      'https://data-polahub.herokuapp.com/api/data-app'
    );
    setDatas(res.data);
  };

  // const handleClick = () => {
  //   filter
  // };

  //Filter Function
  const handleClick = (e) => {
    const type_name = e.target.id;
    const value = datas.map((data) =>
      data.type === type_name ? 
    );
  };
  // const filter = datas.filter(function (value) {
  //   const type = datas.map((data) => data.type);
  //   return value.type === type;
  // });
  // console.log(filter);

  const category = datas.map((data) => (
    <Button type={data.type} id={data._id} handleClick={handleClick} />
  ));

  const menu = datas.map((data) => (
    <Menu
      image={data.imageUrl}
      name={data.name}
      type={data.type}
      id={data._id}
    />
  ));

  return (
    <div className="App">
      <div className="title">
        <h1>
          Menu<span>Filter</span>
        </h1>
      </div>
      {category}
      {menu}
    </div>
  );
}

export default App;

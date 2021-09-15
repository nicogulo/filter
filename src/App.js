import React, { useState, useEffect } from 'react';
import Menu from './Components/Menu';
import Button from './Components/Button';
import axios from 'axios';

function App() {

  const [datas, setDatas] = useState([]);
  const [selected, setSelected] = useState(datas)

  useEffect(() => {
    getIcon();
  }, []);

  const getIcon = async () => {
    const res = await axios.get(
      'https://data-polahub.herokuapp.com/api/data-app'
    );
    setDatas(res.data);
  };

  // Filter Function
  const handleClick = (e) => {
    const type_name = e.target.id;
    const isinya = datas.map(data => data.type === type_name ? setSelected(data) : 'no') 
    return isinya
  };

  

  const category = datas.map((data) => (
    <Button type={data.type} id={data._id} handleClick={handleClick} />
  ));

  const card = <Menu image={selected.imageUrl} name={selected.name} type={selected.type} id={selected._id} />

  const menu = datas.map((data) => (
    <Menu
      image={data.imageUrl}
      name={data.name}
      type={data.type}
      id={data._id}
    />
  ));

  return (
    <div className="App" >
      <div className="title">
        <h1>
          Menu<span>Filter</span>
        </h1>
      </div>
      {category}
      {card}
    </div>
  );
}

export default App;

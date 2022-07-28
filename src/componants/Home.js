import { Switch } from 'antd';
import React, { useState } from 'react';
import Users from '../MOCK_DATA.json';
import Table from './Table';


function Home() {

    const [query,setQuery] =useState("");
    const[order,setOrder] = useState("ASC");
    const[data,setData]= useState(Users);
    const[toggle,setToggle] = useState("false");

    const sorting = ({data, byPower}) =>{

      const sortingData = [...data].sort((a,b)=>{

        return byPower? a.power > b.power ? 1:-1 : a.hero_name > b.hero_name ? 1:-1;

      })
      setData(sortingData)

    }

const toggler=()=>{
         if(toggle){
          setToggle(false)
         } else {
          setToggle(true)
         }

          toggle ? sorting({data: data, byPower: true}): sorting({data: data, byPower: false}) ;
        }

 const search =(data) => {
        return data.filter((item) => item.hero_name.toLowerCase().includes(query));

      };
  return (
    <div  className="App">
         <input type="text"
                placeholder='search..'
                className='search'
                onChange={e=> setQuery(e.target.value)}
          />
       <p>sorting by power:</p>

        <Switch className='switch'
          onClick={toggler}/>

       <Table data={search(data)}  />

    </div>
  )
}

export default Home
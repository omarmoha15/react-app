import { Switch } from 'antd';
import React, { useState } from 'react';
import Users from '../MOCK_DATA.json';
import Table from './Table';


function Home() {

    const [query,setQuery] =useState("");
    const[order,setOrder] = useState("ASC");
    const[dataa,setDataa]= useState(Users);
    const[toggle,setToggle] = useState("false");

    const sorting = () =>{
      const sortingData = [...dataa].sort((a,b)=>{
        return a.first > b.first ? 1:-1
      })
      setDataa(sortingData)
    }

        const toggler=()=>{
         toggle ? setToggle(false) : setToggle(true);

        }

    const search =(data) => {
        return data.filter((item) => item.hero_name.toLowerCase().includes(query));


      };
  return (
    <div  className="App">
         <input type="text"
       placeholder='searc..'
       className='search'
       onChange={e=> setQuery(e.target.value)}
       />
       <p>sorting by power:</p>

        <Switch className='switch'
          onClick={toggler}/>
         {toggle ? <span >hi</span> : <span >bye</span> }
         <Table data={search(Users)}/>






    </div>
  )
}

export default Home
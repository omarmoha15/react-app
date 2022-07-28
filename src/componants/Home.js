import { Switch } from 'antd';
import React, { useState } from 'react';
import Users from '../MOCK_DATA.json';
import Table from './Table';


function Home() {

    const [query,setQuery] =useState("");
    const[order,setOrder] = useState("ASC");
    const[dataa,setDataa]= useState(Users);
    const[toggle,setToggle] = useState("false");

    const sorting = (col) =>{
      if(order === "ASC"){
      const sorted = [...dataa].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1
      );
        setDataa(sorted);
    setOrder("DSC");
    }
    if(order === "DSC"){
      const sorted = [...dataa].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1
      );
        setDataa(sorted);
    setOrder("ASC");
    }
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
         {toggle ? <span>{()=>sorting(dataa.hero_name)}</span> : <span>{()=>sorting(dataa.power)}</span> }

       <Table data={search(Users)}/>




    </div>
  )
}

export default Home
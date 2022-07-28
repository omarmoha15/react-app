import React, { useState } from 'react';
import Users from '../MOCK_DATA.json';
import Table from './Table';
import { Switch } from 'antd';

function Home() {
    const [query,setQuery] =useState("");
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
       <Switch className='switch'/>
       <Table data={search(Users)}/>



    </div>
  )
}

export default Home
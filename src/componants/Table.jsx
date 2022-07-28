import { Switch } from 'antd';
import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';



function Table({data}) {
  const[dataa,setDataa]= useState({data});
  const[order,setOrder] = useState("ASC");
    const [rating,setRating] = useState(null);
    const[toggle,setToggle] = useState("false");

const sorting = (col) =>{
  if(order === "ASC"){
  const sorted = [...data].sort((a,b) =>
  a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1
  );
    setDataa(sorted);
setOrder("DSC");
}
if(order === "DSC"){
  const sorted = [...data].sort((a,b) =>
  a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1
  );
    setDataa(sorted);
setOrder("ASC");
}
}

    const toggler=()=>{
     toggle ? setToggle(false) : setToggle(true);

    }

  return (

    <table className="table">
      <caption>
        sorting by power:
         <Switch className='switch'
          onClick={toggler}/>
          {toggle ? <span>{()=>sorting(data.hero_name)}</span> : <span>{()=>sorting(data.power)}</span> }
        </caption>


    <tbody>
                <tr >
                    <th>Hero Name</th>
                    <th>Power</th>
                    <th>Rates</th>
                </tr>
                {data.map((item=>
                <tr key={item.id}>

                    <td><Link className='link'  to={`/detils?id=${item.id}`} state={{ item }}>{item.hero_name}</Link></td>
                    <td><Link className='link'  to={`/detils?id=${item.id}`} state={{ item }}>{item.power}</Link></td>
                    <td>{<ReactStars/>}</td>
                </tr>
                ))}
            </tbody>
            </table>
  )
}

export default Table
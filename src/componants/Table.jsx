
import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';



function Table({data}) {


    const [rating,setRating] = useState(null);


  return (

    <table className="table">

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
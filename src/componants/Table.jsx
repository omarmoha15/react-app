import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Detils from './Detils';


function Table({data,navigation}) {
    const [rating,setRating] = useState(null);
    const navigate = useNavigate();
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

                    <td><Link to={"/detils"} state={{item}}>{item.hero_name}</Link></td>
                    <td>{item.power}</td>
                    <td>{<ReactStars/>}</td>
                </tr>
                ))}
            </tbody>
            </table>
  )
}

export default Table
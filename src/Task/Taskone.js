import React, { useEffect, useState } from 'react';
import { Data } from '../helpers/FetchData';
import "./Task.css"
import { useNavigate } from 'react-router-dom';


const Taskone = ({set}) => {
    const navigate = useNavigate();
    const [Api, setApi] = useState([]);
    useEffect(() => {
        Data("api1").then(res => setApi(res));
      },[])
  return (
    <div className='main'>
        <div className='header'>
            <ul>
                <li onClick={() => navigate("/")}>All Users</li>
                <li onClick={() => navigate("/taskone")} style={set && {textDecoration: "underline"}}>Api 1</li>
                <li onClick={() => navigate("/tasktwo")}>Api 2</li>
                <li onClick={() => navigate("/taskthree")}>Api 3</li>
                <li onClick={() => navigate("/taskfour")}>Api 4</li>
                <li onClick={() => navigate("/taskfive")}>Api 5</li>
            </ul>
            <p>Total : {Api.length}</p>
        </div>
    <div className='main-content'>
    {Api.length === 0 ? <div className='center'><div class="loader"></div><p class="loader-p">Loading</p></div> : 
        <table>
        <div className='head'>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th className='income'>Income</th>
                <th className='th'>City</th>
                <th>Car Brand</th>
                <th>Quote</th>
                <th className='pp'>Phone Price</th>
            </tr>
        </thead>
        <tbody>
            {Api?.map((item) => (
                <tr className='tr'>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td className='income'>{item.income}</td>
                    <td className='th'>{item.city}</td>
                    <td>{item.car}</td>
                    <td>{item.quote}</td>
                    <td className='pp'>{item.phone_price}</td>
                    
                </tr>
            ))}
        </tbody>
        </div>
    </table>
        }
    </div>
</div>
  )
}

export default Taskone


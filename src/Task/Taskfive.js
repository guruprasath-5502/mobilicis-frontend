import React, { useEffect, useState } from 'react';
import { Data } from '../helpers/FetchData';
import "./Task.css"
import { useNavigate } from 'react-router-dom';


const Taskfive = ({set}) => {
    const navigate = useNavigate();
    const [Api, setApi] = useState([]);
    useEffect(() => {
        Data("api5").then(res => setApi(res));
      },[])
  return (
    <div className='main'>
        <div className='header'>
            <ul>
                <li onClick={() => navigate("/")}>All Users</li>
                <li onClick={() => navigate("/taskone")}>Api 1</li>
                <li onClick={() => navigate("/tasktwo")}>Api 2</li>
                <li onClick={() => navigate("/taskthree")}>Api 3</li>
                <li onClick={() => navigate("/taskfour")}>Api 4</li>
                <li onClick={() => navigate("/taskfive")} style={set && {textDecoration: "underline"}}>Api 5</li>
            </ul>
            <p>Total : {Api.length}</p>
        </div>
    <div className='main-content' style={{padding: "5px" , height:"670px" , overflow:"hidden"}}>
    {Api.length === 0 ? <div className='center'><div class="loader"></div><p class="loader-p">Loading</p></div> : 
        <table>
        <div className='head' style={{boxShadow: "0 0 5px 2px rgba(0,0,0,0.2)" , padding: "0px 10px"}}>
        <thead>
            <tr>
                <th>City</th>
                <th>Total Users</th>
                <th>Average Income</th>
            </tr>
        </thead>
        <tbody>
            {Api?.map((item) => (
                <tr className='tr' >
                    <td>{item._id}</td>
                    <td>{item.count}</td>
                    <td>$ {item.avgIncome.toFixed(2)}</td>
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

export default Taskfive


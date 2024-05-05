/* eslint-disable react/jsx-key */
import './Use.css'
import { useEffect, useState } from "react"
import Singleuse from './Singleuse';

export default function Use(){

    const [users, setUsers] = useState([]);
     
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>setUsers(data))
    }, [])

    return(
        <div className='box'>
            <h3>User : {users.length}</h3>
            {
             users.map(friendone => <Singleuse friends={friendone}></Singleuse>)
            }
        </div>
    )

}
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './friend.css'
import Friend from './Friend'
export default function Friends(){

    //hooks
    const [friends, setfriends] = useState([])

    //Normal Api Fetch
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
    }, [])

    return(
        <div className='box'>
    
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}
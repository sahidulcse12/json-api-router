import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './FriendDetail.css';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [friend, setFriend] = useState({}); // data ta object ekhane...tai empty array hobena

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    // console.log(props);
    return (
        <div className="details">
            <p>this is details of friend {friendId}</p>
            <h2>Name : {friend.name}</h2>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;
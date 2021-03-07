import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friends.css';

const Friends = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();

    const handleButton = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    return (
        <div className="friend">
            <div className="friends-list">
                <h3>Name : {name}</h3>
                <p>Email : {email}</p>
                {/* <p> <Link to={`/friend/${id}`}><button>This is friend {id}</button></Link></p> */}
                <button onClick={() => handleButton(id)}>Click Me</button>
            </div>
        </div>
    );
};

export default Friends;
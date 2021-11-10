import React, {useState} from 'react';
import useAuth from '../../../context/useAuth';

const MakeAdmin=() => {
     const [email, setEmail]=useState('');
    const [success, setSuccess]=useState(false);
    const {token}=useAuth();
    const handleOnSubmit=e => {
        const user={email};
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            if(data.modifiedCount) {
                console.log('Success', data);
                alert('success')
                setEmail('')
                setSuccess(true)
            }
            else {
                alert('rejected')
            }

        })
        console.log(email);
        e.preventDefault();
    }
     const handleOnBlur=e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleOnSubmit}>
                <input onBlur={handleOnBlur} class="form-control form-control-lg" type="email" placeholder="Enter New Email For Admin"></input>
                <br />
                <button type="submit" class="btn btn-primary mb-2">Confirm Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;
import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/UseTypedSelector";
import {useTypedDispatch} from "../hooks/UseTypedDispatch";

const Users = () => {
    const {users, loading, error} = useTypedSelector(s => s.user)
    const {fetchUsers} = useTypedDispatch()
    useEffect(() => {
        fetchUsers()
    },[])
    console.log(users)
    if (loading) {
        return <h3>Loading...</h3>
    }
    if (error) {
        return <h4>{error}</h4>
    }
    return (
        <div>
            {
                users.map(el => (
                    <h2 key={el.id}>{el.name}</h2>
                ))
            }
        </div>
    );
};

export default Users;
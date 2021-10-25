import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleAddUser = ( e ) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email };

        fetch( 'http://localhost:5000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( newUser )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.insertedId ) {
                    alert( "data inserted successfully" );
                    e.target.reset();
                }
            } )
    }

    return (
        <div>
            <h2>Please Add an User</h2>
            <form onSubmit={ handleAddUser }>
                <input type="text" placeholder="Your Name" ref={ nameRef } />
                <input type="email" placeholder="Your Email" ref={ emailRef } />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;
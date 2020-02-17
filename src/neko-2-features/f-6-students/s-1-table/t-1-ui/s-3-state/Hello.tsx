import React, {useState} from 'react';

const Hello: React.FC = () => {
    const [users, setUsers] = useState(0);
    const [name, setName] = useState('');

    const showAlert = () => {
        setUsers(users + 1);
        alert(`Привет, ${name}!!!`);
        setName('');
    };

    return (
        <div
            style={{
                width: '250px',
                border: '1px solid black',
                margin: '5px',
                padding: '5px',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            <span style={{width: 15, margin: 5}}>{users}</span>
            <input onChange={e => setName(e.currentTarget.value)} value={name}/>
            <button onClick={showAlert} style={{marginLeft: 5, padding: 5}} disabled={!name}>
                hello
            </button>
        </div>
    )
};

export default Hello;

import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}
const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS RENDER")
    return <div>{props.users.map((el,i) => <div key={i}>{el}</div>)}</div>
}
const Users =React.memo(UsersSecret)
export const Example = () => {
    const [counter,setCounter]=useState(0)
    const [users,setUsers]=useState(['Dimich', 'Valera', 'Artem'])
    return (
        <>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}
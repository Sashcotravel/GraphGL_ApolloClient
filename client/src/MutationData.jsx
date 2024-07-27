import { gql, useMutation } from '@apollo/client'
import {useEffect, useState} from "react";


const CREATE_USER_MUTATION = gql`
    mutation CreateUser ($input: CreateUserInput!){
        createUser(input: $input) {
            id
            username
            age
            nationality
    }
}
`


const DELETE_USER_MUTATION = gql`
    mutation DeleteUser ($input: ID!){
        deleteUser(id: $input) {
            id
    }
}
`


function MutationData({ setRefreshAll, refreshAll, id, setId }) {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [nationality, setNationality] = useState('')

    const [createUser] = useMutation(CREATE_USER_MUTATION)
    const [deleteUser] = useMutation(DELETE_USER_MUTATION)

    const createUserF = () => {
        createUser({variables: {
                input: {name, age, username, nationality}
            }})

        setRefreshAll(true)
    }

    useEffect(() => {
        if(id){
            console.log(id)
            deleteUser({variables: {input: Number(id)}})

            setId(null)
            setRefreshAll(true)
        }
    }, [id]);


    return (
        <div>
            <div>
                <input type="text" placeholder='Name' value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <br/>
                <input type="text" placeholder='Username' value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                <input type="number" placeholder='Age' value={age}
                       onChange={(e) => setAge(Number(e.target.value))}/>
                <br/>
                <select onChange={(e) =>
                    setNationality(e.target.value)}>
                    <option hidden>Select nationality</option>
                    <option value="Canada">Canada</option>
                    <option value="Canada2">Canada2</option>
                    <option value="Canada3">Canada3</option>
                    <option value="Canada4">Canada4</option>
                    <option value="Canada5">Canada5</option>
                </select>
                <br/>
            </div>
            <br/>
            <button onClick={createUserF}>Create User</button>
        </div>
    );
}

export default MutationData;
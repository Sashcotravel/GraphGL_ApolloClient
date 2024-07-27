import { useQuery, gql, useLazyQuery } from '@apollo/client'
import {useEffect, useState} from "react";
import { GET_NAME_AND_ID } from './fragments';


const QUERY_ALL_USERS = gql`
    ${GET_NAME_AND_ID}
    query GetAllUsers{
        users {
            ...on UsersSuccessfulResult {
                users {
                    ...GetNameAndId
                    username
                    age
                    nationality
                }
            }
            
            ...on UsersErrorResult {
                message
            }
        } 
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovie{
         movies{
            id
            name
            yearOfPublication
            isInTheaters
         }
    }
`

const QUERY_MOVIE = gql`
    query Movie($name: String!){
         movie(name: $name){
            id
            name
            yearOfPublication
            isInTheaters
         }
    }
`

function DisplayData({ setRefreshAll, refreshAll, setId }) {

    const { loading, error, data, refetch } = useQuery(QUERY_ALL_USERS)
    const { loading: moviesLoading, error: moviesError, data: moviesData } = useQuery(QUERY_ALL_MOVIES)
    const [fetchMovie, { data: movieDataFetch, error: movieDataError }] =
        useLazyQuery(QUERY_MOVIE)

    const [value, setValue] = useState('')

    if(error){
        console.log(error)
    }

    if(loading){
        // console.log(loading)
    }


    useEffect(() => {
        if(refreshAll){
            refetch()
            setRefreshAll(false)
        }
    }, [refreshAll]);


    return (
        <div>
            <h1>List of users</h1>
            <div>
                <input type="text" placeholder='enter name' value={value}
                       onChange={(e) => setValue(e.target.value)}/>
                <button onClick={() => fetchMovie({
                    variables: {name: value}
                })}>Fetch Data
                </button>
                <div>
                    {
                        movieDataFetch && <>
                            <p>{movieDataFetch.movie.name}</p>
                            <p>{movieDataFetch.movie.yearOfPublication}</p>
                        </>
                    }
                </div>
            </div>
            <div>
                <ul className="li">
                    {
                        data && data.users?.users?.map((item) => {
                            return (
                                <li key={item.id} >
                                    <h3>{item.name}</h3>
                                    <h4>{item.username}</h4>
                                    <h6>{item.age}</h6>
                                    <h6>{item.nationality}</h6>
                                    <button onClick={() => setId(item.id)}>Delete User</button>
                                </li>
                            )
                        })
                    }
                    {
                        moviesData && moviesData.movies.map((item) => {
                            return (
                                <li key={item.id}>
                                    <h3>{item.name}</h3>
                                    <h4>{item.yearOfPublication}</h4>
                                    <h6>{item.isInTheaters ? "Yes" : "No"}</h6>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default DisplayData;
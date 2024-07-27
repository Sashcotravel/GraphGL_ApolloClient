import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import DisplayData from "./DisplayData.jsx";
import MutationData from "./MutationData.jsx";
import {useState} from "react";


function App() {

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: 'http://localhost:4000/graphql'
    })

    const [refreshAll, setRefreshAll] = useState(false)
    const [id, setId] = useState(false)


  return (
      <ApolloProvider client={client}>
          <div>
              <MutationData refresh={refreshAll} setRefreshAll={setRefreshAll} id={id} setId={setId} />
              <DisplayData refresh={refreshAll} setRefreshAll={setRefreshAll} setId={setId} />
          </div>
      </ApolloProvider>
  )
}

export default App

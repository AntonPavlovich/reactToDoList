import React from 'react';
import data from './data'
import UserCard from './components/UserCard/UserCard';
import './App.css'

function App(props){
  return (
    <React.Fragment>
      <UserCard
      user = {data}
      /> 
    </React.Fragment>
  )
}

export default App;
import React from 'react';
import { useState } from 'react';
import './App.css';

const Card = ({title}, {ratings}, {review}) => {

    const [hasLiked, setHasLiked] = useState(initialState: false);


  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(value: true)}>
        Like
      </button>
    </div>
  )
}

const App = () => {


  return (
    <div className="card-container">
      <Card title="Lion King" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
      <Card title="Star Wars" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
      <Card title="Mufasa" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
      <Card title="Black Panther" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
    </div>
  )
}



export default App

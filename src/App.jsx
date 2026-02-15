import { useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';

const Card = ({title}, {ratings}, {review}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>
      <Card title="Lion King" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
      <Card title="Lion King" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
      <Card title="Lion King" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
      <Card title="Lion King" ratings={5} review={cool} actors={[{name: Simba}, {name: Hakuna}, {name:Matata},]} />
    </div>
  )
}



export default App


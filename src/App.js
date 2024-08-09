
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data,setData]=useState(null)

    useEffect(()=>{
      fetch('http://localhost:8081/api')
        .then(res => res.json())
        .then(data => setData(data.message))
        .catch(err => console.log(err))
    })  
  
  return (
    <div className="App">
      <h2>
        {data ? data : 'loading....'}
      </h2>
    </div>
  );
}

export default App;

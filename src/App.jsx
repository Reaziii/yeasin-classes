import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import axios from 'axios'

const even = {
  target: {
    value: "hello world"
  }
}

const api = "https://jsonplaceholder.typicode.com/posts"



function App() {
  const [data, setData] = useState([])
  async function getTheData(){
    let ret = await axios.get(api)
    setData([...ret.data])
  }

  return (
    <div>

      {
        data.map(function(item){
          return <div>
            <p>user id : {item.userId}</p>
            <p>title : {item.title}</p>
          </div>
        })
      }
    </div>
  );
}


export default App;

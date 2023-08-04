import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import Quiz from './Pages/Quiz';
function App() {
  // const getdata=()=>{
  //  fetch("https://api.openai.com/v1/engines/davinci-codex/completions",{
  //   method:"POST",
  //   headers:{
  //     "Content-Type":"application/json",
  //     'Authorization': `Bearer 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`,
  //   },
  //   body:JSON.stringify({text:"What is fetch"})
  //  }).then((res)=>{
  //   return res.json()
  //  }).then((data)=>{
  //   console.log(data)
  //  })
  // }
  // useEffect(()=>{
  //    getdata()
  // },[])
  return (
    <div className="App">
      <Quiz/>
    </div>
  );
}

export default App;

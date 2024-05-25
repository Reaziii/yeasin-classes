import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";


function App() {
  const [value, setValue] = useState(0.00)

function HandleSolve(){
  setValue(value + 10)
}

const [values, setValuE] = useState(0.00)

function HandleSolveq(){
  setValuE(values + 10)
}
const [valuea, setValUe] = useState(0.00)

function HandleSolvew(){
  setValUe(valuea + 10)
}
const [valuee, setVaLue] = useState(0.00)

function HandleSolvee(){
  setVaLue(valuee + 10)
}
const [valueo, setVAlue] = useState(0.00)

function HandleSolver(){
  setVAlue(valueo + 10)
}
 const [show,setShow] = useState("")

 function Handledisplay(){
  setShow("Assalamu Alaikum! Your progress is Saved")
 }





  return (
   <div>
     <div className="opening">
      <div className="topnav">
        <h1 className="nextp"> Next problems to solve </h1>
      </div>
      <div className="maindiv">
        <div className="box1">
          <div className="rt1">
            <div className="text1">
              <p>Is Prime</p>
            </div>
            <div className="butn">
              <div className="btext1">
                <b>Easy</b>
              </div>
              <div className="btext2">
                <b>Solved by:0</b>
              </div>
              <div className="btext3">
                <b>Success rate:{value}%</b>
              </div>
            </div>
          </div>
          <div className="lt1">
            
            <div className="bt"><img className="img" onClick={Handledisplay} src="https://cdn.iconscout.com/icon/free/png-256/free-save-3251597-2724646.png" alt="" /></div>
            <div className="icon"><button className="button" onClick={HandleSolve}> Solve </button></div>
          </div>
        </div>
        <div className="box">
          <div className="rt">
            <div className="text">
              <p>Drunk</p>
            </div>
            <div className="butn">
              <div className="btext4">
                {" "}
                <b>LOJ-1003</b>
              </div>
              <div className="btext5">
                <b>Medium</b>
              </div>
              <div className="btext6">
                <b>Solved by:0</b>
              </div>
              <div className="btext7">
                <b>Success rate:{values}%</b>
              </div>
            </div>
          </div>
          <div className="lt">
            
          <div className="bt"><img className="img"onClick={Handledisplay} src="https://cdn.iconscout.com/icon/free/png-256/free-save-3251597-2724646.png" alt="" /></div>
            <div className="icon"><button className="button" onClick={HandleSolveq}> Solve </button></div>
          </div>
        </div>
        <div className="box">
          <div className="rt">
            <div className="text">
              <p>Factors and Multiples </p>
            </div>
            <div className="butn">
              <div className="btext4">
                
                <b>LOJ-1149</b>
              </div>
              <div className="btext5">
                <b>Medium</b>
              </div>
              <div className="btext6">
                <b>Solved by:0</b>
              </div>
              <div className="btext7">
                <b>Success rate:{valuea}%</b>
              </div>
            </div>
          </div>
          <div className="lt">
          <div className="bt"><img className="img"onClick={Handledisplay} src="https://cdn.iconscout.com/icon/free/png-256/free-save-3251597-2724646.png" alt="" /></div>
            <div className="icon"><button className="button" onClick={HandleSolvew}> Solve </button></div>
          </div>
        </div>
        <div className="box">
          <div className="rt">
            <div className="text">
            <p>February 29</p>
            </div>
            <div className="butn">
              <div className="btext4">
                
                <b>LOJ-1414</b>
              </div>
              <div className="btext5">
                <b>Medium</b>
              </div>
              <div className="btext6">
                <b>Solved by:0</b>
              </div>
              <div className="btext7">
                <b>Success rate:{valuee}%</b>
              </div>
            </div>
          </div>
          <div className="lt">
          <div className="bt"><img className="img"onClick={Handledisplay} src="https://cdn.iconscout.com/icon/free/png-256/free-save-3251597-2724646.png" alt="" /></div>
            <div className="icon"><button className="button" onClick={HandleSolvee}> Solve </button></div>
          </div>
        </div>
        <div className="box5">
          <div className="rt5">
            <div className="text">
             <p>Sudoku Solver</p>
            </div>
            <div className="butn">
              <div className="btext4">
                
                <b>LOJ-1397</b>
              </div>
              <div className="btext">
                <b>Hard</b>
              </div>
              <div className="btext6">
                <b>Solved by:0</b>
              </div>
              <div className="btext7">
                <b>Success rate:{valueo}%</b>
              </div>
            </div>
          </div>
          <div className="lt5">
            
          <div className="bt"><img className="img" onClick={Handledisplay} src="https://cdn.iconscout.com/icon/free/png-256/free-save-3251597-2724646.png" alt="" /></div>
            <div className="icon"> <button className="button" onClick={HandleSolver}> Solve </button></div>
          </div>
        </div>
      </div>
    </div>
  <div className="display"> {show}</div>
   </div>
  );
}

export default App;

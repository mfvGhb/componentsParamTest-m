import "./styles.css";
import { useState , useContext , useEffect} from "react";
import {getFetch}  from "./getFetch";
import AppYandexSched  from "./AppYandexSched";
import AppFooter  from "./AppFooter";
import AppWait  from "./AppWait";




export default function App() {


let  [arrData, setArrData]=useState([]) ;
let  startArrComponents=[AppFooter({name:"Начало"})] ;
let  [arrComponents, setArrComponents]=useState(startArrComponents) ;

let F4=(p4)=><h3> результат F4:{p4.name}</h3>
let F5=(p5)=><h3>компонент F5:{p5.name5}</h3>
let F6=(p6)=><h3>компонент F6:{p6.name6}</h3>
let F7=(p7)=><h3>компонент F7:{p7.name7}</h3>

let f10=(ob)=><h3> результат f10:{ob.name6}</h3>
let f11=(ob)=><h3> результат f11:{ob.name7}</h3>


let ob1={name5:"имя 5",name6:"имя 6"};
let ob2={name6:"имя 6",name7:"имя 7"};

let arrComp5=[<F5 {...ob1}/> , <F6 {...ob1}/>];
let arrComp6=[f10,f11];

let fButton=async ()=>{
    setArrComponents([AppWait()]) ;  

  let objData=await getFetch() ;
    console.log('objData.schedule--->', objData.schedule);
 //   setArrComponents([AppYandexSched(objData.schedule),AppFooter({name:"Конец"})]) ;  
     setArrComponents([<AppYandexSched {...objData}/>,AppFooter({name:"Конец"})]) ;  
  
  }


let fButton1=()=>{
  setArrComponents([<AppYandexSched schedule={[]}/>,AppFooter({name:"Конец"})]) ; 
  //setArrComponents([AppFooter({name:"Начало"})]) ;

}

return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button style={{width:'200px' , height:'55px' }} onClick={fButton}>Find</button> 
      <button style={{width:'200px' , height:'55px' }} onClick={fButton1}>change</button> 
  
      
{/*   <AppYandexSched arrMap={arrData}/>*/}
      {arrComponents.map( (item,index)=> <div key={index}> {item} </div> )}


      {
       arrComp5.map((item,index)=><div key={index}>{item}</div>)
      }
      {
       arrComp6.map((item,index)=><div key={index}>>>{item(ob2)}</div>)
      }  
      <F4 name='F4'></F4>
      {F4(ob1)}
      <F4 {...ob1}></F4>

      
    </div>
  );
}



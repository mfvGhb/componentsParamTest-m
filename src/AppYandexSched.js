
export default function AppYandexSched(props) {

  const mapYandexSched= props.schedule.map( 
  (itemArrMap,index)=>(<div className="card" key={index}>
              <div style={{ backgroundColor: 'lightblue'}}>
              {itemArrMap.nn}.  
              {itemArrMap.thread.title}<br/>
              {itemArrMap.arr_cityFromEng} - {itemArrMap.arr_cityNameEng}<br/>

              {itemArrMap.departure}P{' '}
              ({itemArrMap.thread.number})
              
              {itemArrMap.thread.transport_subtype.color}
              {itemArrMap.thread.transport_subtype.code}<br/>
              {itemArrMap.thread.transport_subtype.title}
              {itemArrMap.thread.express_type}
            
              terminal:{itemArrMap.terminal}
              {itemArrMap.platform}<br/>{itemArrMap.thread.uid}<br/> 

              
              <b>{itemArrMap.thread.carrier.title}</b> : 
              <b>{itemArrMap.thread.vehicle}</b><br/>
              
              <b>{itemArrMap.is_fuzzy}</b>
              {itemArrMap.except_days}{itemArrMap.arrival}<br/>
                 </div>
              
              <img className="cityPhoto" src={itemArrMap.arr_cityPhoto}/>
              <img className="cityPhoto" src={itemArrMap.vehiclePhoto}/>
              ={itemArrMap.arr_cityPhoto}
              <br/>
            
  </div>)
  );
     
  return(
        <div>
           <h3>"AppYandexSched" component is here!!</h3>
   
           {mapYandexSched}
        </div>
       )   
  }
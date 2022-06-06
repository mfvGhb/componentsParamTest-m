
export let getFetch = async ()=>{
  console.log("qwqwq") ;
  let strCors="https://cors.eu.org/" ;  
  let strFetchYa=
    "https://api.rasp.yandex.net/v3.0/schedule/?apikey=1e2ea5a3-6bac-40c8-b3ad-e578706f9c4a&station=TLV"+
    "&date=2022-06-03&transport_types=plane&system=iata&event=departure&offset=0&limit=200";


  let res = await fetch(strCors+strFetchYa);
  console.log('fetch= ',res);
  let arrFetch=await res.json();
  console.log('arrFetch= ',arrFetch);
  return arrFetch
}  

export  let f100=()=>console.log(100);

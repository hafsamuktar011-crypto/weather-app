let APIURL="https://api.openweathermap.org/data/2.5/weather?q=Somalia&appid=d74b670ff9736f09682441646181f44b&units=metric"
let APIKEY="d74b670ff9736f09682441646181f44b"
let mykey="45d5d0f254d2dde720175bc37afad790"

async function weahter(){
      const res= await fetch(APIURL ``)
     let data= await res.json()
     console.log(data);
     
}
weahter()
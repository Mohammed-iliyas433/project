/*https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=f37883b83fd583f03a9996c3dc31358f&units=metric*/


/*Below there is an api for in which key is declared in separate variable and url in separate 
variable for that while fetching */
 
const key="f37883b83fd583f03a9996c3dc31358f";/*In this we are storing key in variable*/ 
const apurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";/*In this we are storing url*/ 
const searchBox=document.querySelector(".search input");/**This is to call input feild */
const searchbtn=document.querySelector(".search button");/**This is to call button for event */
const icon=document.querySelector("#ima");/**This is for images or icon for particular places weather can be showed by icon */
/*In this we are trying to fetch the data which is run in function 
and for display on box and using input feilds*/ 
async function weather(city){
    try{
        const response=await fetch(apurl+ city +`&appid=${key}`);/**In this by passing city name data of that city is present */
    var data=await response.json()/**In this data is fetched from url and stored in data */
    console.log(data);
    document.querySelector("#city").innerHTML=data.name;/**In this for dispaly city name in given url can be accessed as data.name */
    document.querySelector("#Temperature").innerHTML="Temperature"+": "+Math.round(data.main.temp)+"°C";/**In this for dispaly temperature in given url can be accessed as data.main.temperature */
    document.querySelector("#wind").innerHTML="Wind"+": "+data.wind.speed+"M/S";/**In this for dispaly wind in given url can be accessed as data.wind.speed */
    document.querySelector("#humidity").innerHTML="Humidity"+": "+data.main.humidity+"%";/**In this humidity in url can be accessed as data.main.humidity */
    /**Below are used to display if first element in particular location of array is either of below mentioned
     * then execute respective statements
     */
    if(data.weather[0].main=="Clouds"){
        icon.src="clouds.png";
    }else if(data.weather[0].main=="Clear"){
        icon.src="clear.png";
    }else if(data.weather[0].main=="Rain"){
        icon.src="rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        icon.src="drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        icon.src="mist.png";
    }else if(data.weather[0].main=="Snow"){
        icon.src="snow.png";
    }
    }catch{
        console.error("error")
    }
}
   
/**In this we are calling an id to which event is called when we enter on input feild and click 
 * button then it is passed to function and statememts in that function is executed 
 */
searchbtn.addEventListener("click",()=>{
    weather(searchBox.value);
})



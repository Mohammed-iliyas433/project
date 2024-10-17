function render(weath){
    console.log(weath)
    var ree=document.querySelector("#weat")
    var city=document.createElement("h2");
    city.textContent=weath.name;
    ree.appendChild(city)
    var temp=document.createElement("p")
    temp.textContent="Temp "+"-"+" "+ weath.main.temp+"F";
    ree.appendChild(temp)
    var hum=document.createElement("p");
    hum.textContent="humidity "+"-"+" "+weath.main.humidity+"%";
    ree.appendChild(hum);
    var pres=document.createElement("p");
    pres.textContent="pressure"+"-"+" "+weath.main.pressure+"atm";
    ree.appendChild(pres);
    var cat=weath.weather[0]
    if(cat && cat.description){
        var des=document.createElement("p");
        des.textContent=cat.description;
        ree.appendChild(des)
    }
}

function we(){
    var url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=f37883b83fd583f03a9996c3dc31358f";
    fetch(url)
        .then(response=>response.json()).then(data=>render(data))
}
we()

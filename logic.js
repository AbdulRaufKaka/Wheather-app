const apikey = "eb25d2a5d1284ea87e786ce16d658f3c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const wheather_icon = document.querySelector(".wheather-icon");


const searchBox = document.querySelector(".Search input");
const SearchBtn = document.querySelector(".Search button"); // whenever user click the button it should sent the city info in the checkwheather function 

async function  checkWheather(city)
{
    const response = await fetch(apiUrl +city+ `&appid=${apikey}`);
    if(response.status == "404") // 404 is the error if the city name is invalid
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }

    else{
        
    let data  = await response.json(); // this data var will have the all info of wheather about the city bangalore


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ " °c ";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

    if(data.weather[0].main == "Clouds")
    {
        wheather_icon.src = "images/clouds.png"; 
    }
    else if (data.weather[0].main == "Clear")
    {
        wheather_icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        wheather_icon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle.png")
    {
        wheather_icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist.png")
    {
        wheather_icon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow")
    {
        wheather_icon.src = "images/snow.png";
    }

    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
}   

SearchBtn.addEventListener("click",()=>
{
    checkWheather(searchBox.value);

})

checkWheather();


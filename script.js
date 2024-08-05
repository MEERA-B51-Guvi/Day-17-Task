fetch("https://api.openweathermap.org/data/2.5/weather?lat=-14.33333333&lon=-170.0&appid=37ba9824a231c697643e4a57ef092cf6")
.then((response)=>response.json())
.then((data)=>{
    console.log(data.coord.lat);
});

fetch("https://restcountries.com/v3.1/all")

.then((response)=>response.json())

.then((data)=>{
   // console.log(data);
    data.forEach(element => {
        const countrObjrct={
            ...element,
            name:element.name.common,
            flags:element.flags.png,
            region:element.region,
            capital:element.capital,
            latlng:element.latlng,
            countrycode:element.cca3,
        };
        
      // console.log(countrObjrct);
        //console.log(element.name.common);
        createCountryCard(countrObjrct);
        });
})
.catch((err)=>console.log("My code error:", err))
function createCountryCard(element){
   var lat=`${element.latlng[0]}`;
         var long=`${element.latlng[1]}`;
         var countryname=`${element.name}`;
    document.body.innerHTML+=`
    <div class="card" style="width: 18rem;">
    <div class="countryname"><br>${element.name}</div>
    <img src="${element.flags}" class="card-img-top" style="height:14rem" alt="${element.name}">
    <center><div class="card-body">
      <p>Capital:${element.capital}</p>
      <p>Latlng:${element.latlng}</p>
      <p>Region:${element.capital}</p>
      <p>Country Code:${element.cca3}</p>
      <button class="btn" onclick="getweatherdata('${lat}','${long}','${countryname}')">Click for Weather</button>
      </center>
    </div>
  </div>`;

  
}
function getweatherdata(lat, long, countryname){
  console.log(lat, long, countryname)
 
  
        var weatherurl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
        fetch(weatherurl)
        .then((response1)=>response1.json())
.then((data1)=>{
  // var lat=`${element.latlng[0]}`;
  // var long=`${element.latlng[1]}`;
  // var countryname=`${element.name}`;
   
  console.log(data1);
    
});

}

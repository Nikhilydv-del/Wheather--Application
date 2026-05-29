let apiKey = "e1fc2c006f37cb616cdf3053ed4e53fc"

let searchBtn = document.querySelector("#search-btn");
let resultBox = document.querySelector("#result")

searchBtn.addEventListener("click", async()=>{
   let cityName = document.querySelector("#city-name").value.trim();

   if(cityName === ""){
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `<h3> Please Enter a City Name</h3>`;
    return;
   }
   try {
   } catch (error) {
    console.log(error);
    resultBox.innerHTML = `<h3>Error in Fetching Weather Data</h3>`;
   }
})
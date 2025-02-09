
const apiKey = "ZC5FRisfSmngNlJ3fSn0k0yhfBwBYd2upfafjiDa";
const loader = document.getElementById('loader');

function collectData () {
    fetchNASAData();
}

async function fetchNASAData () {

    var lon = parseFloat(document.getElementById('lon').value);
    var lat = parseFloat(document.getElementById('lat').value);
    var date = document.getElementById('date').value;
    
    if (isNaN(lon) || isNaN(lat)) {
        alert("Invalid longitude or latitude. Please enter valid numbers.");
        return;
    }

    try {
        loader.classList.toggle('inactive');
        const response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=0.10&api_key=${apiKey}`);
        const data = await response.json();

        console.log("Image URL:", data.url);
        var imgContainer = document.getElementById('main__input-result-img');
        imgContainer.style.borderRadius = "12px";
        loader.classList.toggle('inactive');
        imgContainer.src = data.url;
    }
    catch (error) {
        console.error('Error fetching the data:', error);
    }
}



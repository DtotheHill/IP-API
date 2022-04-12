document.querySelector('button').addEventListener('click',getLocation )


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
		'X-RapidAPI-Key': '7cabe9042emshed9e4a22c9864ebp1f540cjsnec8e39488784'
	}
};

function getLocation(){
    fetch('https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8', options)
	    .then(res => res.json())
            .then(data => {
                console.log(data)
                document.querySelector('#country').innerText = `Country: ${data.country}`
                document.querySelector('#state').innerText = `State: ${data.state}`
                document.querySelector('#city').innerText = `City: ${data.city}`
                document.querySelector('#currency').innerText = `Currency: ${data.currencyName}`
                document.querySelector('img').src = data.flag
        })
	    
    .catch(err => {
        console.log(`error ${err}`)
    })

}
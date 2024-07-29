const BASE_URL_CATS = 'https://api.thecatapi.com/v1/images/search?api_key=live_qJMWTEZCqW0Qigjxy9F0xYg3TBaBdmJM6NHGEg7GEtrBBduwvQQdVq7LsRI7JTVC'

const BASE_URL_DOGS = 'https://api.thedogapi.com/v1/images/search?api_key=live_8T3uozdlEo38Vk4kMQI91c3Fcb24CQ1dXL2Ldx0MDsXt2v9hdTn1vD3ObsckZima'

async function getCatPhotos() {
    const AWAITAPI = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Resolvido!'))
        });
    }, 1000);

    const JSONPHOTOS = await AWAITAPI
        .then(fetch(BASE_URL_CATS, {
            method: 'GET',
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(json => json[0].url)
            .then(url => {
                console.log(url)
                document.getElementById('cat').innerHTML = `<img src="${url}" width="100%">`
            }))
};

async function getDogPhotos() {
    fetch(BASE_URL_DOGS, {
        method: 'GET',
        cache: 'no-cache',
    })
        .then(response => response.json())
        .then(json => json[0].url)
        .then(url => {
            console.log(url)
            document.getElementById('dog').innerHTML = `<img src="${url}" width="100%">`
        })
}

var btnGetCats = document.getElementById('change-cat');
var btnGetDogs = document.getElementById('change-dog');

btnGetCats.addEventListener("click", getCatPhotos);
btnGetDogs.addEventListener("click", getDogPhotos);

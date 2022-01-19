const requestURL = 'https://api.punkapi.com/v2/beers?page=1&per_page=30';
let beersArray;
requestBeerArray()

    function requestBeerArray() {
        fetch(requestURL).then(response => response.json()).then((beers) => {
            beersArray = beers
        }).then(() => createBeerDiv(beersArray))
    }

    function createBeerDiv(){
        console.log(beersArray)
        beersArray.forEach(el => {
            const beerDiv = document.createElement('div');
            const tagline = document.createElement('div');
            const name = document.createElement('div');
            const node = document.createElement('img');

            beerDiv.setAttribute('class', 'beer')
            tagline.setAttribute('class', 'tagline')
            name.setAttribute('class', 'name')
            node.setAttribute('class', 'image-beer')

            if(!el.srm) {
                el.srm = 0
            }
            node.src = el.image_url;
            name.innerHTML = el.name
            tagline.innerHTML = '<b>' + el.tagline + '</b>' + '<br><br> Alcohol: ' + el.abv + '%, SRM color:' + el.srm
            document.getElementById('wrapper').appendChild(beerDiv);
            beerDiv.appendChild(node);
            beerDiv.appendChild(name);
            beerDiv.appendChild(tagline);
        })
    }

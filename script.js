const requestURL = 'https://api.punkapi.com/v2/beers?page=2&per_page=20';
let beersArray;
requestBeerArray()

    function requestBeerArray() {
        fetch(requestURL).then(response => response.json()).then((beers) => {
            beersArray = beers
        }).then(() => createBeerDiv(beersArray))
    }

    function createBeerDiv(){
        beersArray.forEach(el => {
            const beerDiv = document.createElement('div');
            const bigBeerDiv = document.createElement('div');
            const tagline = document.createElement('div');

            const backButton = document.createElement('button');
            const name = document.createElement('div');
            const node = document.createElement('img');
            const wrapper = document.getElementById('wrapper')

            backButton.setAttribute('class', 'back-button')
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
            wrapper.appendChild(beerDiv);
            beerDiv.appendChild(node);
            beerDiv.appendChild(name);
            beerDiv.appendChild(tagline);
            beerDiv.addEventListener('click', function() {
                return openBeer (el)
            })
            function openBeer(el) {
                console.log(el)
                wrapper.innerHTML = '';
                bigBeerDiv.setAttribute('class', 'big-beer')
                node.style.transform = "rotate(80deg)";
                node.style.width = '150px'
                node.style.height = '600px'
                wrapper.appendChild(backButton)
                backButton.innerHTML = 'Return Back'
                wrapper.appendChild(bigBeerDiv);
                bigBeerDiv.appendChild(node)
                bigBeerDiv.appendChild(name)
                bigBeerDiv.appendChild(tagline)
                tagline.style.height = '30%'
                name.style.height = '55%'
                name.style.fontSize = '45px'
                name.style.color = 'black'
                name.style.fontSize = '55px'
                name.setAttribute('class', 'name nohover')
                tagline.style.fontSize = '20px'
                tagline.innerHTML = '<b>' + el.tagline + '</b>' + '<br><br> Alcohol: ' + el.abv + '%, SRM color:' + el.srm + ', Volume: ' + el.boil_volume.value + ' ' + el.boil_volume.unit + '<br><br>' + el.description + '<br>' + el.brewers_tips 
                backButton.addEventListener('click', function() {
                    wrapper.innerHTML = '';
                    return createBeerDiv(beersArray)
                })
            }
        })
    }



const API = `https://api.chucknorris.io/jokes`;

const jokeForm = document.querySelector(`#jokeForm`);
const jokeFormCats = document.querySelector(`#jokeFormCats`);
const jokeFormSearch = document.querySelector(`#jokeFormSearch`);

const jokesContainer = document.querySelector(`#jokesContainer`);
const jokesContainerFavourites = document.querySelector(`#jokesContainerFavourites`);

// getLocalStorage
const getLocalStorage = (key, defaultValue=[]) => {
    let storage = localStorage.getItem(key);
    storage = storage ? JSON.parse(storage) : defaultValue;
    return storage;
}
// getLocalStorage

const getData = url => fetch(url)
    .then(data => data.ok ? data.json() : Promise.catch(data.statusText))
    .catch(err => console.log(`In catch: ${err}`));

// renderFormCats
const renderFormCats = () => {
    getData(API+`/categories`)
        .then(cats => {
            jokeFormCats.innerHTML = cats
                .map((cat, index) => `<li>
                    <label>
                        <input type="radio" name="jokeCat" value="${cat}" ${!index && `checked`}>
                        ${cat}
                    </label>
                </li>`)
                .join(``);
        }
        );
}
renderFormCats();
// renderFormCats

// jokeForm
jokeForm.addEventListener(`submit`, e=>{
    e.preventDefault();

    const jokeType = jokeForm.querySelector(`input[name="jokeFormType"]:checked`).value;
    // console.log(jokeType);

    let jokeUrl = API;

    switch(jokeType){
        case `random`:
            jokeUrl += `/random`;
            break;
        case `categories`:
            let checkedCat = jokeFormCats.querySelector(`input[name="jokeCat"]:checked`).value;
            jokeUrl += `/random?category=${checkedCat}`;
            break;
        case `search`:
            let queryValue = encodeURIComponent(jokeFormSearch.value);
            if(queryValue.length<3 || queryValue.length>120) {
                console.log(`Размер должен быть между 3 и 120`);
                return;
            }
            jokeUrl += `/search?query=${queryValue}`;
    }
    // console.log(jokeUrl);

    getData(jokeUrl)
        .then(data => data.result ? data.result.forEach(joke => renderJoke(joke)) : renderJoke(data));
})
// jokeForm

// renderJokeCats
const renderJokeCats = cats => cats.length ? 
    `<div>
        ${cats
            .map(cat => `<p class="joke__block--cat">${cat}</p>`)
            .join(``)
        }
    </div>` 
    : ``;
// renderJokeCats

// renderJokeText
const renderJokeText = value => `<p class="joke__block--text">${value}</p>`;
// renderJokeText

// renderJoke
const renderJoke = joke => {
    // console.log(joke);

    const jokeBlock = document.createElement(`div`);
    jokeBlock.dataset.id = joke.id;
    jokeBlock.className = `joke__block`;
    jokeBlock.innerHTML = [renderJokeText(joke.value), renderJokeCats(joke.categories)].join(``);

    const favouriteBtn = document.createElement(`button`);
    favouriteBtn.className = `joke__block--fav`;
    favouriteBtn.innerHTML = joke.favourite ? `💜` : `💛`;
    favouriteBtn.addEventListener(`click`, () => {
       let storageJokes = getLocalStorage(`favouriteJokes`); // []
       let jokeIndexInStorage = storageJokes.findIndex(item => item.id === joke.id);
       // -1 || 0/1/2/3

       if(jokeIndexInStorage === -1){
            joke.favourite = true;
            storageJokes.push(joke);
            jokesContainer.querySelector(`.joke__block[data-id="${joke.id}"] .joke__block--fav`).innerHTML = `💜`;
            renderJoke(joke);
       } else{
            storageJokes.splice(jokeIndexInStorage, 1);
            jokesContainerFavourites.querySelector(`.joke__block[data-id="${joke.id}"]`).remove();

            let jokesContainerJoke = jokesContainer.querySelector(`.joke__block[data-id="${joke.id}"]`);
            if(jokesContainerJoke){
                jokesContainerJoke.querySelector(`.joke__block--fav`).innerHTML = `💛`;
            }
       }

       localStorage.setItem(`favouriteJokes`, JSON.stringify(storageJokes));

       // case 1: 
       // 1.1. push to localStorage
       // 1.2. 💛 => 💜
       // 1.3. render in jokesContainerFavourites

       // case 2: 
       // 1.1. remove form localStorage
       // 1.2. 💜 => 💛
       // 1.3. remove from jokesContainerFavourites

        // case 3: 
       // 1.1. remove form localStorage
       // 1.2. in jokesContainer 💜 => 💛 (if it exist)
       // 1.3. remove from jokesContainerFavourites
    })

    jokeBlock.prepend(favouriteBtn);

    joke.favourite ? 
        jokesContainerFavourites.append(jokeBlock) 
        : jokesContainer.append(jokeBlock);
}
// renderJoke

// renderFavouriteJokes
const renderFavouriteJokes = () => {
    getLocalStorage(`favouriteJokes`).forEach(item => renderJoke(item));
}
renderFavouriteJokes();
// renderFavouriteJokes
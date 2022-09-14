// 🔴🟢🔵🟡

const getFile = (file, cb) => {
    console.log(`Start getting ${file}`);

    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, file);
    xhr.send();

    xhr.addEventListener(`readystatechange`, () => {
        if(xhr.readyState === 4){
            console.log(`End getting ${file}`);

            xhr.status<400 && cb(JSON.parse(xhr.response));
        }
    })
};

const getAnimals = animals => animals.forEach(animal => getFile(`./files/${animal}.json`, renderAnimal));
const renderAnimal = animal => console.log(animal);

getFile(`./files/animals.json`, getAnimals);

// Promise
// fetch
// async/await
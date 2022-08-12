// const fileSystem = require('browserify-fs')

/*
Le projet est de rendre le site extremement dynamique avec le dossier
data/data.json


 */
const Data = import('./data/data.json')

const ReadData = () => (
    fetch('./data/data.json')
        .then(res => console.log(res.json()))
        .then(data => console.log(JSON.stringify(data))
        ));



export default ReadData

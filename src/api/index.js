import axios from 'axios'
const getName = () => {
    return new Promise((resolve,reject) => {
        const name = "Victor";
        resolve(name);
    })
}
const getToken = (tiket) => {
    const url = 'tiketUrl';
    return axios.get(url);
}

export { getName, getToken }
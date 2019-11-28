import axios from 'axios';

export default axios.create({ //skapar en instans av axios client med några default värden
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 989380f3fc3c623e10ac3bd206d8846d0ab21f51a6a6fda6c311d8e4cac422b6'
    }
});
import axios from 'axios';

const api = axios.create ({
    baseURL: "https://api.nasa.gov/EPIC/api/natural"



    //https://api.nasa.gov/EPIC/api/natural/images?api_key=API_KEY

    
    
    
    //  Testar API:::::: https://api.nasa.gov/planetary/apod?api_key=i9MXfDgZBAT1WOowUnibG41WydbMHeVWeAcchH0d
   
});

export default api;

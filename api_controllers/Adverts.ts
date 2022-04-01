import axios, { AxiosResponse } from 'axios';


interface IGetAdvertById {
    id:string;
}


//TODO: Get advert by id : recieved params [ID in request query]



//TODO: Get advert by matching filters : recieved params [fromPrice,toPrice,title,author,skip,limit in request body]
//TODO: Create advert: recieved params [price,title,description,img +  authorization header  in request body]
//TODO: Remove advert: recieved params [id +  authorization header  in request body]
//TODO: Edit advert: recieved params [id + params to change +  authorization header  in request body]
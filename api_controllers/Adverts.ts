import axios, { AxiosResponse } from 'axios';
import { setAdvertRequestError, setAdverts } from '../state/actions/adverts';
import { AdvertActionTypes, IAdvertDispatch } from '../types/Advert';

//TODO: Get advert by id : recieved params [ID in request query]

interface IQueryParams {
  fromPrice?: number;
  toPrice?: number;
  title?: string;
  author?: string;
  skip: number;
  limit: number;
}
const baseurl = `${process.env.backendPath}/advert`; //test
// export function getAdvertById() {
//   try {
//     axios
//       .get(`${baseurl}/${id}`)
//       .then((response) => console.log(response.data))
//       .catch((e) => {});
//   } catch (error) {}
// }
export async function getAdvertById(id: string) {
  const response = await axios.get(baseurl+ `/${id}`);
  return response.data
}
function getFilterLink(data: object) {
  const filterPath = ['/?'];

  if (data) {
    for (let key in data) {
      if (data[key] !== undefined) {
        filterPath.push(`${key}=${data[key]}`);
      }
    }
    return filterPath.join('&');
  }
  return null;
}
export function getAdvertsByQuery(query?: IQueryParams) {
  return async (dispatch) => {
    dispatch({ type: AdvertActionTypes.START_LOADING });
    try {
      const filterUrl = getFilterLink(query);
      const url = filterUrl ?  (baseurl + filterUrl) : baseurl;
      const response = await axios.get(url);
      dispatch(setAdverts(response.data));
      dispatch({ type: AdvertActionTypes.END_LOADING });
    } catch (e) {
      dispatch(setAdvertRequestError(e.response.data.message));
      dispatch({ type: AdvertActionTypes.END_LOADING });
    }
  };
}
//TODO: Get advert by matching filters : recieved params [fromPrice,toPrice,title,author,skip,limit in request body]

// export function getAdvertsByQuery({id}) {
//   (dispatch) => {
//     dispatch(addTodoStarted());

//     axios
//       .get(`${process.env.backendPath}/advert`)
//       .then((response) => console.log(response.data))
//       .catch((e) => {});
//   };
// }

//TODO: Create advert: recieved params [price,title,description,img +  authorization header  in request body]
//TODO: Remove advert: recieved params [id +  authorization header  in request body]
//TODO: Edit advert: recieved params [id + params to change +  authorization header  in request body]

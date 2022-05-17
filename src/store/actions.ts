import axios from "axios";
import * as actionTypes from "./actionTypes";
const baseUrl = process.env.REACT_APP_API_URL;

export function addUrl(url: IUrl) {
  return (dispatch: DispatchType) => {
    axios.post(baseUrl + "/links", url).then((res) => {
      dispatch({
        type: actionTypes.ADD_URL,
        data: res.data,
      });
    });
  };
}

export function deleteUrl(id: number) {
  return (dispatch: DispatchType) => {
    axios.delete(baseUrl + "/links/" + id).then((res) => {
      dispatch({
        type: actionTypes.DELETE_URL,
        data: id,
      });
    });
  };
}

export function getAllUrls() {
  return (dispatch: DispatchType) => {
    axios.get(baseUrl + "/links").then((res) => {
      dispatch({
        type: actionTypes.SET_ALL_URLS,
        data: res.data,
      });
    });
  };
}

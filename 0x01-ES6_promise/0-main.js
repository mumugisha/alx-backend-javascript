import { getResponseFromAPI } from './0-promise';

getResponseFromAPI().then((response) => {
  console.log(response);
});

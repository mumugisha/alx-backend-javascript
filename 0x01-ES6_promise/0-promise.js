/* Return a Promise using this prototype */
export function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Success');
  });
}

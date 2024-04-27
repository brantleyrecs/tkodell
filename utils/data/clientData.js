import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getClients = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/clients`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// eslint-disable-next-line import/prefer-default-export
export { getClients };

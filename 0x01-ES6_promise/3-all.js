import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then(([photoResponse, userResponse]) => {
        resolve(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
      })
      .catch(() => {
        reject(new Error('Signup system offline'));
      });
  });
}

export default handleProfileSignup;

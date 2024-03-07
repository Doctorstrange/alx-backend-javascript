import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then(([photoResponse, userResponse]) => {
        console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
        resolve();
      })
      .catch(() => {
        reject(new Error('Signup system offline'));
      });
  });
}

export default handleProfileSignup;

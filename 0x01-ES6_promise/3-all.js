import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then(([photoResponse, userResponse]) => {
        console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
        resolve();
      })
      .catch(() => {
        console.log('Signup system offline');
        reject();
      });
  });
}

export default handleProfileSignup;

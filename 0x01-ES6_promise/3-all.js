import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  try {
    Promise.all([uploadPhoto(), createUser()])
      .then(([uploadResponse, userResponse]) => {
        console.log(uploadResponse.body, userResponse.firstName, userResponse.lastName);
      })
      .catch(() => {
        console.error('Signup system offline');
      });
  } catch (error) {
    console.error('Signup system offline');
  }
}

export default handleProfileSignup;

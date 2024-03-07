import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  try {
    const signUpUserResult = await signUpUserPromise;
    const uploadUserResult = await uploadPhotoPromise;

    return [
      { status: 'fulfilled', value: signUpUserResult },
      { status: 'fulfilled', value: uploadUserResult }
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error }
    ];
  }
}

export default handleProfileSignup;
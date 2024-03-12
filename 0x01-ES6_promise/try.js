function uploadPhoto() {
    return Promise.resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  }
  
  function createUser() {
    return Promise.resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  }


  function handleProfileSignup() {
    const obj1 = uploadPhoto();
    const obj2 = createUser();
    return Promise.all([obj1, obj2])
      .then((result) => {
        //handle resolve response
        //   const [photo, name] = result;
        const firstname = result[1].firstName;
        const lastname = result[1].lastName;
        const user = result[0].body;
        // console.log(${photo.body} ${name.firstName} ${name.lastName});
        console.log(`${user} ${firstname} ${lastname}`);
        console.log(result);
      })
      .catch(() => {
        console.log('not resolve');
      }
      });


  handleProfileSignup();
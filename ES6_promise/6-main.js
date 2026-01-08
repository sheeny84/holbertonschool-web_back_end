import handleProfileSignup from './6-final-user';

handleProfileSignup('Bob', 'Dylan', 'photo.jpg')
  .then(result => {
    console.log(result);
  });
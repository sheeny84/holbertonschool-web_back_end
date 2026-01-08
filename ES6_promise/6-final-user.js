import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.all([promise1, promise2])
    .then((user, photo) => ([
      photo,
      user,
    ]))
    .catch(() => ([
      { status: 500, body: null },
      { firstName, lastName },
    ]));
}
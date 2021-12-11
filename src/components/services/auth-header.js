export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    console.log(JSON.stringify(user));
    let res={};
    res.Authorization='Bearer ' + user.accessToken;
    res.userId=user.id;
    return {...res};
    } else {
    return {};
  }
}

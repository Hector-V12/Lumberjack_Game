function dologin() {
  const options = {
    method: 'GET',
  };

  let user = document.getElementById('username').value;
  let password = document.getElementById('pwd').value;
  const url = `http://wd.etsisi.upm.es:10000/users/login?username=${user}&password=${password}`;

  fetch(url, options)
    .then((response) => {
      const jwtToken = response.headers.get('Authorization');
      if (jwtToken) {
        localStorage.setItem('jwtToken', jwtToken);
      } else {
        document.getElementById('result').innerHTML =
          'Username and password do not match, please try again';
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById('result').innerHTML = 'Login successful !';
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById('result').innerHTML =
        'An error occurred. Please try again.';
    });
}

window.onload = function () {
  document.getElementById('btn').onclick = function (event) {
    event.preventDefault();
    dologin();
  };
};

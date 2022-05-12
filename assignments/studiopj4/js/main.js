// const togglePassword = document.getElementById('togglePassword');

// const showOrHidePassword = () => {
//   const password = document.getElementById('password');
//   if (password.type === 'password') {
//     document.getElementById ('show').style.display = 'block';
//   } else {
//     document.getElementById ('show').style.display = 'none';
//   }
// };

// togglePassword.addEventListener('change', showOrHidePassword);

const passwordForm = document.getElementById('password-form');
const passwordField = document.getElementById('password-field');

passwordForm.onsubmit = check_password;

function check_password (evt) {
  evt.preventDefault();
    var password = passwordField.value;
    console.log(password)
    if (password == 'realitycheck')
        document.getElementById ('hidden_div').style.display = 'block';
    else
        document.getElementById ('hidden_div').style.display = 'none';
}


  
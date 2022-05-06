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

function check_password (input_element) {
  
    var password = input_element.value;
    
    if (password == 'abcd')
        document.getElementById ('show').style.display = 'block';
    else
        document.getElementById ('show').style.display = 'none';
  
}
  
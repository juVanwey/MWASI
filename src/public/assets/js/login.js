document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordBtn = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('#password');
  
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePasswordBtn.innerHTML = isPassword ? '🙈' : '👁️';
    });
  });
  
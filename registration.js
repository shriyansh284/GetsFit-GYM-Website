document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('fullname');
        const passwordInput = document.getElementById('password');
        const emailInput = document.getElementById('email');

        const name = nameInput.value.trim();
        const password = passwordInput.value.trim();
        const email = emailInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 6) {
            alert('Name must be at least 6 characters long.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address in the format name@domain.com.');
            return;
        }
        
        window.location.href = 'gym.html';
    });
});

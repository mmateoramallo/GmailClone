document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="email"]');

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const label = this.nextElementSibling;
            if (this.value.trim() !== '') {
                label.classList.add('active');
            } else {
                label.classList.remove('active');
            }
        });
    });
});

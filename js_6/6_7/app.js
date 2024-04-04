function lockedProfile() {
    const buttons = document.querySelectorAll('.profile button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const userProfile = this.parentNode;
            const hiddenUserInfo = userProfile.querySelector('div');
            const status = userProfile.querySelector('input[name$="Locked"]:checked').value;
            if (status === 'unlock') {
                if (hiddenUserInfo.style.display === 'none') {
                    hiddenUserInfo.style.display = 'block';
                    this.textContent = 'Hide it';
                } else {
                    hiddenUserInfo.style.display = 'none';
                    this.textContent = 'Show more';
                }}
        });
    });
}
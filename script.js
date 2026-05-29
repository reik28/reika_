document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        
        const content = document.getElementById('content');
        content.classList.add('fade-out');
        
        setTimeout(() => {

            loadContent(page);
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
            
            setTimeout(() => {
                content.classList.remove('fade-in');
            }, 500);
        }, 500);
    });
});


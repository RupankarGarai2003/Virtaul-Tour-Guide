document.getElementById('searchInput').addEventListener('input', function() {
    let searchText = this.value.toLowerCase();
    let sections = document.querySelectorAll('section');
    let found = false;

    sections.forEach(section => {
        let sectionText = section.innerText.toLowerCase();
        if (sectionText.includes(searchText) && searchText) {
            section.style.display = '';
            if (!found) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                found = true;
            }
        } else {
            section.style.display = 'none';
        }
    });

    if (!found && searchText) {
        document.getElementById('searchInput').classList.add('no-results');
    } else {
        document.getElementById('searchInput').classList.remove('no-results');
    }
});
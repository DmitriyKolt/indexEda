const searchBtn = document.querySelector('.search-mobile');
const searchForm = document.querySelector('.search-form');

searchBtn.addEventListener('click', () => {
    if (!searchBtn.classList.contains('search-close')) {
        searchForm.style.display = 'block';
        searchBtn.classList.add('search-close');
    } else{
        searchBtn.classList.remove('search-close');
        searchForm.style.display='none';
    }
    


})
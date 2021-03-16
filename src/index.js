import './styles.css';
import './js/lightBox';
import ImagesFinderApiService from './js/api/apiService';
import imagesTpl from './tempates/images-list.hbs';

const imagesApiService = new ImagesFinderApiService();

const jsSearchRef = document.querySelector('.js-search-form');
const imagesListRef = document.querySelector('.js-gallery-container');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const anchorRef = document.querySelector('.anchor');

jsSearchRef.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  try {
    event.preventDefault();

    clearArticlesContainer();
    imagesApiService.query = event.currentTarget.elements.query.value;

    if (imagesApiService.query === '') {
      return alert('Вы ничего не ввели');
    }
    imagesApiService.resetPage();
    const imagesList = await imagesApiService.fetchArticles();
    appendArticlesMarkup(imagesList);
    observeHandler();
  } catch (error) {
    console.log('Ошибка!');
  }
}

function onLoadMore() {
  if (!imagesApiService.query) return;
  imagesApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(hits) {
  imagesListRef.insertAdjacentHTML('beforeend', imagesTpl(hits));
}

function clearArticlesContainer() {
  imagesListRef.innerHTML = '';
}

function observeHandler() {
  function observerCallback([entrie]) {
    if (!entrie.isIntersecting) return;
    onLoadMore();
  }
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0,
  });
  observer.observe(anchorRef);
}

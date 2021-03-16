import options from "../settings/";
const {API_KEY, BASE_URL} = options;

export default class ImagesFinderApiService {
  constructor(_params) {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchArticles() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
    const response = await fetch(url);
    const imagesLists = await response.json();
    this.incrementPage();
    return imagesLists;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

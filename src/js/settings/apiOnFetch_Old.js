//////////
//API_SERVICE сделан на THEN
// const API_LEY ='20689787-83a4953ee3875a5823ca1478f';
// const BASE_URL = 'https://pixabay.com/api/';
// export default class ImagesFinderApiService {
//   constructor(params) {
//       this.searchQuery = '';
//       this.page = 1;
//   }
//   fetchArticles() {
//     const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_LEY}`
//        return fetch(url)
//       .then(response => response.json())
//       .then(data  => {
//         this.incrementPage();
//         return data;
//       });
//   }
//   incrementPage(){
//       this.page +=1;
//   }
//   resetPage() {
//       this.page = 1;
//   }
//   get query() {
//       return this.searchQuery;
//   }
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
//
import randomUserGenerator from './api.js';

document.addEventListener('DOMContentLoaded', (e) => {
  randomUserGenerator();
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-generate')) {
    randomUserGenerator();
  }
});

var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _urlImgIconsSvg = require('url:../../img/icons.svg');
var _urlImgIconsSvgDefault = _parcelHelpers.interopDefault(_urlImgIconsSvg);
// Parcel 2
class RecipeView {
  #undefined = document.querySelector('.recipe');
  #undefined;
  render(data) {
    this.#undefined = data;
    const markup = this.#undefined();
    this.#undefined();
    this.#undefined.insertAdjacentHTML('afterbegin', markup);
  }
  #undefined() {
    this.#undefined.innerHTML = '';
  }
  renderSpinner = function () {
    const markup = `
        <div class="spinner">
                <svg>
                  <use href="${_urlImgIconsSvgDefault.default}#icon-loader"></use>
                </svg>
              </div>
        `;
    this.#undefined.innerHTML = '';
    this.#undefined.insertAdjacentHTML('afterbegin', markup);
  };
  #undefined() {
    return `
        <figure class="recipe__fig">
          <img src="${this.#undefined.image}" alt="${this.#undefined.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this.#undefined.title}</span>
          </h1>
        </figure>
      
        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_urlImgIconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this.#undefined.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_urlImgIconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this.#undefined.servings}</span>
            <span class="recipe__info-text">servings</span>
      
            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${_urlImgIconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${_urlImgIconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>
      
          <div class="recipe__user-generated">
            <svg>
              <use href="${_urlImgIconsSvgDefault.default}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${_urlImgIconsSvgDefault.default}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>
      
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
      
          ${this.#undefined.ingredients.map(ing => {
      return `
            <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${_urlImgIconsSvgDefault.default}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ing.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ing.unit}</span>
              ${ing.description}
            </div>
          </li>
            `;
    }).join('')}
        </ul>
        </div>
      
        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this.#undefined.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this.#undefined.sourceURL}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${_urlImgIconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
  }
}
exports.default = new RecipeView();

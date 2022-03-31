const menu_list = document.querySelector(".menu-list__main");
const menu_grid = document.querySelector(".menu-grid__main");
const menu_tile = document.querySelector(".menu-tile__main");

const menuDtb = [
  {
    id: 1,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 2,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 3,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 4,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 5,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 6,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 7,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 8,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 9,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 10,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 11,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
  {
    id: 12,
    img: "../images/menu/menu3.avif",
    name: "Ultimate organic fruit salad",
    desc: "survived not only five centuries but the leap",
    price: "$12.00",
  },
];

const htmls_menu_list = menuDtb.map(item => {
  return `
  <li class="menu-list__item">
    <div class="menu-list__item__info">
      <p class="menu-list__item__info__name">
        ${item.name}
      </p>
      <p class="menu-list__item__info__desc">
        ${item.desc}
      </p>
      </div>
    <div class="menu-list__item__price">
      <span>${item.price}</span>
    </div>
  </li>
  `
}).join('');

const htmls_menu_grid = menuDtb.map(item => {
  return `
    <li class="menu-grid__main__item">
      <img src=${item.img} alt="" class="menu-grid__main__item__image">
      <div class="menu-grid__main__item__body">
        <div class="menu-grid__main__item__body__content">
          <span class="menu-grid__main__item__body__content__name">${item.name}
              </span>
              <span class="menu-grid__main__item__body__content__desc">
                ${item.desc}
              </span>
            </div>
            <div class="menu-grid__main__item__body__price">
              <span>${item.price}</span>
            </div>
          </div>
        </li>
  `
}).join('');

const htmls_menu_tile = menuDtb.map(item => {
  return `
    <li class="menu-tile__main__item">
          <div class="menu-tile__main__item__image">
            <img src=${item.img} alt="">
          </div>
          <div class="menu-tile__main__item__body">
            <div class="menu-tile__main__item__body__content">
              <div class="menu-tile__main__item__body__content__name">
                ${item.name}
              </div>
              <div class="menu-tile__main__item__body__content__desc">
                ${item.desc}
              </div>
            </div>
            <div class="menu-tile__main__item__body__price">
              <span>${item.price}</span>
            </div>
          </div>
        </li>
  `
}).join("");


menu_list.innerHTML = htmls_menu_list;
menu_grid.innerHTML = htmls_menu_grid;
menu_tile.innerHTML = htmls_menu_tile;


import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../data/DATA.json';

const getData = () => {
    try {
        const listResto = document.querySelector("#card_list");
        const loadingSpin = document.querySelector(".loading");
        loadingSpin.innerHTML="";
        listResto.innerHTML="";
        data.restaurants.forEach((card) => {
            listResto.innerHTML += ` 
            <div class="card_item" key=${card.id}>
                <div class="card_header">
                    <img tabindex="0" class="card_img" loading=”lazy” src=${card.pictureId} alt="foto ${card.name}"/>
                    <div class="card_rating">
                       <p tabindex="0"> <i class="fas fa-star">  </i> ${card.rating} / 5 </p>
                    </div>

                    <div class="card_title">
                        <p tabindex="0" class="card_name">${card.name}</p>
                        <p tabindex="0" class="card_city">
                            <i class="fas fa-map-marker-alt" aria-hidden="true"></i> 
                        ${card.city}
                        </p> 
                    </div>

                </div>

                <div class="card_content">
                    <p tabindex="0" class="card_desc"> ${card.description.substring(0, 200) +" ...."}</p>
                </div>

            </div>
            `;
        
        });
           
    }
     catch(error) {
        showResponseMessage(error);
    }
};

const Showdrawer = () => {
    const menu = document.querySelector('#menu');
    const hero = document.querySelector('.jumbotron');
    const logo = document.querySelector('.logo');
    const main = document.querySelector('main');
    const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

logo.addEventListener('click', function () {
    drawer.classList.remove('open');
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});


}

setTimeout(() => {
    getData();
}, 3000);

Showdrawer();

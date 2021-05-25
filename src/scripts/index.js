import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../data/DATA.json';

const getData = async () => {
    try {
        const listResto = document.querySelector("#card_list");
        const loadingSpin = document.querySelector(".loading");
        loadingSpin.innerHTML="";
        listResto.innerHTML="";
        data.restaurants.forEach((card) => {
            listResto.innerHTML += ` 
            <div class="card_item" key=${card.id}>
                <div class="card_header">
                    <img class="card_img" loading=”lazy” src=${card.pictureId} alt="foto ${card.name}"/>
                    <div class="card_rating">
                        <i class="fas fa-star">  </i> ${card.rating} / 5 
                    </div>

                    <div class="card_title">
                        <p class="card_name">${card.name}</p>
                        <p class="card_city">
                            <i class="fas fa-map-marker-alt" aria-hidden="true"></i> 
                        ${card.city}
                        </p> 
                    </div>

                </div>

                <div class="card_content">
                    <p class="card_desc"> ${card.description.substring(0, 200) +" ...."}</p>
                </div>

            </div>
            `;
        
        });
           
    }
     catch(error) {
        showResponseMessage(error);
    }
};

setTimeout(() => {
    getData();
}, 3000);



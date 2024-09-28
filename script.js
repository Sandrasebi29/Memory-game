const cards = 
    document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id: 1,
        image: 
'/images/red.png',
        newAlt: 'Red'
    },
    {
        id: 2,
        image: 
'/images/green.png',
        newAlt: 'Green'
    },
    {
        id: 3,
        image: 
'/images/blue.png',
        newAlt: 'Blue'
    },
    {
        id: 4,
        image: 
'/images/orange.jpeg',
        newAlt: 'Orange'
    },
    {
        id: 5,
        image: 
'/images/yellow.png',
        newAlt: 'Yellow'
    },
    {
        id: 6,
        image: 
'/images/blue.png',
        newAlt: 'Blue'
    },
    {
        id: 7,
        image: 
'/images/yellow.png',
        newAlt: 'Yellow'
    },
    {
        id: 8,
        image: 
'/images/green.png',
        newAlt: 'Green'
    },
    {
        id: 9,
        image: 
'/images/purple.png',
        newAlt: 'Purple'
    },
    {
        id: 10,
        image: 
'/images/red.png',
        newAlt: 'Red'
    },
    {
        id: 11,
        image: 
'/images/purple.png',
        newAlt: 'Purple'
    },
    {
        id: 12,
        image: 
'/images/orange.jpeg',
        newAlt: 'Orange'
    }
]


const restartGame = () => {
    let toggledCard = 
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount=0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    }) 
}
restart.addEventListener('click', restartGame);


for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.card-image').src;
        let previousImgSrc = 
        toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
        if(thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
        }
        else{
            toggledCardsArray.length = 0;
            move++;
            winCount++;
        }
        movesDisplay.innerText = `Moves: ${move}`;
        if(winCount===6){
            setTimeout(()=>{
                alert(`Congratulations!!! You won the game in ${move} moves.`)
            }, 300)
        }
    })
}


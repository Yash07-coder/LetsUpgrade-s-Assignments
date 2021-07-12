let cards=[
    {
        image:"https://static.wikia.nocookie.net/chuckychildsplay/images/a/a8/New_Chucky.png/revision/latest/top-crop/width/360/height/450?cb=20210511191612 ",
        value:1,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/chuckychildsplay/images/a/a8/New_Chucky.png/revision/latest/top-crop/width/360/height/450?cb=20210511191612",
        value:1,
        status:"closed"
    },
    {
        image:"https://variety.com/wp-content/uploads/2020/10/raya.jpg?w=1000",
        value:2,
        status:"closed"
    },
    {
        image:"https://variety.com/wp-content/uploads/2020/10/raya.jpg?w=1000",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/93/53/9c/93539c1a4b3c1b7797872dd4ea04626c.png",
        value:3,
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/originals/93/53/9c/93539c1a4b3c1b7797872dd4ea04626c.png",
        value:3,
        status:"closed"

    },
    {
        image:"https://images.indianexpress.com/2020/05/jaadu-koi-mil-gaya-759.jpeg",
        value:4,
        status:"closed"
    },
    {
        image:"https://images.indianexpress.com/2020/05/jaadu-koi-mil-gaya-759.jpeg",
        value:4,
        status:"closed"
    },
    {
        image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/doaby-Groot-Profile-HD-Tip-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/111121/Baby-Groot-Profile-HD-Tip-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.ytimg.com/vi/1roy4o4tqQM/maxresdefault.jpg",
        value:6,
        status:"closed"
    },
    {
        image:"https://i.ytimg.com/vi/1roy4o4tqQM/maxresdefault.jpg",
        value:6,
        status:"closed"
    },

  
]




// durnsten shuffling alogorithm 

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('Score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("GAME OVER");
            location.reload();

        }

        
    }

    displayCards(cards);

}

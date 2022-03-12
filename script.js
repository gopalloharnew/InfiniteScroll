numberOfCards = 20;

const cardBox = document.querySelector(".cards");

const addNewCardDOM = () => {
    let i = 0;
    while(i < 10){
        let newcard = document.createElement("div");
        newcard.classList.add("card");
        newcard.innerHTML = `This is Card ${numberOfCards + 1}`;
        cardBox.append(newcard)
        showOnscroll.observe(newcard)
        numberOfCards++;
        i++;
    }
    
    addNewCards.observe(document.querySelector(".card:last-child"))
}

const showOnscroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    }),{
        threshold: 1,
    }
})

const addNewCards = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting){
        addNewCardDOM()
        addNewCards.unobserve(entries[0].target)
    }
},{
    rootMargin: "256px"
})

addNewCards.observe(document.querySelector(".card:last-child"))

cards = document.querySelectorAll(".card")

cards.forEach(card => {
    showOnscroll.observe(card)
})
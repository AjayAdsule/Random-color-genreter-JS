const colors=["red","#f59e0b","#0d9488","#155e75","#db2777"] // colors options
const color=document.querySelector(".color")
const btn=document.querySelector('button')

// logic
//firstly i grab the button and color element from html
// on click event the randomNumber function generate random number from colors length 
//navbar color is fix to white


btn.addEventListener('click',()=>{
    const randomNumber=randomNumberGenrater()
    console.log(randomNumber);
    const navbar=document.querySelector('.navbar')
    document.body.style.backgroundColor=colors[randomNumber]
    color.textContent=colors[randomNumber]
    navbar.style.backgroundColor="white"
})

const randomNumberGenrater=()=>{
    return Math.floor(Math.random()*colors.length)
}
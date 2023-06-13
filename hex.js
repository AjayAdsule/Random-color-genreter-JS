//hex color has 6 character from the range of 0-9 and A-F
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn=document.querySelector('.btn')
const color=document.querySelector('.color')

btn.addEventListener('click',()=>{
    let hexColor="#" //hex color start from # 
    for(let i=0;i<6;i++){ // running loop for iterate the hex value which length is 5
        hexColor+=hex[changeColor()] // adding 5 number after # 
        console.log(hexColor);
        color.innerHTML=hexColor
        document.body.style.backgroundColor=hexColor
    }
})

const changeColor=()=>{
    return Math.floor(Math.random()*hex.length)
}

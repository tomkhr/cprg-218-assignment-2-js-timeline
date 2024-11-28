console.log ("Hello!")

const title1 = "Overview"
const title2 = "2006-2009: Exploring Design"
const title3 = "2009-2012: Light Freelancing and Stock Graphics"
const title4 = "2012-2018: A break"
const title5 = "2018-2024: Back at it"
const title6 = "Present: Becoming a Pro"

const text1 = "Hi, my name is Tom Khrustalev. Welcome to my design journey wepage. This web page was made using HTML, CSS and JavaScript, and it serves as an insight into my long design journey. My design journey started in 2005, when I discovered design while browsing through a discussion forum online. I saw that a fellow forum user had a custom made graphic signature under their post with their username, I became curious about how can someone design something from scratch digitally. When I found out that I could use graphic software to design graphic elements by myself, my mind was absolutely blown, and it felt as if design had found it's way to me. Shortly after, I asked my parents to buy me one of the early versions of Adobe Photoshop as a birthday gift, instead of a video game. And that's where it all began..."

const text2 = ""

const text3 = ""

const text4 = ""

const text5 = ""

const text6 = ""


btn_1.addEventListener(`click`, function(){
    document.getElementById('period_title').innerHTML = title1
    document.getElementById('period_text').innerHTML = text1
    document.getElementById('period_img').src = "images/tom.webp"
    document.getElementById('btn_1').className = 'btn-active'
    document.getElementById('btn_2').className = 'btn'
    document.getElementById('btn_3').className = 'btn'
    document.getElementById('btn_4').className = 'btn'
    document.getElementById('btn_5').className = 'btn'
    document.getElementById('btn_6').className = 'btn'
})


btn_2.addEventListener(`click`, function(){
    document.getElementById('period_img').src = "images/period_1.jpeg"
    document.getElementById('period_title').innerHTML = title2
    document.getElementById('period_text').innerHTML = text2
    document.getElementById('btn_1').className = 'btn'
    document.getElementById('btn_2').className = 'btn-active'
    document.getElementById('btn_3').className = 'btn'
    document.getElementById('btn_4').className = 'btn'
    document.getElementById('btn_5').className = 'btn'
    document.getElementById('btn_6').className = 'btn'
})

btn_3.addEventListener(`click`, function(){
    document.getElementById('period_img').src = "images/period_2.jpeg"
    document.getElementById('period_title').innerHTML = title3
    document.getElementById('period_text').innerHTML = text3
    document.getElementById('btn_1').className = 'btn'
    document.getElementById('btn_2').className = 'btn'
    document.getElementById('btn_3').className = 'btn-active'
    document.getElementById('btn_4').className = 'btn'
    document.getElementById('btn_5').className = 'btn'
    document.getElementById('btn_6').className = 'btn'
})

btn_4.addEventListener(`click`, function(){
    document.getElementById('period_img').src = "images/period_2.jpeg"
    document.getElementById('period_title').innerHTML = title4
    document.getElementById('period_text').innerHTML = text4
    document.getElementById('btn_1').className = 'btn'
    document.getElementById('btn_2').className = 'btn'
    document.getElementById('btn_3').className = 'btn'
    document.getElementById('btn_4').className = 'btn-active'
    document.getElementById('btn_5').className = 'btn'
    document.getElementById('btn_6').className = 'btn'
})

btn_5.addEventListener(`click`, function(){
    document.getElementById('period_img').src = "images/period_2.jpeg"
    document.getElementById('period_title').innerHTML = title5
    document.getElementById('period_text').innerHTML = text5
    document.getElementById('btn_1').className = 'btn'
    document.getElementById('btn_2').className = 'btn'
    document.getElementById('btn_3').className = 'btn'
    document.getElementById('btn_4').className = 'btn'
    document.getElementById('btn_5').className = 'btn-active'
    document.getElementById('btn_6').className = 'btn'
})

btn_6.addEventListener(`click`, function(){
    document.getElementById('period_img').src = "images/period_2.jpeg"
    document.getElementById('period_title').innerHTML = title6
    document.getElementById('period_text').innerHTML = text6
    document.getElementById('btn_1').className = 'btn'
    document.getElementById('btn_2').className = 'btn'
    document.getElementById('btn_3').className = 'btn'
    document.getElementById('btn_4').className = 'btn'
    document.getElementById('btn_5').className = 'btn'
    document.getElementById('btn_6').className = 'btn-active'
})


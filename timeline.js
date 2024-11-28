console.log ("Hello!")

const title1 = "Overview"
const title2 = "2005-2009: Exploring Design"
const title3 = "2009-2012: Light Freelancing and Stock Graphics"
const title4 = "2012-2018: T-Shirt Graphics"
const title5 = "2018-2024: Web, UI and UX"
const title6 = "Present: Becoming a Pro"

const text1 = "Hi, my name is Tom Khrustalev. Welcome to my design journey wepage. This web page was made using HTML, CSS and JavaScript, and it serves as an insight into my long design journey. My design journey started in 2005, as a 15 year old teenager living in Israel. I discovered design while browsing through a discussion forum online. I saw that a fellow forum user had a custom made graphic signature under their post with their username, I became curious about how can someone design something from scratch digitally. When I found out that I could use graphic software to design graphic elements by myself, my mind was absolutely blown, and it felt as if design had found it's way to me. Shortly after, I asked my parents to buy me one of the early versions of Adobe Photoshop as a birthday gift, instead of a video game. And that's where it all began..."

const text2 = "After getting my hands on Adobe Photoshop CS, which was released in 2003, after skipping many LAN parties with my friends, playing CounterStrike 1.6, I spent majority of my spare time as a teenager learning and designing using Photoshop. After learning the basic tools, I started developing my own style that I used in multiple design. Using some of the communities and platform at the time, like DeviantArt and Flickr, I became active in the design community. It allowed me to learn and look up to other designer that were more advanced than me, as well as collaborate with beginning designers like myself from across the globe, and by that developing my English as a second language. The image you see is one of the early designs I made exploring Photoshop and working on finding an aesthetic direction."

const text3 = "In 2009, shortly after I immigrated to Canada with my Family, I was unable to work in Canada as a full time worker due to being on a visitor visa with my family, and I found myself having a lot of spare time that I couldn't find anything better to do with, other than double it down on design work. I entered into the world of logo design and print design. I started networking and finding clients among beginning music artists in the electronic music industry, mainly out of Central and South America. I offered my design services and was able to land a couple of design gigs a month. Simultenuously, trying to make an extra buck, I started posting print template designs on GraphicRiver (Envato) for event flyers. Rolling out one to two flyer templates a week allowed me to build a consistently growing passive income. The image you see is an event flyer template I designed at the time themed as the GTA video game. This design was one of my best selling designs on GraphicRiver."

const text4 = "In 2012, I hit a slower period in my design journey due to finally being able to work full time in Canada, which took away majority of the spare time that I had previously. But that did not deter me. I found my love for Adobe Illustrator shortly before that and still was able to find some free time in between work to create illustrations for t-shirt graphics. I was fortunate enough to get some of my designs printed with the major online graphic tee stores like Threadless, DesignByHumans, Crazy Dog Tees, and many more, getting my design printed on thousands of shirts, with some designs being sold out and reprinted in total of over 10,000 copies in total. Getting my t-shirt graphic designs featured in a globaly published book (Torso: T-Shirt Graphics Exposed) marked a great achievement during that phase, of which I am very proud to this day. The image you see is a t-shirt design that was printed as part of a band merch for the dutch metal band named Brutal Knack."

const text5 = "After several years of a slow period, I found my interest in design for the web. I got into designing user interfaces and took a couple of courses on Udemy to learn about user-cenetered design. One of the courses helped me grasp the basics of what are HTML, CSS, and JavaScript, and how they work. I discovered Figma and Webflow during that period, which instantly became a fascinating tool to me, as they combined design mobile design, web design, and web development seamlessly, like nothing that I doscovered before. Driven by curiousity, I became comfortable designing UIs and web pages and found a real passion for it. in May of 2024, after being marries and having my first kid, encouraged by my amazing wife, I decided to take design to a professional level. The image you see is a thumbnail for PICNIC personal design project I've worked on, creating a mobile application prototype using Figma."

const text6 = "Currently, I am an Interactive Design student at SAIT. I started the program in May of 2024, and chose the UX Design major stream. After one full semester in the program, I've decided to switch my major to Web Design and Development. I realized that there is a lot more for me to learn in the web stream. I looking forward to grasping everything I possibly can, with my goal being finding my place in the industry. I am hoping to work on projects that touch on both design and some fornt end web development. I find the web to be as much of a creative outlet for me as design, illustration, branding and everything in between has been for me so far, and am extremely excited about what the future will bring for me. The image you see is a web page I created using Webflow as part of an assignment in my class, Intro to Web Communications, during my first semester at SAIT."


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
    document.getElementById('period_img').src = "images/period_1.webp"
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
    document.getElementById('period_img').src = "images/period_3.webp"
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
    document.getElementById('period_img').src = "images/period_4.webp"
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
    document.getElementById('period_img').src = "images/period_5.webp"
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
    document.getElementById('period_img').src = "images/period_6.webp"
    document.getElementById('period_title').innerHTML = title6
    document.getElementById('period_text').innerHTML = text6
    document.getElementById('btn_1').className = 'btn'
    document.getElementById('btn_2').className = 'btn'
    document.getElementById('btn_3').className = 'btn'
    document.getElementById('btn_4').className = 'btn'
    document.getElementById('btn_5').className = 'btn'
    document.getElementById('btn_6').className = 'btn-active'
})


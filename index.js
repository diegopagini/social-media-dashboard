const FOLLOWERS = [
    {
        url: "images/icon-facebook.svg",
        alt: "icon-facebook",
        name: "@nathanf",
        total: 1987,
        followers: "FOLLOWERS",
        today: "12 Today"
    },
    {
        url: "images/icon-twitter.svg",
        alt: "icon-twitter",
        name: "@nathanf",
        total: 1044,
        followers: "FOLLOWERS",
        today: "99 Today"  
    },
    {
        url: "images/icon-instagram.svg",
        alt: "icon-instagram",
        name: "@realnathanf",
        total: "11k",
        followers: "FOLLOWERS",
        today: "1099 Today",
        class: "instagram"
    },
    {
        url: "images/icon-youtube.svg",
        alt: "icon-youtube",
        name: "Nathan F.",
        total: 8239,
        followers: "SUBSCRIBERS",
        today: "144 Today",
        class: "youtube"  
    }
]

const OVERVIEW = [
    {
        info: "Pages Views",
        icon: "images/icon-facebook.svg",
        followers: 87,
        today: "3%"
    },
    {
        info: "Likes",
        icon: "images/icon-facebook.svg",
        followers: 52,
        today: "2%"
    },
    {
        info: "Likes",
        icon: "images/icon-instagram.svg",
        followers: 5462,
        today: "2257%"
    },
    {
        info: "Profile Views",
        icon: "images/icon-instagram.svg",
        followers: "52k",
        today: "1375%"
    },
    {
        info: "Retweets",
        icon: "images/icon-twitter.svg",
        followers: 117,
        today: "303%"
    },
    {
        info: "Likes",
        icon: "images/icon-twitter.svg",
        followers: 507,
        today: "553%"
    },
    {
        info: "Likes",
        icon: "images/icon-youtube.svg",
        followers: 107,
        today: "19%"
    },
    {
        info: "Total Views",
        icon: "images/icon-youtube.svg",
        followers: 1407,
        today: "12%"
    }
]



function mostrarSeguidores() {
    html = '';
    FOLLOWERS.forEach(el => {
        html += `
        <div class="cont ${el.class}">
            <div class="incons-container">
                <img src="${el.url}" alt="${el.alt}">
                <h3>"${el.name}"</h3>
            </div>
        <h1 class="number">${el.total}</h1>
        <h4 class="followers">${el.followers}</h4>
        <h3 class="today">${el.today}</h3>
        </div>
        `
    })

    document.getElementById('show-info').innerHTML = html;
}
mostrarSeguidores();



function mostrarMas() {
    html = '';
    OVERVIEW.forEach(el => {
        html += `<div class="contx">
                    <div class="incon-wraper">
                        <h3>${el.info}</h3>
                        <img src="${el.icon}">
                    </div>
                    <div class="incon-wraper">
                        <h2>${el.followers}</h2>
                        <h5>${el.today}</h5>
                    </div>
                </div>
                `
    })

    document.getElementById('show-more').innerHTML = html;
}
mostrarMas();



function cambiarMas(){
    document.getElementById('botoncito').addEventListener('click', function(){
    let contenedor = document.getElementsByClassName('contx') ;
    for( let i = 0; i <= contenedor.length; i++ ) {
        contenedor[i].style.background = "hsl(230, 22%, 74%)";
    }
})
}
cambiarMas();


function cambiarMasMas(){
    document.getElementById('botoncito').addEventListener('click', function(){
    let firstCont = document.getElementsByClassName('cont');
    for( let i = 0; i <= firstCont.length; i++ ) {
        firstCont[i].style.background = "hsl(230, 22%, 74%)";
    }
})
}
cambiarMasMas();


function cambiarTodo(){
    document.getElementById('botoncito').addEventListener('click', function(){
        document.getElementById('body').classList.add('light');
    })
}
cambiarTodo()
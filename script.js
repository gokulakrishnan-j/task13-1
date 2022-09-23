
function cats(s){
    console.log(s)
    s.map((n)=>{
        document.body.innerHTML+=`<div class="catName"><div>${n.name}</div>
        <div><img class="catImg" src="${n.image.url}" alt="${n.name}"></div>
        <div class="weight">Weight : ${n.weight.imperial}</div>
        <div class="country">Country code : ${n.country_code}</div>
        <div class="id">Id : ${n.id}</div>
        </div>`
    })
}

fetch("https://api.thecatapi.com/v1/breeds")
.then((data)=>data.json())
.then((get)=>cats(get))


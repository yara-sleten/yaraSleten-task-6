fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
.then(res => res.json())
.then(res => cards(res))

let Div=document.querySelector('.root');
let Tap1=document.querySelector('.my-tap1');
let Tap2=document.querySelector('.my-tap2');
function cards(res)
{
   

   for(let i =res.length - 4; i<res.length-1; i++){
        Div.innerHTML += `
        <div class="cardo">
        <img  src= ${res[i].simple_thumb} />
        <h2 class="mt-3">${res[i].title}</h2>
        <h3> ${res[i].author}</h3>
        </div>
        `
    }
    Div.innerHTML+= `
     <div class="cardo">
        <img  src= ${res[45].simple_thumb} />
        <button type="button" class="res-btn w-100 rounded-0 d-none btn btn-dark">ADD TO CART</button>
        <h2 class="mt-3">${res[45].title}</h2>
        <h3> ${res[45].author}</h3>
        </div>
    
    
    `
    
    for (let i=res.length - 8 ; i<res.length -4 ; i++){
        Tap1.innerHTML+= `
        <div class="cardo  ">
        <img  src= ${res[i].simple_thumb} />
        <h2 class="mt-3">${res[i].title}</h2>
        <h3> ${res[i].author}</h3>
        </div>
        
        `
        
    }

    for (let i=res.length - 4 ; i<res.length  ; i++){
        Tap2.innerHTML+= `
        <div class="cardo">
        <img  src= ${res[i].simple_thumb} />
        <h2 class="mt-3">${res[i].title}</h2>
        <h3> ${res[i].author}</h3>
        </div>
        `
    }
    

}
fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
.then(result => result.json())
.then(result => MySec(result))
let MyDiv=document.querySelector('.my-sec');
function MySec(result)
{
    MyDiv.innerHTML = `
    <img  src= ${result.cover} />
    <div class="title">
    <h2>Best Selling Book</h2>
    <div class="bord "></div>
    <p class="pt-5"> ${result.authors[0].name }</p>
    <h3 >${result.title}</h3>
    <p> ${result.fragment_data.html}</p>
    <button class="border-0 "><b>Shop It Now</b> <i class="bi bi-arrow-right"></i></button>
    </div>
    `
}


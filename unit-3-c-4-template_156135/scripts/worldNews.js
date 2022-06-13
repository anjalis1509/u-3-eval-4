let data = JSON.parse(localStorage.getItem("user"))
console.log(data)


let country = data.country
 console.log(country)

let getNews= async()=> {
    
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`)
    let data = await res.json()
    let result = data.articles
    console.log(result)
    appendData(result)
}
getNews()


let appendData =(data)=> {
    let container = document.getElementById("news_result")
    container.innerHTML= null
     data.forEach((el)=> {
    let div = document.createElement("div")
    div.setAttribute("class", "news")

    let img= document.createElement("img")
    img.src = el.urlToImage

    let div2 = document.createElement("div")

    let title = document.createElement("p")
    title.innerText =el.title

    let author = document.createElement("h4")
    author.innerText = el.author

    div2.append(title, author)
    div.append(img, div2)
    container.append(div)
     })
}

//searchbar 


let getData = async()=> {
    let query = document.getElementById("search_box").value 
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
    let data = await res.json()
    let result = data.articles
    console.log(result)
    appendData(result)
}
let search = (e)=> {
    if(e.key +"Enter"){
       getData() 
    }
}

document.getElementById("search_box").addEventListener("keydown", search)


// for countries news

let categories =  document.getElementById("categories").children
console.log(categories)

let getData2 = async(q)=> {
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${q}`)
    let data = await res.json()
    let result = data.articles
    console.log(result)
    appendData(result)
}

function navSearch(){
console.log(this.id)
 getData2(this.id)
}

for(let el of categories ){
    el.addEventListener("click", navSearch)
}

//news


document.querySelectorAll(".news").addEventListener("onclick", newsPage)
function newsPage(){
    window.location.href = "news.html"
}
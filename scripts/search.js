async function searchNews(){
    try{
        let query=document.getElementById("search-box").value
        let res=await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=31f0ba4162ff4ef29144778cee1cb119`);
    let data=await res.json()
    console.log(data)
    appendNews(data.articles)
    }catch(e){
        console.log(e)
    }
    
}
var timerId
let searchdiv=document.getElementById("search-div")
function appendNews(data){
    searchdiv.innerHTML=null

    data.forEach((newsdata)=>{
    let newstitle=document.createElement("p")
    let img=document.createElement("img")
    img.src=newsdata.urlToImage
    newstitle=newsdata.title
    searchdiv.append(newstitle,img)
    searchdiv.style.margin="2px"
    //div.style.display="flex"
        searchdiv.style.display="flex"
        searchdiv.style.flexDirection="column"
        searchdiv.style.width="60%"
        //news.style.width="60%"
        //news.style.margin="auto"

    })


}
function debounce(func,delay){
if(timerId){
  clearInterval(timerId)
}
timerId=setInterval(function(){
  func()
},delay)
}
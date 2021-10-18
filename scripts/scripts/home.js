async function getNews(){
    try{
        let res=await fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey=31f0ba4162ff4ef29144778cee1cb119");
    let data=await res.json()
    console.log(data)
    showNews(data.articles)
    }catch(e){
        console.log(e)
    }
    
}
getNews()
let news=document.getElementById("news")
function showNews(data){
    let div=document.createElement("div")
    data.forEach((newsdata)=>{
        let title=document.createElement("p")
        title=newsdata.title
        let img=document.createElement("img")
        img.src=newsdata.urlToImage
        img.onclick=function(){
            showDetail(title,img)
          //  window.location.href="news.html"
        }

        div.append(img ,title)
        news.append(div)
        div.style.display="flex"
        news.style.display="flex"
        div.style.flexDirection="column"
        news.style.width="60%"
        news.style.margin=" 4% auto"

    })
 
}
function showDetail(img,title){
   news.innerHTML=null
news.append(title,img)
}
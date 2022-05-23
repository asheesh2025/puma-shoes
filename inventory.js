let take_data=JSON.parse(localStorage.getItem("products")) || []
take_data.map(function (el,index)
{
    let image=document.createElement("img")
    image.src=el.image
    image.style.width="100%"
    image.style.height="50%"
    let type=document.createElement("h1")
    type.innerText=el.type
    let desc=document.createElement("h1")
    desc.innerText=el.desc
    let price=document.createElement("h1")
    price.innerText=el.price
    let remove=document.createElement("button")
    //let remove=document.querySelector("#remove_product")
    remove.innerHTML="Remove"
    remove.addEventListener("click",function(el,index)
    {
        remove1(el,index)
    })
    let div1=document.createElement("div")
    div1.append(image,type,desc,price,remove)
    document.querySelector("#all_products").append(div1)
})

function remove1(el,index)
{
    take_data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(take_data))
    window.location.reload()
}
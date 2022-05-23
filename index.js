//store the products array in localstorage as "products"
function pumaData(a,b,c,d)
{
    this.type = a
    this.desc = b
    this.price = c
    this.image =d
}
let a=document.querySelector("#type").value 
let b=document.querySelector("#desc").value
let c=document.querySelector("#price").value
let d=document.querySelector("#image").value
let arr1=JSON.parse(localStorage.getItem("products")) || []
function storeData()
{
    event.preventDefault()
let obj={
type : document.querySelector("#type").value, 
desc : document.querySelector("#desc").value,
price : document.querySelector("#price").value,
image: document.querySelector("#image").value
}
//let puma1=new pumaData(a,b,c,d)
arr1.push(obj)
//arr1.push(puma1)
localStorage.setItem("products",JSON.stringify(arr1))
//localStorage.setItem("products",JSON.stringify(arr1))
location.reload()
//console.log(arr1)
}
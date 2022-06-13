/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
document.getElementById("form").addEventListener("onsubmit", storeData)
function Obj(m,n,o,p){
    this.img = m
   this.name = n
   this.email = o
   this.country = p
}

function storeData(){
   event.preventDefault()
   let img = document.getElementById("user_pic").value 
   let name = document.getElementById("user_name").value 
   let mail = document.getElementById("user_email").value 
   let country = document.getElementById("user_country").value 
   let x = new Obj(img, name, mail, country)  || JSON.parse(localStorage.getItem("user"))
   console.log(x)

   localStorage.setItem("user", JSON.stringify(x))

   document.getElementById("user_pic").value = ""
   document.getElementById("user_name").value =""
   document.getElementById("user_email").value  = ""
   document.getElementById("user_country").value = ""

}

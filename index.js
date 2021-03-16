var con = document.getElementById("contenido")
var bot = document.getElementById("boton")


bot.addEventListener("click",realizarPeticion)
var te =  document.getElementById("texto")


function realizarPeticion(){
    fetch(` https://pokeapi.co/api/v2/pokemon/${te.value}` )
        .then(res =>{
            res.json()
               .then(resJSON =>{
                 con.innerHTML = `
                 <h1>${resJSON.name}</h1>
                 <h1>${resJSON.order}</h1>
                 <img src = "${resJSON.sprites.front_default}"/>
                 ` 
                })
               .catch(err=>alert(err))
        })
}
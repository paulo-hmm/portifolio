function toogleMode() {
   const html = document.documentElement
   let photo = document.querySelector("div#profile")
/*
   if (html.classList.contains("light")) {
    html.classList.remove("light")
   } else {
    html.classList.add("light")
   }
*/
   html.classList.toggle("light") // faz o mesmo que a condição acima

   /*Aqui vou coletar a imagem*/
   const img = document.querySelector("#profile img") //podemos usar igual no CSS
   

   if (html.classList.contains("light")) {
    img.setAttribute('src', '../assets/fotinha-light.png')
    img.setAttribute('alt', 'Foto de Paulo Henrique usando camisa preta e fundo rosa')
   } else {
    img.setAttribute('src', '../assets/fotinha.png')
    img.setAttribute('alt', 'Foto de Paulo Henrique usando camisa preta e fundo azul')

   }

}
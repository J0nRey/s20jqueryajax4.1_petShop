$(document).ready( function(){
    $(".content-wrapper").load("./views/home.html")
    loadView("/s20jqueryajax4.1_petShop/views/home.html", "home")
})




$(".navbar-nav a").click( event => {
    event.preventDefault()
//    console.log( "click" )
//    console.log(event.target.href)

  let view = event.target.dataset.viewTarget
  console.log(view)

//  let url = new URL(event.target.href).pathname.replace('/s20jqueryajax4.1_petShop/',"")
    let url = `/s20jqueryajax4.1_petShop/views/${view}.html`
    console.log(url)

    console.log(event.target) // = a
    $(".nav-item").removeClass("active") 
    $(event.target).closest(".nav-item").addClass("active")//.closest(".nav-item") busca el padre desde el a

  loadView(url, view)

//  $('.content-wrapper').load(url, getPets) // Problema, se carga todo
/*     $('.content-wrapper').load(url, () => {
      console.log(view)
      switch ( view ){

          case "home" :
          alert("cargando home")
          break
          
          case "pets" :
          alert("cargando pets")
          getPets()
          break
          
          case "users" :
          alert("cargando users")
          break
          
          default:
          alert("cargando home...")
      }
    }) */
})


const loadView = (url, view) => {

  $('.content-wrapper').load(url, () => {
    console.log(view)
    switch ( view ){

        case "home" :
        alert("cargando home")
        break
        
        case "candidatos" :
        alert("cargando home")
        break

        case "pets" :
        alert("cargando pets")
        getPets()
        break
        
        case "users" :
        alert("cargando users")
        break
        
        default:
        alert("cargando home...")
    }
  })

}




const getPets = () => {
  $.ajax({
      method:"GET",
      url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/pets/.json",
      success: response => {
          console.log( response )
      },
      error: error => {
          console.log(error)
      } 
  })
}

// Event-handlers //

/* $("content-wrapper .add-user").click() */
// funciona porque no esta dentro del content-wrapper es decir, esta en el user.html y no en index.html
$(".content-wrapper").on("click", ".add-user", () => {
  console.log("Agregando Nuevo Usuario")
})

// funciona porque esta dentro del content-wrapper es decir, dentro del index.html
/* $(".add-user").click( () => {
  console.log("Agregando Usuario")
}) */
//arrays

/*
var productos=["vinchas","broches","aros","peines","espejos","anillos","cadenas","relojes","pañuelos","Gorros"]
var precios=[1250,850,1500,900,2500,2000,3000,10000,4500,5900]

console.log(productos)

console.log(precios)




var respuesta=parseInt(prompt("1-vinchas $1250 2-broches $850  3-aros $1500 4-peines $900 5-espejos $2500 6-anillos $2000 7-cadenas $3000  8-relojes $10000 9-pañuelos $4500 10-gorros $5900"))



var cantidad = parseInt(prompt("Ingrese la cantidad"))

indice= 0 
var total=("Productos: "+ " " + productos[respuesta-1] + " " + "Total: " + " " + (precios[respuesta-1] )* cantidad)

while(indice<13){

   

alert(total)

 
}  */

//cajero automatico

/*
var opcionCajero = parseInt(prompt("Elija una opción: 1- Consulta Saldo 2- Depositos 3- Extracciones "))
var SaldoUser = 5000

switch (opcionCajero) {

  case 1:
    console.log("Consultar Saldo " + "Su  Disponible es : " + SaldoUser)
    alert( "Saldo Disponible: $" + SaldoUser )  

    break

  case 2:
    console.log("Depositar")
    var Deposito = parseFloat(prompt("Cuánto desea depositar"))
    var deprdo= SaldoUser + Deposito

    if(Deposito){
      console.log( "Depositar")
        alert("ingrese su dinero") 
        alert(`Saldo Actual Disponible $: ${deprdo}`)

    }
    break

  case 3:
    console.log("Extraer")
    var Extraer = parseFloat(prompt("Cuánto desea extraer"))
    var rdo= SaldoUser-Extraer

    if(SaldoUser>Extraer){
      console.log()
        alert("retire su dinero") 
        alert(`Saldo Actual Disponible $: ${rdo}`)
      
    
    }else{
      console.log(Extraer>SaldoUser)
        alert ("no posee el saldo suficiente ")

          }
    break

  default:
       console.log("Resp por Default") 
        alert=( "su operacion no fue realizada" )
      }


*/
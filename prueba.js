const miBoton = document.getElementById("Miboton"); // Se obtiene el boton mediante su ID
const salario_act = document.getElementById("Salario_Actual");
const Salario_nue = document.getElementById("Salario_Nuevo");
const resultado = document.getElementById("resultado");


miBoton.addEventListener("click", function(){
    const sal_act = salario_act.value
    const sal_nue = Salario_nue.value
    if (sal_act.trim() === "" || sal_nue.trim() === ""){
        alert("Recuerda que para esta operacion requieres tener ambos datos")
        salario_act.value="";
        Salario_nue.value="";
    } else {
        const act = parseFloat(sal_act);
        const nue = parseFloat(sal_nue);
        let aumento = nue - act
        let res = (aumento*100)/act
        let res_redondeado = res.toFixed(2);
        resultado.innerHTML = "<strong> El porcentaje que se aumento al colaborador es: </strong>" + res_redondeado + "<strong>%</strong>"
        resultado.style.display = "block";
        salario_act.value="";
        Salario_nue.value="";

    }
});




//miBoton.addEventListener("click", function() {
  //  const texto = salario_act.value;
    //if (texto.trim()===""){
      //  alert("Por favor, ingresa algo en el cuadro de texto")
        //salario_act.value="";
    //}
    //else{
      //  resultado.innerHTML = "<strong> Haz escrito: </strong>" + texto
        //resultado.style.display = "block";
        //salario_act.value="";
    //}
    //const contenido = document.getElementById("contenido");
    //contenido.innerHTML = "<h2>¡Gracias por hacer clic!</h2><p>Has interactuado con la pagina web.</p>";
//});
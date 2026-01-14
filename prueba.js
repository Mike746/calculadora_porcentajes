const miBoton = document.getElementById("Miboton"); // Se obtiene el boton mediante su ID
const miBoton2 = document.getElementById("Miboton2");
const salario_act = document.getElementById("Salario_Actual");
const salario_act_2 = document.getElementById("Salario_Actual_2")
const Salario_nue = document.getElementById("Salario_Nuevo");
const porcentaje = document.getElementById("Porcentaje")
const resultado = document.getElementById("resultado");
const resultado_2 = document.getElementById("resultado");


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

miBoton2.addEventListener("click", function(){
  const sal_act_2 = salario_act_2.value
  const porcen = porcentaje.value
  if (sal_act_2.trim() == "" || porcen.trim() == ""){
    alert("Recuerda que para esta operacion requieres tener ambos datos")
    salario_act_2.value="";
    porcentaje.value = "";
  } else {
    const act_2 = parseFloat(sal_act_2);
    const por = parseFloat(porcen);

    let porcent = por/100
    let res_2 = (porcent*act_2) + act_2
    let res_redondeado_2 = res_2.toFixed(2);

    resultado_2.innerHTML = "<strong> El nuevo salario del colaborador deberia ser: </strong>" + res_redondeado_2 + "<strong> MXN</strong>"
    resultado_2.style.display = "block";
    salario_act_2.value="";
    porcentaje.value="";
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

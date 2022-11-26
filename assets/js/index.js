const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  const selectorMinCantCuartos = document.querySelector("#minCantCuartos");
  const selectorMinArea = document.querySelector("#minArea");
  const selectorMaxArea = document.querySelector("#maxArea");
  const mensajeRespuesta = document.querySelector("#mensajeRespuesta");
  const cantidadFiltrados = document.querySelector("#cantidadFiltrados");

  render=function(propiedades,cantidad){
    totalFiltrados=document.querySelector("#propiedades")
    totalFiltrados.innerHTML=propiedades
    cantidadFiltrados.textContent=cantidad
  }

  getStringCard=function(propiedad){
    let stringCard=` <div class="propiedad">
      <div class="img" style="background-image: url('${propiedad.src}')"></div>
      <section>
          <h5>${propiedad.description}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos: ${propiedad.rooms}</p>
              <p>Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.name}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
  </div>`
  return stringCard

  }

  filtrarPropiedades=function(condicionCuartos, minArea, maxArea,arreglo){
    let propiedadesString=""
    let cantidadFiltrados=0
    for(let objeto of arreglo){
      if(objeto.rooms>=condicionCuartos&&objeto.m>=minArea&&objeto.m<=maxArea){
        propiedadesString+=getStringCard(objeto)
        cantidadFiltrados++
      }
    }
    let filtrarResultado={propiedadesString:propiedadesString,cantidadFiltrados:cantidadFiltrados}
    return filtrarResultado
  }

  validaciones=function(input1,input2,input3){
    
    if(isNaN(input1)||isNaN(input2)||isNaN(input3)){
      mensajeRespuesta.textContent="Todos los inputs deben tener valores numéricos"
      return false
    }

    if(input1<0||input2<0||input3<0){
      mensajeRespuesta.textContent="Todos los inputs deben ser positivos"
      return false
    }
    return true

  }

  let resultado=filtrarPropiedades(1,0,1000,propiedadesJSON)
  render(resultado.propiedadesString,resultado.cantidadFiltrados)
  console.log(resultado.cantidadFiltrados)

  btnBuscar.addEventListener("click", () => {
    const selCantCuart=selectorMinCantCuartos.value
    const selMaxArea=selectorMaxArea.value
    const selMinArea=selectorMinArea.value
    const cantCuar=parseInt(selCantCuart)
    const maxArea=parseInt(selMaxArea)
    const minArea=parseInt(selMinArea)

    const esValido=validaciones(cantCuar,maxArea,minArea)
    if(esValido==false){
      return
    }
    let resultadoBuscar=filtrarPropiedades(cantCuar,minArea,maxArea,propiedadesJSON)
    render(resultadoBuscar.propiedadesString,resultadoBuscar.cantidadFiltrados)
    
   
    
    
});
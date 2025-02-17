// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigo = "";
let listaAmigos = [];
let intentoMaximo = listaAmigos.length;
let listaAmigoSorteado = [];
let amigoSorteado = "";

function asignatTextoElemento(idElemento, texto) 
{
  let elementoHTML = document.querySelector(idElemento);
  elementoHTML.innerHTML = texto;
}

function limpiarTexto() {

   let valorTexto = document.querySelector('#amigo');
   valorTexto.value = '';
}

function agregarAmigo() { 
   let nombreAmigo = document.getElementById("amigo").value;
   console.log(listaAmigos);
   if (nombreAmigo == "") 
   {
    alert("Debe ingresar un nombre");
   }
      else if (listaAmigos.includes(nombreAmigo)) 
      {
      alert('+nombreAmigo ya existe');
      }
      else 
      (
      listaAmigos.push(nombreAmigo)
      );
      asignatTextoElemento("#listaAmigos", listaAmigos.join(", "));
      limpiarTexto();
   }

function sortearAmigo() {
  let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  console.log(amigoSorteado);

  if (listaAmigoSorteado.length == listaAmigos.length-1)
   {
      alert("Todos los amigos ya fueron sorteados");
   }

   else

   { if (listaAmigoSorteado.includes(amigoSorteado))
      { 
      return sortearAmigo();
      }
      else
      {
         listaAmigoSorteado.push(amigoSorteado);
         asignatTextoElemento('h2', `${amigoSorteado} es el amigo sorteado`);
         return amigoSorteado;
         
      }
   }
   
}

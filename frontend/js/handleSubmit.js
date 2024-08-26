const form = document.querySelector("form");
const btn = document.querySelector(".button");

function escaparHTML(texto) {
  if (typeof texto !== 'string') return '';
  return texto
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot')
  .replace(/'/g, '&#039');
  
}

//VARIABLE GLOBAL
const responseMessage = document.querySelector('.responseMessage');
form.addEventListener("submit",(e)=>{
  
  e.preventDefault();
  btn.disabled = true;
  
  function resetearInputs() {
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
    document.getElementById('telefono').value = '';
  }
  
  //recoger los datos del formulario
  const formData = {
    nombre: (document.getElementById('nombre').value || '').trim(),
    email: (document.getElementById('email').value || '').trim(),
    mensaje: (document.getElementById('mensaje').value || '').trim(),
    telefono: (document.getElementById('telefono').value || '').trim()
  }
  
  //ELIMINAR LOS DATOS PARA EVITAR ENVIAR MUCHOS CORREOS

  //VALIDAR LOS DATOS EN EL FRONTEND 
  function validarFormulario(formData) {
    let errores = [];
    
    //Validar el nombre
    if(!formData.nombre) {
      errores.push('El nombre es obligatorio');
    } else if (formData.nombre.length < 2) {
      errores.push('El nombre debe tener al menos 2 caracteres');
    }

    //Validar el email 
    if(!formData.email) {
      errores.push('El correo electronico es obligatorio');
    } else if (!validarEmail(formData.email)) {
      errores.push('El correo electrónico no es válido')
    }

    //validar el mensaje
    if(!formData.mensaje) {
      errores.push('El mensaje es obligatorio');
    } else if (formData.mensaje.length < 5) {
      errores.push('El mensaje debe tener al menos 5 caracteres');
    }
    
    if(formData.telefono && !validarTelefono(formData.telefono)) {
      errores.push('El número de teléfono no es válido');
    }
    btn.disabled = false;
    return errores;
  }
  
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarTelefono(telefono) {
    const regex = /^\d{10}$/;
    regex.test(telefono);
    return regex
  }

  function responseHTML(operation, errores) {
    //Limpiar mi respuesta al cliente
    responseMessage.innerHTML = "";
    responseMessage.className = "";
    

    //Agregar la clase correspondiente
    responseMessage.classList.add(operation);

    //logica de operaciones para agregar clases
    errores.forEach(error => {
      const div = document.createElement('p');
      div.innerHTML = error;
      responseMessage.appendChild(div);
    })

  }

  const datosValidados = validarFormulario(formData);

  //VERIFICAR SI EL FRONTEND DETECTO ALGUN PROBLEMA Y SI NO LO HACE EL BACKEND LO HARÁ
  if (datosValidados.length > 0) {
    responseHTML('error', datosValidados);
  } else {
    responseHTML('success', ['Enviando mensaje correo...']);
    resetearInputs();
    EnviarDatos();
  }

  console.log(window.location.hostname);


  async function EnviarDatos() {
    try {
      //ojo hostaname partecita de url ej: localhost
      const apiUrl = window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000/api/contact'
        : 'https://mateico.vercel.app/api/contact'

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      });

      console.log("url: ",apiUrl)
      
      const result = await response.json();

      if(response.ok) {
        responseHTML('success', [result.message]);
        // setTimeout(()=> {
        //   responseMessage.remove();
        // },3000)
      } else {
        responseHTML('error', result.errors.map(error => error.msg));
      }

    }catch(err) {
      responseHTML('error', [err.message])
    }finally {
      btn.disabled = false;
    }
    
  }

})


btn.addEventListener('click', () =>{
  btn.classList.toggle('active');
})
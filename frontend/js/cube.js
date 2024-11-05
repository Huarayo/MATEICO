let currentFace = 0; // Índice para controlar la cara actual

const contents = [
  {
    title: "Derechos Básicos",
    body: `
      <ul>
          <li><strong>Protección:</strong> Derecho a la salud y seguridad.</li>
          <li><strong>Información:</strong> Derecho a recibir información clara.</li>
          <li><strong>Libertad:</strong> Derecho a elegir y ser tratado con dignidad.</li>
      </ul>
    `
  },
  {
    title: "Resolución de Conflictos",
    body: `
      <ul>
        <li><strong>Opciones:</strong> Se puede resolver en persona o online.</li>
        <li><strong>Proceso:</strong> Describe el problema, propone una solución y esperas respuesta en 10 días.
      </ul>
    `
  },
  {
    title: "Educación del Consumidor",
    body: `
        <p><strong>Objetivo:</strong> Hacer que los consumidores sean críticos y activos.</p>
    `
  },
  {
    title: "Registro Público de Infractores",
    body: `
        <p><strong>Función:</strong> Lista empresas sancionadas por violar derechos de los consumidores.</p>
    `
  },
  {
    title: "Ley 5574",
    body: `
        <ul>
            <li><strong>Protección:</strong> Asegura que los productos no representen riesgos.</li>
            <li><strong>Publicidad:</strong> Prohíbe la publicidad engañosa.</li>
        </ul>
    `
  },
  {
    title: "Ley 24240",
    body: `
        <ul>
            <li><strong>Derechos:</strong> Define derechos de los consumidores y obligaciones de los proveedores.</li>
            <li><strong>Resolución:</strong> Permite resolver conflictos sin ir a juicio.</li>
        </ul>
    `
  }
]

function rotateCube(cube) {
  // Secuencia de rotaciones en el orden deseado
  const rotations = [
    { x: 0, y: 0 },    // front (Derechos Básicos)
    { x: 0, y: 180 },  // back (Resolución de Conflictos)
    { x: 0, y: -90 },  // left (Educación del Consumidor)
    { x: 0, y: 90 },   // right (Registro Público de Infractores)
    { x: -90, y: 0 },  // top (Ley 5574)
    { x: 90, y: 0 }    // bottom (Ley 24240)
  ];


  // Aplicamos la rotación correspondiente a la cara actual
  const rotation = rotations[currentFace];
  cube.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

  //Actualizar contenido según la cara actual
  updateContent();

  // Incrementamos el índice para mostrar la siguiente cara en el próximo clic
  currentFace = (currentFace + 1) % rotations.length; // Regresa al inicio después de la última cara
}


function updateContent() {
  const contentDiv = document.getElementById('content');
  const currentContent = contents[currentFace];
  contentDiv.innerHTML = `${currentContent.body}`
}
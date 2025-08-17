const generateResult = () => {
  const subject = document.getElementById("subject").value;
  
  // Organizar el prompt en secciones
  const sections = subject.split(',').filter(s => s.trim());
  
  // Formatear cada sección
  const formattedSections = sections.map(s => s.trim())
    .filter(s => s.length > 0);
  
  // Combinar con palabras clave de calidad
  const qualityPrompt = "(high quality, photorealistic, masterpiece, best quality, ultra-detailed)";
  const result = formattedSections.join(", ") + ", " + qualityPrompt;
  
  // Mostrar resultado con formato
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<div class="prompt-result">${result}</div>`;
  
  // Mostrar longitud del prompt
  const promptLength = result.length;
  resultElement.innerHTML += `<div class="prompt-stats">Longitud del prompt: ${promptLength} caracteres</div>`;
};

// Previsualización en tiempo real
document.getElementById("subject").addEventListener("input", () => {
  const previewText = document.getElementById("subject").value;
  const previewElement = document.getElementById("preview");
  if (previewElement) {
    previewElement.textContent = previewText;
  }
});

const copyResult = async () => {
  const result = document.getElementById("result").textContent;
  
  try {
    await navigator.clipboard.writeText(result);
    // Use a modern notification instead of alert
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = '¡Copiado al portapapeles!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 2000);
  } catch (err) {
    console.error('Error al copiar:', err);
  }
};

function mostrarRespuesta(opcion) {
  var respuestaTextarea = document.getElementById('respuesta');
  respuestaTextarea.value = '' + opcion;
}

function copiarTexto() {
  var respuestaTextarea = document.getElementById('respuesta');
  respuestaTextarea.select();
  document.execCommand('copy');
}

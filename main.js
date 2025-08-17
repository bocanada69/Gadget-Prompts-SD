function generarPrompt() {
  const momento = document.getElementById('momento').value;
  const lugar = document.getElementById('lugar').value;
  const sujeto = document.getElementById('sujeto').value;
  const accion = document.getElementById('accion').value;
  const objetoSec = document.getElementById('objetoSec').value;

  let prompt = `${sujeto.charAt(0).toUpperCase() + sujeto.slice(1)}${accion ? ' ' + accion : ""} ${lugar} ${momento}${objetoSec ? ' ' + objetoSec : ""}, estilo cinematográfico hiperrealista, iluminación profesional, detalles ultra nítidos, composición de película, atmósfera envolvente, calidad 8K, profundidad de campo, realismo extremo.`;

  // Limpia espacios múltiples
  prompt = prompt.replace(/\s+/g, ' ').trim();
  document.getElementById('outputPrompt').textContent = prompt;
}

// Genera el prompt automáticamente al cambiar cualquier opción
['momento', 'lugar', 'sujeto', 'accion', 'objetoSec'].forEach(id => {
  document.getElementById(id).addEventListener('change', generarPrompt);
});

window.onload = generarPrompt;

function copyPrompt() {
  const btn = document.getElementById('copyBtn');
  const text = document.getElementById('outputPrompt').textContent;
  navigator.clipboard.writeText(text);
  btn.textContent = "¡Copiado!";
  setTimeout(() => btn.textContent = "Copiar Prompt", 1200);
}
const fs = require('fs');
const path = require('path');

const [,, promptName] = process.argv;

if (!promptName) {
  console.log('Debes ingresar el nombre del prompt. Ejemplo: node scripts/createPrompt.js mi-nuevo-prompt');
  process.exit(1);
}

const template = `---
title: ${promptName}
description: |
  Escribe aquí la descripción del prompt.
parameters:
  - name: ejemplo
    description: Parámetro de ejemplo
    type: string
---
`;

const dir = path.join(__dirname, '../prompts');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(path.join(dir, `${promptName}.md`), template);
console.log(`Prompt creado: prompts/${promptName}.md`);
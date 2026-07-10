const fs = require('fs');
const path = require('path');
const dir = './src/components';
fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    if (content.includes('import { motion')) {
      content = content.replace(/import\s*\{\s*motion(.*)\}\s*from\s*['"]motion\/react['"]/, 'import { m as motion$1} from \'motion/react\'');
      fs.writeFileSync(p, content);
      console.log('Updated', p);
    }
  }
});

import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ISU = '506332';
const DATA_DIR = '/data';

let filesCount = 0;
let dirsCount = 0;
let totalSize = 0;

async function statistics(dir) {
  let objects;
  try {
    objects = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const obj of objects) {
    const fullPath = path.join(dir, obj.name);

    if (obj.isDirectory()) {
      dirsCount++;
      await statistics(fullPath);
    } else if (obj.isFile()) {
      filesCount++;
      try {
        const stats = await stat(fullPath);
        totalSize += stats.size;
      } catch {}
    }
  }
}

await statistics(DATA_DIR);

process.stdout.write(`${ISU}-${filesCount}-${dirsCount}-${totalSize}\n`);
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outputPath = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
mkdirSync(dirname(outputPath), { recursive: true });
// Copy the original asset unchanged so every run produces identical bytes.
copyFileSync(new URL('./entry.png', import.meta.url), outputPath);

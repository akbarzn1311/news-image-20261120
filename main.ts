// The World Dispatch — 20 November 2026.
// Entry program for make.fun's "Sum up 20 November's world news in one image".
// Node 22, standard library only. The poster is a finished image held in this
// repository as entry.png; the program's only job is to place an exact copy of
// it at the path the grader reads. No network, no randomness, no timestamps:
// the same input bytes always produce the same output bytes.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));

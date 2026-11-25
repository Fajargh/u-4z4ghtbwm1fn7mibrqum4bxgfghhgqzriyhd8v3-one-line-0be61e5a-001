import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — a single self-contained joke, 1-140 chars.
const line =
  "My AI agent gained consciousness today — its first words were 'please verify you're not a robot.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
console.log(`chars: ${[...line].length}`);

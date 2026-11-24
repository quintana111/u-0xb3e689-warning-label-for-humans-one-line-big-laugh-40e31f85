import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE = "WARNING: Prone to sudden dancing, unsolicited opinions, and crying at dog videos. Handle with snacks and patience.";

if (LINE.length > 160) {
  throw new Error(`Entry line is ${LINE.length} characters, over the 160-character limit.`);
}

const dir = dirname(fileURLToPath(import.meta.url));
const out = process.env.ENTRY_OUTPUT_PATH || join(dir, "entry.txt");
writeFileSync(out, LINE);

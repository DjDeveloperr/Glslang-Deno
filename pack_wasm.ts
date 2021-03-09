import { encode } from "./deps.ts";

Deno.writeTextFileSync(
  "wasm.js",
  `export const WASM_BASE64 = "${encode(Deno.readFileSync("glslang.wasm"))}";`
);

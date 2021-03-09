import glslang from "./mod.ts";

console.log(
  glslang.compileGLSL(
    `
#version 450

void main() {
  // ...
}
`,
    "compute",
    false
  )
);

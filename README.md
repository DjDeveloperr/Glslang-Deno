# Glslang Deno

Compile GLSL to SPIR-V binary.

This is a port of [@webgpu/glslang for Node](https://www.npmjs.com/package/@webgpu/glslang). 
All credit goes to them.

## Usage

```ts
import glslang from "https://deno.land/x/glslang/mod.ts";

const glslCode = `
#version 450

void main() {
  // ...
}
`;

const spirvBinary = glslang.compileGLSL(glslCode, "compute", false);
```

## Contributing 

You're always welcome to contribute!

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr

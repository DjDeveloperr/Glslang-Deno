import glslangInit from "./glslang.js";
import { Glslang } from "./types.ts";

const glslang: Glslang = await glslangInit();

export default glslang;
export { glslang };
export * from "./types.ts";

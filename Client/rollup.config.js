import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
    image(), // add the image plugin here
  ],
  external: ["react", "react-dom", "react-router-dom", "jotai"],
};

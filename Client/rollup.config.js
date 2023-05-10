import babel from "@rollup/plugin-babel";

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
  ],
  external: ["react", "react-dom", "react-router-dom", "jotai"],
};

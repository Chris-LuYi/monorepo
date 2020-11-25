export default {
  esm: {
    type: "rollup",
    // mjs: true,
  },
  cjs: "rollup",
  umd: {
    name: "foo",
    minFile: false,
    globals: {
      react: "React",
    },
  },
};

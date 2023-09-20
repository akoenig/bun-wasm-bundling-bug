import Pastel from "pastel";

const app = new Pastel({
  importMeta: import.meta,
  name: "bun-wasm-bundling-bug",
});

await app.run();

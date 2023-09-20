# bun-wasm-bundling-bug

Related Issue [oven-sh/bun#2034](https://github.com/oven-sh/bun/issues/2034).

Tested on `v1.0.3 (canary - 37edd5a6e389265738e89265bcbdf2999cb81a49)`.

```bash
bun install
```

Bundle via:

```bash
$ bun build --compile ./src/index.ts --outfile my-app
  [72ms]  bundle  274 modules
  [55ms] compile  my-app

$ ./my-app

error: Cannot find module "./yoga.wasm" from "compiled://root/my-app"
```

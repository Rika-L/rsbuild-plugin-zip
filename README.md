# rsbuild-plugin-zip

Zip plugin for Rsbuild.

## Usage

Install:

```bash
pnpm add rsbuild-plugin-zip -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { RsbuildPluginZip } from "rsbuild-plugin-zip";

export default {
  plugins: [RsbuildPluginZip({
    name: "your-project-name",
    env: "development"
  })],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginExample({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).

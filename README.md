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

### RsbuildPluginScanOptions

The `RsbuildPluginScanOptions` interface defines the configuration options for the plugin.

- **name** (string, optional)
  - Project name
  - Type: `string`
  - Default: `'dist'`
  - Example:

    ```js
    pluginExample({
      name: "my-project",
    });
    ```

- **enabled** (boolean, optional)
  - Whether to enable the plugin, defaults to `true`
  - Type: `boolean`
  - Default: `true`
  - Example:

    ```js
    pluginExample({
      enabled: false,
    });
    ```

- **env** (string, optional)
  - Environment name
  - Type: `string`
  - Default: `'development'`
  - Example:

    ```js
    pluginExample({
      env: "production",
    });
    ```

- **sourceDir** (string, optional)
  - The directory of the source files for packaging
  - Type: `string`
  - Default: `'dist'`
  - Example:

    ```js
    pluginExample({
      sourceDir: "src",
    });
    ```

- **outputDir** (string, optional)
  - The output directory for the packaged files
  - Type: `string`
  - Default: `'zip'`
  - Example:

    ```js
    pluginExample({
      outputDir: "release",
    });
    ```

You can use these options to configure your Rsbuild plugin. Here is an example of how to use these options:

```js
import { RsbuildPluginZip } from './path-to-your-plugin';

RsbuildPluginZip({
  name: "my-project",
  enabled: true,
  env: "production",
  sourceDir: "src",
  outputDir: "release",
});

## License

[MIT](./LICENSE).

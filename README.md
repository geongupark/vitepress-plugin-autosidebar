# vitepress-plugin-autosidebar
Auto sidebar for vitepress v2

![logo_long](./logo.png)
***
[![npm version](https://img.shields.io/npm/v/@geongu.park/vitepress-plugin-autosidebar?color=#4fc08d&style=flat-square')](https://www.npmjs.com/package/@geongu.park/vitepress-plugin-autosidebar)
![License](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)
[![Build](https://github.com/geongupark/vitepress-plugin-autosidebar/workflows/Deploy/badge.svg)](https://github.com/geongupark/vitepress-plugin-autosidebar/actions/workflows/deploy.yml)
[![Documentation](https://img.shields.io/badge/ref-Documentation-blue)](https://github.com/geongupark/vitepress-plugin-autosidebar/blob/main/README.md)
![lastcommit](https://img.shields.io/github/last-commit/geongupark/vitepress-plugin-autosidebar)
* The `vitepress-plugin-autosidebar` framework makes it easy to generate sidebar in vitepress v2.

## Installation

Install the package using npm:

```shell
npm install @geongu.park/vitepress-plugin-autosidebar -D
```

## Usage
* simple use
```ts
const rootPath = __dirname;
const directoryPath = '';
const excludeFileName = ['README'];

const result = await getSidebar(rootPath, directoryPath, excludeFileName);
```

* for config.js
```js
...
import { getSidebar } from '@geongu.park/vitepress-plugin-autosidebar'
const path = require('path');

// https://vitepress.dev/reference/site-config
export default defineConfig(
  async () => {
    return {
      ...
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'TIL', link: '/til/' },
          { text: 'LAB', link: '/lab/' }
        ],
        sidebar: {
          '/til/': [
            {
              text: 'TIL',
              link: '/til/',
              items: await getSidebar(path.join(__dirname, '/../'), '/til/'),
            }
          ],
        },
        ...
      }
    };
  }
  )
```

## API
* `getSidebar(rootPath: string, directoryPath: string, excludeFileName?: string[]): Promise<{ text: string, link: string }[]>`
  * Parameters
    * `rootPath` (required): The root path of the directory.
    * `directoryPath` (required): The directory path from the root path.
    * `excludeFileName` (optional): An array of file names to exclude from the sidebar (default: ['index']).

  * Returns  
    a promise that resolves to an array of sidebar items. Each item has a text property representing the file name without the extension and a link property representing the file path.

## License
This project is licensed under the MIT License.

## Support
If you encounter any issues or have any questions, feel free to open an issue in the issue tracker.

## Author
geongu.park

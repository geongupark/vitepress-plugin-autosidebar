# vitepress-plugin-autosidebar
Auto sidebar for vitepress v2

![logo_long]()
***
[![npm version](https://badge.fury.io/js/my-awesome-package.svg)](https://badge.fury.io/js/my-awesome-package)
![License](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)
[![Documentation](https://img.shields.io/badge/ref-Documentation-blue)](https://github.com/geongupark/vitepress-plugin-autosidebar/blob/main/README.md)
![lastcommit](https://img.shields.io/github/last-commit/geongupark/vitepress-plugin-autosidebar)
* The `vitepress-plugin-autosidebar` framework makes it easy to generate sidebar in vitepress v2.

## Installation

Install the package using npm:

```shell
npm install my-awesome-package
```

## Usage

```ts
const rootPath = __dirname;
const directoryPath = '';
const excludeFileName = ['README'];

const result = await getSidebar(rootPath, directoryPath, excludeFileName);
```

## API
* getSidebar(rootPath: string, directoryPath: string, excludeFileName?: string[]): Promise<{ text: string, link: string }[]>
  * Parameters
    * rootPath (required): The root path of the directory.
    * directoryPath (required): The directory path from the root path.
    * excludeFileName (optional): An array of file names to exclude from the sidebar (default: ['index']).

  * Returns  
    a promise that resolves to an array of sidebar items. Each item has a text property representing the file name without the extension and a link property representing the file path.

## License
This project is licensed under the MIT License.

## Support
If you encounter any issues or have any questions, feel free to open an issue in the issue tracker.

## Author
geongu.park

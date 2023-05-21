import * as fs from 'fs';
import * as path from 'path';

function getSidebar(rootPath: string, directoryPath: string, excludeFileName: string[] = ['index']): Promise<{ text: string, link: string }[]> {
  const extension = '.md';
  const fullPath = path.join(rootPath, directoryPath);

  return new Promise((resolve, reject) => {
    fs.readdir(fullPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const filteredFiles = files.filter(file => path.extname(file) === extension && !excludeFileName.includes(path.basename(file, extension)));
        const result = filteredFiles.map(file => ({
          text: path.basename(file, extension),
          link: path.join(directoryPath, path.basename(file, extension)).replaceAll('\\', '/')
        }));
        console.log(result);
        resolve(result);
      }
    });
  });
}

export { getSidebar };
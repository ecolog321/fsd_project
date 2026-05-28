import path from 'path'
import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, "..", "..", "src", "shared", "ui");
const sharedDir = project.getDirectory(uiPath);
const componentDirs = sharedDir?.getDirectories();

function isAbsolute(value:string) {
    const layers = ['app', 'shared', 'entities','features', 'widgets','pages'];
    return layers.some(layer => value.startsWith(layer));

    componentDirs?.forEach((directory) =>{
        console.log(directory.getBaseName())
    })
}

/* files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
   
    if (isAbsolute(value)) {
        importDeclaration.setModuleSpecifier(`@/${value}`)
    }

  });
});
 */
project.save();
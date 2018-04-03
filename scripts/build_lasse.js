// https://medium.com/douglas-matoso-english/build-static-site-generator-nodejs-8969ebe34b22
const fse = require('fs-extra')
const path = require('path')
const { promisify } = require('util')
// Nodes util.promisify convert all callback - based functions to promise based.
// It makes our code shorter, cleaner and easier to read.

const ejsRenderFile = promisify(require('ejs').renderFile)

const globP = promisify(require('glob')) // read directory path like windows does
// Recursively read a directory, returning an array with all files that match an specified pattern.

const pathPages = './views/_pages'   // source of our files
const pathDest = './public' // destination for our rendered files

fse.emptyDirSync(pathDest); // delete content of destination folder
fse.copySync('css', `${pathDest}/css`); // copy css to dest folder
fse.copySync('img', `${pathDest}/img`); // copy img to dest folder
fse.copySync('js', `${pathDest}/js`); // copy img to dest folder

// read page templates
globP('**/*.ejs', { cwd: pathPages })
    .then(function(files) {
        files.forEach(function(file) {
            const fileData = path.parse(file)
            const destPath = path.join(pathDest, fileData.name)

            ejsRenderFile(`${pathPages}/${file}`, Object.assign({}))
                .then(function(pageContent){
                    fse.writeFile(`${pathDest}/${fileData.name}.html`, pageContent);
                })
        })
    })
    
    .catch(function (error) {
        console.log("error");
    });


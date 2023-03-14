// const path = require('path')
// const i18nPath = './src/i18n'
// const fs = require('fs')

// const getDirectories = source =>
//   fs.readdirSync(source, { withFileTypes: true })
//     .filter(dirent => dirent.isDirectory())
//     .map(dirent => dirent.name)

// /**
//  * Get all i18n index files setup in the application
//  */
// function getI18nAvailableLanguages () {
//   const dicts = getDirectories(i18nPath)

//   console.log('1. dicts: ', dicts)

//   for (const d in dicts) {
//     const languageFile = `${i18nPath}/${dicts[d]}/index.js`

//     console.log('2. languageCfg: ', languageFile)

//     validateContentI18n(languageFile)
//   }
// }

// /**
//  * Validate contents
//  * @param {String} file Path to language index file
//  */
// function validateContentI18n (file) {
//   const languageFile = file
//   fs.readFile(languageFile, { encoding: 'utf-8' }, function (err, data) {
//     if (err) console.log('3. Error when reading content file: ', err)
//     else {
//       data = data.replace('export default {', '')
//       const content = data.substring(0, data.lastIndexOf('}'))
//       console.log('3. content from languageFile: ', content)
//       console.log('4. type of content: ', typeof (content))

//       const parsedJson = JSON.stringify(content, true)
//       console.log('5. type of parsedJson: ', typeof (parsedJson))

//       const obj = JSON.parse(parsedJson)
//       console.log('6. type of obj: ', typeof (obj))
//       console.log('7. obj: ', obj.view.home)
//     }
//   })
// }

// getI18nAvailableLanguages()

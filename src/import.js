const { importFolder } = require('kactus-cli')
const { checkForFile } = require('./common')

function getDocumentFolderPath (path) {
  return path.replace('.sketch', '')
}

export default function (context) {
  if (!checkForFile(context)) { return }
  importFolder(
    getDocumentFolderPath(context.document.fileURL().path())
  )
}

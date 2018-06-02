import {
  checkForFile,
  executeSafely,
  exec
} from './common'

function getDocumentFolderPath (path) {
  return path.replace('.sketch', '')
}

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, function () {
    const folderPath = getDocumentFolderPath(context.document.fileURL().path())
    exec(`kactus import ${folderPath}`)
  })
}

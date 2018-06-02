import { exec } from './common'

function getDocumentFolderPath (path) {
  return path.replace('.sketch', '')
}

export function parse (context) {
  const filePath = context.document.fileURL().path()
  exec(context, `kactus parse "${filePath}"`)
}

export function importFolder (context) {
  const folderPath = getDocumentFolderPath(context.document.fileURL().path())
  exec(context, `kactus import "${folderPath}"`)
}

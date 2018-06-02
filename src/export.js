const { parseFile } = require('kactus-cli')
const { checkForFile } = require('./common')

export default function (context) {
  if (!checkForFile(context)) { return }
  parseFile(context.document.fileURL().path())
}

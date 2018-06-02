import {
  checkForFile,
  executeSafely,
  exec
} from './common'

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, function () {
    const filePath = context.document.fileURL().path()
    exec(context, `kactus parse ${filePath}`)
  })
}

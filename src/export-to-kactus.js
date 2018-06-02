import {
  checkForFile,
  executeSafely,
  exec
} from './common'

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, function () {
    exec(`kactus parse ${context.document.fileURL().path()}`)
  })
}

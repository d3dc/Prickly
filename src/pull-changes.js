// Pull
import importToKactus from './import-to-kactus'
import refreshFiles from './refresh-files'

import {
  checkForFile,
  executeSafely,
  exec
} from './common'

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, function () {
    exec(context, 'git pull -q')
    importToKactus(context)
    context.document.showMessage('Changes pulled')
    refreshFiles()
  })
}

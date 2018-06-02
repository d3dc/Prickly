// Pull
import { importFolder } from './kactus'
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
    importFolder(context)
    context.document.showMessage('Changes pulled')
    refreshFiles(context)
  })
}

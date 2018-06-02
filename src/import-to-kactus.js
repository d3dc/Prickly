import {
  checkForFile,
  executeSafely
} from './common'

import { importFolder } from './kactus'
import refreshFiles from './refresh-files'

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, function () {
    importFolder(context)
    context.document.showMessage('Changes imported')
    refreshFiles(context)
  })
}

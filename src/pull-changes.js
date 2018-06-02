// Pull
import import from './import'
import refresh from './refresh-files'

import {
  checkForFile,
  executeSafely,
  exec
} from './common'

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, function () {
    exec(context, 'git pull -q')
    import(context)
    context.document.showMessage('Changes pulled')
    refresh()
  })
}

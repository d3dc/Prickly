import {
  checkForFile,
  executeSafely
} from './common'

import { parse } from './kactus'

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, () => {
    parse(context)
    context.document.showMessage('Exported to Kactus')
  })
}

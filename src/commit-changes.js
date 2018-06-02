// Commits all working file to git (cmd alt ctrl c)
import { parse } from './kactus'
import {
  getCurrentBranch,
  checkForFile,
  executeSafely,
  execAll,
  exec,
  createInputWithCheckbox
} from './common'

export default function (context) {
  if (!checkForFile(context)) { return }

  executeSafely(context, function () {
    const currentBranch = getCurrentBranch(context)
    const input = createInputWithCheckbox(
      context,
      `Commit to "${currentBranch}"`,
      'Push to upstream after commit',
      true,
      'Commit'
    )

    if (input.responseCode == 1000 && input.message != null) {
      const add =
        `git add --all`

      const commit =
        `git commit -m "${input.message.split('"').join('\\"')}"`

      const push =
        'git push'

      parse(context)
      context.document.showMessage(exec(context, 'pwd'))
      const result = execAll(context, [
        add,
        commit,
        input.checked ? push : undefined
      ])
      context.document.showMessage(result.split('\n').join(' '))
      context.document.showMessage('Changes commited')
    }
  })
}

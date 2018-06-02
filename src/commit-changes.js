// Commits all working file to git (cmd alt ctrl c)
import export from './export'
import {
  getCurrentBranch,
  checkForFile,
  executeSafely,
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
      export(context)
      const commitCmd =
        `git commit -m "${input.message.split('"').join('\\"')}" -a`

      const pushCmd =
        'git push'

      const result = exec(context, `${commitCmd};${input.check ? pushCmd : ''};exit`)

      context.document.showMessage(result.split('\n').join(' '))
    }
  })
}

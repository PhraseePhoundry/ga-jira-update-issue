const Jira = require('./common/net/Jira')

module.exports = class {
  constructor ({ githubEvent, argv, config }) {
    this.Jira = new Jira({
      baseUrl: config.baseUrl,
      token: config.token,
      email: config.email,
    })

    this.config = config
    this.argv = argv
    this.githubEvent = githubEvent
  }

  async execute () {
    const issueIds = this.argv.issue || this.config.issue || null
    const newTag = this.argv.newTag || null

    console.log('--------')
    console.log(issueIds)

    if (issueIds && newTag) {
      for (const issueId of issueIds) {
        console.log('********')
        console.log(issueId)
        await this.Jira.updateIssue(issueId, newTag)
      }
    } else {
      console.log('Unable to update Jira: issue ID or service version missing.')
      console.log(`Issue ID: ${String(issueIds)}`)
      console.log(`New version: ${newTag}`)
    }

    return {}
  }
}

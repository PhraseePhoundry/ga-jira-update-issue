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
    const issueId = this.argv.issue || this.config.issue || null
    const newTag = this.argv.newTag || null

    if (issueId && newTag) {
      await this.Jira.updateIssue(issueId, newTag)
    } else {
      console.log('Unable to update Jira: issue ID or service version missing.')
      console.log(`Issue ID: ${issueId}`)
      console.log(`New version: ${newTag}`)
    }

    return {}
  }
}

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

    console.log(`Updating issue: ${issueId}`)
    // await this.Jira.addComment(issueId, { body: comment })
    console.log(await this.Jira.getIssue(issueId))

    return {}
  }
}

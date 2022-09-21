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

    // console.log(fieldInfo.fields.schema)
    // console.log(fieldInfo.fields.operations)
    // console.log(fieldInfo.fields.allowedValues)

    await this.Jira.updateIssue(issueId, newTag)

    return {}
  }
}

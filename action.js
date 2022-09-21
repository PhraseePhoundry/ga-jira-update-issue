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
    // const newTag = this.argv.newTag || null

    // console.log(`Updating ${issueId}`)
    // console.log('Getting project details')
    // console.log(await this.Jira.getAllFields())
    // console.log('Getting project issues details')
    // console.log(await this.Jira.getProjectIssues())
    // console.log('Getting issue details')
    // console.log(await this.Jira.getIssue(issueId))

    const fieldInfo = await this.Jira.getFieldInfo(issueId)

    console.log(fieldInfo)
    console.log(fieldInfo.fields)
    // console.log(fieldInfo.fields.schema)
    // console.log(fieldInfo.fields.operations)
    // console.log(fieldInfo.fields.allowedValues)

    // console.log(await this.Jira.updateIssue(issueId, newTag))

    return {}
  }
}

# ga-jira-update-issue

This repository contains a GitHub Action for updating a Jira ticket's `Service version` field with a given service version number. Code in this repository has been heavily borrowed from a fork of the Atlassian [`gajira-comment`](https://github.com/atlassian/gajira-comment) action.

> ❗ Important note: this repository is **public**, as is required by GitHub when working with reusable actions and workflows. Care should be taken when committing or reviewing code in this respository to ensure sensitive information is not leaked.

# Usage

## Inputs

This action ingests both a Jira ticket ID, and a service version number. The Jira ticket ID is not a strict requirement for this action - if no Jira ticket ID is provided, the action will complete gracefully with no attempt made to update a Jira ticket. A service version number is a strict requirement for this action, and will cause an error if not present.

## Outputs

This action updates the `Service version` field in a given Jira ticket, populating it with the provided service version number.
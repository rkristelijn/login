# GitLab CLI (glab) Reference Guide

This document contains successful GitLab CLI commands and their example outputs for reference.

## Authentication & Setup

### Check Authentication Status
```bash
glab auth status
```

**Example Output:**
```
gitlab.com
  ✓ Logged in to gitlab.com as remi.kristelijn (/Users/nlrxk0145/.config/glab-cli/config.yml)
  ✓ Git operations for gitlab.com configured to use ssh protocol.
  ✓ API calls for gitlab.com are made over https protocol.
  ✓ REST API Endpoint: https://gitlab.com/api/v4/
  ✓ GraphQL Endpoint: https://gitlab.com/api/graphql/
  ✓ Token: **************************
```

### Login to GitLab
```bash
glab auth login
```

## Merge Requests

### View Merge Request Details
```bash
glab mr view 350 --repo theapsgroup/agility/frontend-apps
```

**Example Output:**
```
title:	feat(agility-kit): add button bar https://app.clickup.com/t/8699f9f9b
state:	open
author:	remi.kristelijn
labels:	
assignees:	David.Zarandi.Aps
reviewers:	
comments:	10
number:	350
url:	https://gitlab.com/theapsgroup/agility/frontend-apps/-/merge_requests/350
--
# Small description

To standardize the buttons on wizards and modals

# Link to work item

https://app.clickup.com/t/8699f9f9b

# Link to documentation

https://theapsgroup.atlassian.net/wiki/spaces/F/pages/22525378620/Buttonbar

# Demo / screenshot

https://350.internal-demo-application.pages.dev/en
```

### List Merge Requests
```bash
glab mr list --repo OWNER/REPO
glab mr list --state opened --repo OWNER/REPO
glab mr list --state merged --repo OWNER/REPO
glab mr list --assignee @me --repo OWNER/REPO
```

### Create Merge Request
```bash
glab mr create --title "Your MR Title" --description "Description" --repo OWNER/REPO
```

### Merge Request Operations
```bash
# Approve MR
glab mr approve 123 --repo OWNER/REPO

# Close MR
glab mr close 123 --repo OWNER/REPO

# Reopen MR
glab mr reopen 123 --repo OWNER/REPO
```

## CI/CD Pipelines

### List Pipelines
```bash
glab ci list --repo theapsgroup/agility/frontend-apps --source merge_request_event --per-page 10
```

**Example Output:**
```
Showing 10 pipelines on theapsgroup/agility/frontend-apps. (Page 1)

State	IID	Ref	Created
(failed) • #1969373447	(#4807)	refs/merge-requests/386/head	(about 38 minutes ago)
(failed) • #1969340835	(#4791)	refs/merge-requests/386/head	(about 56 minutes ago)
(canceled) • #1967600297	(#4747)	refs/merge-requests/350/head	(about 18 hours ago)
(failed) • #1967597465	(#4746)	refs/merge-requests/383/head	(about 18 hours ago)
(success) • #1967245741	(#4710)	refs/merge-requests/385/head	(about 20 hours ago)
```

### Pipeline Filtering Options
```bash
# List pipelines by status
glab ci list --repo OWNER/REPO --status running
glab ci list --repo OWNER/REPO --status failed
glab ci list --repo OWNER/REPO --status success
glab ci list --repo OWNER/REPO --status canceled

# List pipelines by source
glab ci list --repo OWNER/REPO --source merge_request_event
glab ci list --repo OWNER/REPO --source push
glab ci list --repo OWNER/REPO --source trigger

# List pipelines by user
glab ci list --repo OWNER/REPO --username your-username

# List recent pipelines
glab ci list --repo OWNER/REPO --per-page 20
```

### Pipeline Status
```bash
# Get current branch pipeline status
glab ci status --repo OWNER/REPO

# Get specific branch pipeline status
glab ci status --branch main --repo OWNER/REPO

# Live monitoring
glab ci status --live --repo OWNER/REPO

# Compact view
glab ci status --compact --repo OWNER/REPO
```

### Pipeline Operations
```bash
# View pipeline details
glab ci view PIPELINE_ID --repo OWNER/REPO

# Cancel pipeline
glab ci cancel PIPELINE_ID --repo OWNER/REPO

# Retry pipeline
glab ci retry PIPELINE_ID --repo OWNER/REPO

# Run new pipeline
glab ci run --repo OWNER/REPO

# Trace job logs
glab ci trace JOB_ID --repo OWNER/REPO
```

## Issues

### List Issues
```bash
glab issue list --repo OWNER/REPO
glab issue list --state opened --repo OWNER/REPO
glab issue list --assignee @me --repo OWNER/REPO
glab issue list --author @me --repo OWNER/REPO
```

### View Issue
```bash
glab issue view 123 --repo OWNER/REPO
```

### Create Issue
```bash
glab issue create --title "Issue Title" --description "Description" --repo OWNER/REPO
```

### Issue Operations
```bash
# Close issue
glab issue close 123 --repo OWNER/REPO

# Reopen issue
glab issue reopen 123 --repo OWNER/REPO
```

## Repository Operations

### Clone Repository
```bash
glab repo clone OWNER/REPO
glab repo clone GROUP/NAMESPACE/REPO
```

### Fork Repository
```bash
glab repo fork OWNER/REPO
```

### Repository Information
```bash
glab repo view OWNER/REPO
```

## Variables and Configuration

### List Variables
```bash
glab variable list --repo OWNER/REPO
```

### Set Variable
```bash
glab variable set VAR_NAME "value" --repo OWNER/REPO
```

## Useful Flags and Options

### Global Flags
- `-R, --repo OWNER/REPO` - Specify repository
- `--help` - Show help for any command
- `-o, --output json` - Output in JSON format (where supported)

### Common Repository Formats
- `OWNER/REPO` - For simple repositories
- `GROUP/NAMESPACE/REPO` - For nested groups
- Full URL: `https://gitlab.com/group/repo`
- Git URL: `git@gitlab.com:group/repo.git`

## Pipeline Status Meanings

- **running** - Pipeline is currently executing
- **pending** - Pipeline is waiting to start
- **success** - Pipeline completed successfully
- **failed** - Pipeline failed
- **canceled** - Pipeline was manually canceled
- **skipped** - Pipeline was skipped
- **created** - Pipeline was created but not started
- **manual** - Pipeline requires manual action
- **waiting_for_resource** - Pipeline is waiting for resources
- **preparing** - Pipeline is being prepared
- **scheduled** - Pipeline is scheduled to run

## Pipeline Sources

- **merge_request_event** - Triggered by merge request
- **push** - Triggered by git push
- **trigger** - Triggered by API or trigger token
- **parent_pipeline** - Child pipeline
- **pipeline** - Manual pipeline run

## Tips and Best Practices

1. **Use repository flag**: Always specify `--repo OWNER/REPO` when not in a GitLab project directory
2. **Pagination**: Use `--per-page` to control output size for list commands
3. **Filtering**: Use status, source, and user filters to narrow down results
4. **Live monitoring**: Use `--live` flag for real-time pipeline monitoring
5. **JSON output**: Use `-o json` for programmatic processing
6. **Help system**: Use `glab COMMAND --help` for detailed command information

## Common Command Patterns

```bash
# Check MR and its pipeline status
glab mr view MR_NUMBER --repo OWNER/REPO
glab ci list --repo OWNER/REPO --source merge_request_event --per-page 5

# Monitor current pipeline
glab ci status --live --repo OWNER/REPO

# Quick pipeline overview
glab ci list --repo OWNER/REPO --per-page 10 --status running

# Check failed pipelines
glab ci list --repo OWNER/REPO --status failed --per-page 10
```

## Error Handling

### Common Errors and Solutions

1. **Authentication Error**: Run `glab auth login`
2. **Repository Not Found**: Check repository path and permissions
3. **Unknown Flag**: Use `--help` to see available options
4. **404 Not Found**: Verify resource exists and you have access

---

*Generated on: August 6, 2025*
*GitLab CLI Version: Check with `glab version`*

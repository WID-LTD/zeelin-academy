# Welcome Mr. T & Success to the Zeelin Academy Dev Team!

We are thrilled to welcome **Mr. T** and **Success** to the development team! 🎉

This repository (specifically the 	est branch) is your dedicated space to learn and practice Git and GitHub workflows. Everything here is safe to experiment with.

---

## GitHub Terminal Guide for Beginners

### Prerequisites
- Git installed on your machine
- SSH key configured and added to your GitHub account
- Access to the WID-LTD/zeelin-academy repository

---

### 1. Cloning a Repository
Cloning downloads a remote repository to your local machine.

`ash
# Clone the repository
git clone git@github.com:WID-LTD/zeelin-academy.git

# Navigate into the project folder
cd zeelin-academy

# Clone a specific branch
git clone --branch test git@github.com:WID-LTD/zeelin-academy.git
`

---

### 2. Switching Branches
Branches let you work on different features independently without affecting the main codebase.

`ash
# List all branches (local and remote)
git branch -a

# Switch to an existing branch
git checkout test

# Create and switch to a new branch
git checkout -b my-feature-branch
`

---

### 3. Checking Status
See what files have been modified, added, or are staged for commit.

`ash
git status
`

---

### 4. Pulling Latest Changes
Always pull the latest changes from the remote before starting work.

`ash
# Pull the latest changes for your current branch
git pull

# Pull from a specific remote branch
git pull origin test
`

---

### 5. Staging and Committing
Stage changes you want to save, then commit them with a message.

`ash
# Stage a specific file
git add filename.txt

# Stage all changed files
git add .

# Commit with a descriptive message
git commit -m "Brief description of what was changed"
`

---

### 6. Pushing Changes
Upload your commits to the remote repository.

`ash
# Push to the remote branch you are on
git push

# Push to a specific remote branch
git push origin test

# Force push (use with caution — overwrites remote history)
git push --force origin test
`

---

### 7. Creating a Pull Request (PR)
A PR lets you propose changes from one branch to another (e.g., from eature-branch into 	est).

#### Using GitHub CLI:
`ash
# Create a PR
gh pr create --base test --head my-feature-branch --title "My feature title" --body "Description of changes"

# View open PRs
gh pr list

# View PR details
gh pr view <PR-number>
`

#### On GitHub.com:
1. Push your feature branch: git push origin my-feature-branch
2. Go to https://github.com/WID-LTD/zeelin-academy
3. Click **"Compare & pull request"**
4. Set base = 	est, compare = my-feature-branch
5. Add a title and description
6. Click **"Create pull request"**

---

### 8. Reviewing and Merging a PR

`ash
# Checkout the target branch
git checkout test

# Pull latest
git pull

# Merge the feature branch
git merge my-feature-branch

# Push the merged changes
git push
`

#### Merge via GitHub CLI:
`ash
gh pr merge <PR-number> --merge
`

#### Merge on GitHub.com:
1. Open the PR on GitHub
2. Click **"Merge pull request"**
3. Click **"Confirm merge"**

---

### 9. Quick Reference

| Command | Description |
|---|---|
| git clone <url> | Download a repo |
| git checkout -b <name> | Create + switch to new branch |
| git add . | Stage all changes |
| git commit -m "msg" | Commit staged changes |
| git push | Upload commits |
| git pull | Download latest commits |
| git status | Check file status |
| git branch -a | List all branches |
| gh pr create | Create a pull request |
| gh pr merge <#> | Merge a pull request |

---

### 10. Best Practices

1. **Pull before you push** — always run git pull first to avoid conflicts.
2. **Write clear commit messages** — describe *what* and *why*, not just *that* you changed something.
3. **Use branches** — never commit directly to main or 	est; create a feature branch instead.
4. **Keep commits small and focused** — one logical change per commit.
5. **Review your own diff** before committing or creating a PR.

---

Happy coding, Mr. T & Success! 🚀


# Git/GitHub Collaborative Workflow

## Initial Setup (done once by one teammate)

### Create Local Git Repo

- `cd` into the directory you want to turn into a repository
- `git init`, `git add .`, `git commit -m "first commit"` to initialize the local Git repo

### Create the GitHub repo and connect it to the local Git repo

- Go to GitHub and create a new repository
  - Your personal account should be the owner
  - Make sure it is public
  - Copy the "_…or push an existing repository from the command line_" commands and run them in your local Git repo directory

### Create a `dev` branch to add a layer of protection for `main`

- In your local Git repo, create `dev` branch (`git checkout -b dev`) and push it to GitHub (`git push origin dev`). From now on, feature branches should merge into `dev`, and only `dev` should merge into `main`

### Add branch protections on GitHub

- Protect `main` (default) and `dev`
- Block force pushes
- Require a pull request before merging (0 or 1 approvals depending on group consensus)

### Invite other Group members as collaborators

## Collaborator setup (done once by all other teammates)

- Click on the green code button, and copy the SSH link (e.g. `git@github.com:<username>/<repo-name>.git` )
- Go to the parent directory you want this in
  - ideally a folder with your other bootcamp work
  - be careful not to nest this repo inside of another repo
- In that directory, run `git clone <ssh_uri>`, then checkout into `dev` (`git checkout -b dev`)
- Run `git pull origin dev` to ensure the branch is up-to-date

## Collaborative workflow

- From the `dev` branch: checkout into new feature branch (`git checkout -b feature/your-new-feature`) and start working (make sure to commit and push anytime you'd like to save your work)
- Continue working in your `feature` branch
  - make sure to regularly commit your work (`git add .`, `git commit -m "descriptive message"`, `git push origin <name_of_your_branch>` )
- Once the feature is finished, open a Pull Request (PR) on GitHub
  make sure the "base" is `dev` and "compare" is your branch
  - If there are merge conflicts:
    - On your local repo, checkout into `dev` (`git checkout dev`)
    - make sure it is up-to-date with the remote version (`git pull origin dev`)
    - checkout back into your branch (`git checkout <your_feature_branch>` )
    - merge dev into your branch (`git merge dev` )
    - resolve all conflicts with the VS Code Merge Conflict Editor
    - push your work again (this will also update the PR)

    - A team member will review the request, and approve it if all is well.
      - If changes are needed (i.e. Code was accidentally deleted when resolving a merge conflict), communicate those, make the needed changes, and open a new PR (Pull Request)
    - Once the PR is merged, inform all teammates. Everyone should then:
      - commit the work in their current branch and push (git add ., git commit -m "descriptive message", git push origin <name_of_your_feature_branch>)
      - checkout into `dev` (`git checkout dev`) and pull the latest changes (`git pull origin dev`)
      - checkout back into their feature branch (`git checkout <name_of_your_feature_branch>`)
      - merge `dev` into their branch (`git merge dev`) and resolve merge conflicts as needed

## Move code into production

- Once a large milestone has been reached, and tested in `dev`, open a PR with "base" `main` and "compare" `dev`
- Merge the Pull Request (there should be no merge conflicts, but if there are resolve them locally with VS Code)
- Deploy from `main` using GitHub Pages

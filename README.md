# Sami Safatli

This project copies the main function of Twitter. So the use can create and post a new Tweet.

## Setup the project

- Yarn  

### Running:

- `yarn dev`

### Questions about the application

- Should the user see his posts and quotes whenever he filters the feed to see the following?
- Can a user like and dislike the same post?
- Should the UI be different whenever the user quote or reply?
- How many users will be using this application?
- Will the application add more features in the future?
- Should the user be able to change his username?
  
### How to solve
The user will not be able to like and dislike at the same time.
The files and logic structure was developed so it can get new features in the future.
The user should be able to change his username, but not other data like joinedDate.

# Critique

## Tech debits:
- Refactor the code
    - Structure error handling
    - Define the status code correct for each case of response
    - Add unit tests and e2e tests to cover all components
    - Add documentation as the project grow.

- Add new functions:
    - follow and unfollow other users.
    - See other users profile.
    - Add the toggle feature.

Performance:
    - Save the posts in the local storage so the data will not be lost whenever the user reloads the page.


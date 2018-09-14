# ts-starter
Blank Typescript Project with Jest for testing

Creating Library
----

1. Clone this repository by running following command. Here we are target folder as **project-name**. You can change the name as per your wish.

```
git clone https://github.com/CodeSnooker/ts-starter.git project-name
```

2. We need to change the origin url. We can do so by running following command. Replace the git url with your own repository.

```
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```

3. Make sure to update the URL in package.json file also.

4. Now run ```npm install```

5. Now you can place your code in ```lib``` folder

6. Write some test and place your test file in \__tests__ folder

7. run ```npm run test``` to test your project.

8. run ```npm run test:cover``` to check code coverage

9. Commit your code

10. run ```npm version patch``` to push your code along with release tag on the github server.

11. Don't forget to update README.md for you library.
# Week 1

This week is an introduction to Node.js, Express, and unit testing with Jest. The focus of this week will be on getting comfortable with the development environment, tools, and best practices in back-end development.

## Learning Objectives

At the end of this week, a student should:
- be able to navigate an Express API and understand what it does
- know how to run a local Express server and test its endpoints manually
- be comfortable reading and writing simple unit tests

## The assignment

The assignment this week is designed to get you comfortable working in an Express server. It is not meant to be particularly challening, but simply to get you aquainted with a project of the type we will be working in during this course.

### Getting started

1. Make sure you have a recent version of [Node.js](https://nodejs.org/en/download/) installed on your computer. I am using Node v12.16, but anything above 12 will be fine.
2. Ensure you have git and github set up on your computer. If you do not, please follow this guide: https://help.github.com/en/github/getting-started-with-github.
3. Fork this repository and clone it locally. 
4. In your terminal, from inside this project directory, run `npm install` to install the project dependencies.
5. Run `npm start` to start your local server. You should see a logged statement telling you `Server is listening on http://localhost:5000`.
6. Download [Postman](https://www.postman.com/) or API client of your choice. Browse the various endpoints (8 in total) contained in this project. Practice calling all of them and getting 200 HTTP responses.
7. Run the unit tests of this project: `npm test`. Your test output should end in something like this:
```
Test Suites: 4 failed, 4 total
Tests:       9 failed, 13 passed, 22 total
```

### Your task

As you can see, the unit tests for this project are not all passing. There are some problems for you to fix. The issues can be with the routes they are testing, or the issue may be that a test is itself incorrect. These issues are all small and will not require any significant code changes to resolve. To get full credit for this assignment, you must get all 13 unit tests to pass. You may not fundamentally change what the tests are intended to verify.

Hint: there are 4 underlying issues, one per each set of routes.

### Submission

- Create a pull request (PR) from your repository to the master branch of this repository. Make your name the title of the PR. 
- Continuous Integration is handled using [Travis CI](https://travis-ci.org/). This will automatically run your tests and show the results on your PR. If you see a red X and a message saying `All checks have failed` then you will not receive full credit. Ensure all tests are passing in order to receive full marks.

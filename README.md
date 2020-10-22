# `web-47942`

Sample bug app for JetBrains Rider bug [web-47942](https://youtrack.jetbrains.com/issue/WEB-47942).

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).
For more information, go to https://aurelia.io/docs/cli/webpack

## Reproduce the bug
* Install npm dependencies `npm install`
* Run the dev-server either by using the rider configuration or by `npm start`
* Open `http://localhost:8080` and attach JavaScript debugger (or again: use the rider configuration)
* Enter some number into the input-field on the page
* Set a break point in `src/app.ts:31` on the return statement
* Edit your number in the input-field
* Hover over the `parsedValue` usages
* ...
* Profit

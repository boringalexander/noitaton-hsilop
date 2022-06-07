# noitaton-hsilop
noitaton-hsilop is a reverse polish notation calculator for the command line written in Node.js.

It relies heavily on the parser combinator library, *arcsecond*, to 
parse user input into either semantically valid RPN arithmetic expressions, or other user input commands.

## Commands
Aside from basic arithmetic operations, noitaton-hsilop supports viewing the current RPN expression (`:it`), clearing the expression (`c`), and quitting (`q`).
```
> 3 3 + 
5 
> :it
3 3 +
> c
> :it

> q
'Goodbye'
```

## Setup and Usage
Dependencies are installed by running `npm install`

From the root directory, run
```
$ npm start
```
to run the CLI calculator app

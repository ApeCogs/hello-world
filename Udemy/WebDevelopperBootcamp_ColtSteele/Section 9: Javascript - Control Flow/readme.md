# Boolean Logic

* Everything starts with the idea that a statement is either True or False
* Then we can combine those initial statements to create more complex statements that also evaluate to True or False

## Comparison Operators

Assuming x=5

| Operator  | Name                          | Example       | Result    |
| --------- | ----------------------------- | ------------- | --------- |
|     >     | Greater than                  |   X > 10      | False     |
|     >=    | Greater than or equal to      |   x >= 5      | True      |
|     <     | Less than                     |   x < --50    | false     |
|     <=    | Less than or equal to         |   x <= 100    | true      |
|     ==    | Equal to                      |   x == "5"    | true      |
|     !=    | Not equal to                  |   x! = "b"    | true      |
|     ===   | Equal value and type          |   x === "5"   | false     |
|     !==   | Not equal value or equal type |   x !== "5"   | true      |

## Equality Operators:  == vs. ===

`"=="` performs _type coercion_, while `"==="` does not

## A Few interesting Cases

```(bash)
true == "1"         //true
0 == false          //true
null == undefined   //true
NaN == NaN          //false
```    

## Logical Operators

AND, OR, and NOT

Assuming x = 5 and y = 9

| Operator  | Name  | Example           | Result    |
| --------- | ----- | ----------------- | --------- |
| &&        | AND   | x < 10 && X !== 5 | false     |
| ||        | OR    | y >9 || x === 5   | true      |
| !         | NOT   | !(x === y)        | true      |

## Truthy and Falsy Values

Falsy Values:
 * false
 * 0
 * ""
 * null
 * undefined
 * NaN

 Everything else is truthy


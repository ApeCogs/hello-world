# Objectives

* Javascript Console (Chrome)
* Primitives Data Types


# Javascript Console

**Keyboard Shortcuts**: `cmd` + `option` + `j`

# Primitives Data Types

* numbers
* strings
* booleans
* null & undefined 

## Numbers

Ex:
4
9.3
10

* We can do some math
4+5     //14
1/5     //0.2

**Modulo** remainded operator
10 % 3  //1
24 % 2  //0
15 % 11 //4



## Strings

Ex:
"Hello World"
"43"

* Single or double quotes OK
"hello world"
'hello world'

* Concatenation
"charlie" + "brown"         //"charliebrown"
"charlie" + 5               //"charlie5"

* Escape characters start with "\"

* Strings have a lenght property
"hellow world".length        //11

* Access individual characters using [ ] and an index
"hello"[0]                  //"h"
"hello"[4]                  //"0"


## Booleans

true
false

## Null and Undefined

**NULL**: Null is explicitly nothing.


**Undefined**: Variables that are declared but not initialized are undefined. Ex:
`var name`
`var age`




# Variables 

Syntax: `var someVariableName = someValue;`
Example: `var name = gvl`

Recommended to use [camelcase notation](https://social.msdn.microsoft.com/Forums/sqlserver/en-US/dc0e7d00-61f5-4745-8df4-f2f9238af5ea/camel-or-hungarian-notation?forum=csharpgeneral).

**Hungarian Notation**: variable names start with their abbreviated types.
TextBox = `txtCustomerName`

**Camel Notation**: variables names words first letter are Uppercase except the first word.
String = `customerName`

**Pascal Notation**: variable's name words first letter is alwasys Uppercase.

# Usefull Built-in Methods

`alert()`
`console.log()`
`prompt()`
Usage: `var username = prompt("What is your name ?")`

# WRITING Javascript in a Seperate File


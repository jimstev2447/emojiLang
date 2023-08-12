# emojiLang
An exploration of languages, interpreters and compilation

## Data Types 

### Boolean Values

true: 🌕
false: 🌑

### Integers:

Integers are represented by numbers of consecutive emojis, combined to create a single integer, with 0 being represented by 1 emoji and 1 with 2 consecutive

```
😃 // 0
😃😃 //1
😎😎😃😃😃😃 // 13
```

### Strings:
 
Strings are declared as character sets starting with an indicator to define the character set as a string 📜. The characters in the string are denoted by their unicode values, and separated by the cable car 🚠

```
📜😀😀😀😀😀😀😀😎😎😎😎😎😎 //character 65 (A)
```

Characters are separated in the string by the cable car 🚠

```
📜😀😀😀😀😀😀😀😀🐨🐨🐨🚠🐨🐨😆🐨🐨🚠😎😎🥹😍😍😍😍😍😍😍😍😍🚠😎😎🥹😍😍😍😍😍😍😍😍😍🚠🙌🙌🥸🥸🙌🙌
//Hello
```

### Statements and Blocks

Statements should be ended with the 🪦 emoji, if you want to do multiple statements where a single expression is expected, you can group them in a block using 🐱🐶

### Variable Assignment

Any non-reserved emoji can be used as a variable but are declared and reassigned with the 🧠 emoji and the emoji used to represent the variable, followed by the value to be stored

```
🧠🤛📜😀😀😀😀😀😀😀😀🐨🐨🐨🚠🐨🐨😆🐨🐨🚠😎😎🥹😍😍😍😍😍😍😍😍😍🚠😎😎🥹😍😍😍😍😍😍😍😍😍🚠🙌🙌🥸🥸🙌🙌🪦
// let string = "hello";

```

### Comparison and Equality Operators

Equality is strict equality there is no type coercion

```
👥 =
🗻 >
🏖️ <
//and can be combined
🗻👥 >=
🏖️👥 <=
```

### Logical Operators

not ❌
and 🙌
or 🤷

### Arithmetic operators

use the operator followed by the number or variable that you want to

```
+ 👍
- 👎
/ 🖖
* 🤞
% 🤙

🥲🥲🥲👍🥲🥲🥲
// 2 + 2
```

### Precedence

Precidence will work as you expect in js and if you want to group actions you can use 🍺 and 🍔

```
🧠🤛🥲🥲🥲👍🍺🥲🥲🥲🤞🥲🥲🥲🥲🥲🥲🍔🪦
// let outcome = 2 + (2 * 5);
```

### Function declaration and invocation

function declarations act in the same way as variable assignment but with a function indicator emoji 🏭
the parameters of the function are emojis following then the following block of code will be executed when the function is invoked.

functions return the values after the 🎁 emoji

to invoke a function use the invocation emoji 💨 followed by the arguments, arguments must be passed in as variables

```
🧠🚗🏭😀😛🐱
🎁😀👍😛🐶🪦

🧠🥲😛😛😛🪦
🧠🥹😛😛🪦

🚗💨🥲🥹🪦 // 3

would look in js like
function add (a,b){
    return a + b
}
let a = 2
let b = 1
add(a,b)
```

### Standard Library

the 🗣️ is used to output to std out.

### iteration

a while loop is the only loop available and is defined using the ⏱️ emoji followed by the stopping condition. the following block will be executed on each itteration of the loop

```
🧠😀😛🪦
🧠🥸😛😛🙂🪦
⏱️😀👥🥸🐱
🗣️😀🪦
🧠😀😀👍🥲🥲🪦
🐶🪦
```

conditional logic

If statements are created by using the ❓ emoji followed by a boolean value or logical expression. a ⭐️ emoji represents the statement to be performed in the truthy case and
a 🔥 for the falsy case, you may instead pass a block of code to either the success or else case the end of each case should be considered a statement.

```
❓😀🗻👥🥸⭐️🗣️😀🔥🗣️🥸🪦
```

```js
if (a >= b) console.log(a);
else console.log(b);
```

Reserved emojis

```
🌕: True
🌑: false
📜:string
🧠:variable
+ 👍
- 👎
/ 🖖
* 🤞
% 🤙
= 👥
> 🗻
< 🏖️
{}🐱🐶
()🍺🍔
! : ❌
|| : 🤷
&& : 🙌
? 👀
+ ⭐️
- 🔥
function 🏭
invocation 💨
return 🎁
end of statement 🪦
print 🗣️
```

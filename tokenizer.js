const fs = require("fs");
const GraphemeSplitter = require("grapheme-splitter");
const splitter = new GraphemeSplitter();
const data = fs.readFileSync("./test.txt", "utf-8");
const { stdout, stderr } = require("process");

function reportError(line, where, message) {
  stderr.write(`[Line: ${line}]: Error ${where} : ${message}`);
}

function createToken(type, lexeme, literal, line) {
  return {
    type,
    lexeme,
    literal,
    line,
  };
}

const tokenTypes = {
  "🌕": "true",
  "🌑": "false",
  "📜": "string",
  "🧠": " variable",
  "👍": "plus",
  "👎": "minus",
  "🖖": "divide",
  "🤞": "multiply",
  "🤙": "modulo",
  "👥": "equal",
  "🗻": "greater",
  "🏖️": "less",
  "🐱": "openBrace",
  "🐶": "closeBrace",
  "🍺": "openParen",
  "🍔": "closeParen",
  "❌": "not",
  "🤷": "or",
  "🙌": "and",
  "👀": "if",
  "⭐️": "ifTrue",
  "🔥": "ifFalse",
  "🏭": "function",
  "💨": "functionInvokation",
  "🎁": "return",
  "🪦": "endOfStatement",
  "🗣️": "print",
};

const emojis = splitter.splitGraphemes(data);
console.log(emojis);

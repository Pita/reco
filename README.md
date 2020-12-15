# RECO

Regular Expression COmpiler - Compile a regex ahead of time to code

## Try

If you have node.js installed, you can immediatly try out reco:

```sh
# This will generate a file called regex.js that contains the code to match the regex
npx reco.io -o regex.js '/[a-z]+/i'
```

You can import it and use it in your js code:

```js
import { generatedRegexMatcher } from './regex.js';
const result = generatedRegexMatcher(str);
console.log(result);

/*
Outputs:
{
  index: 0, // position in the string that matched
  matches: [ 'foo', 'bar'] // groups that matched
}
or null in case there is no match
*/
```

## Idea

The idea is to generate code that matches a given regex at compile time. The goal is that this code can run faster or at least equaly fast as the built in native regex engine of V8. Small scale experimentation has shown that this is should be possible. But currently the generated code is 2-3x slower than the original engine. But I hope to be able to beat V8's engine with some help of the community, or maybe via Rust and WASM.
As the last step of the of compilation is a simple code templating step, it should be possible to compile a regex to different target languages (Rust, Go, Java, Python). As a side effect you can now also get the same regex to work across different browsers and programming languages.

## Current status

Reco has an extensive test suite and is able to compile complicated JS regex with all the fancy features JS regex has. If you find a unsupported feature or a wrong matching behauvior compared to V8's regex engine, please file an isssue with an example.

## Roadmap

Two main goals

- Port to other languages, first Rust to be able to compile to WASM
- Improve performance of matching

## Contributing

I'm open for PRs :)

If this project creates interest by the community, I'll put effort into creating a nice documentation on the internal workings of this project.

## Built on these awesome projects

- [regexpp](https://github.com/mysticatea/regexpp) - The regex parser of Babel, taking away the work of parsing the regex and allowing me to focus on generating the code
- [regenerate-unicode-properties](https://github.com/mathiasbynens/regenerate-unicode-properties) & [unicode-match-property-value-ecmascript](https://github.com/mathiasbynens/unicode-match-property-value-ecmascript), both from [@mathiasbynens](https://github.com/mathiasbynens) - Database allowing easy lookup of characters with certain unicode properties

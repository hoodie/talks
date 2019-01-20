## What is WebAssembly?

--SLIDE--

<blockquote>
... a simple machine model and executable format with an [extensive specification](https://webassembly.github.io/spec/). It is designed to be portable, compact, and execute at or near native speeds.
<cite>
https://rustwasm.github.io/book/what-is-webassembly.html
</cite>
</blockquote>

--SLIDE--

<blockquote>
...it is a new, low-level, assembly-like language
<cite> [mozilla research](https://rustwasm.github.io/book/what-is-webassembly.html) </cite>
</blockquote>

--SLIDE--

<blockquote>
...is backward-compatible with its precursor, [asm.js](http://asmjs.org/).
<cite> [mozilla research](https://research.mozilla.org/webassembly/) </cite>
</blockquote>


--SLIDE--


## Ein Schritt nach asm.js

<blockquote class="small">
...a strict subset of JavaScript [...] provides an abstraction similar to the C/C++ virtual machine: a large binary heap with efficient loads and stores, integer and floating-point arithmetic, first-order function definitions, and function pointers.
<cite>[asmjs spec](http://asmjs.org/spec/latest/#introduction)</cite>
</blockquote>

http://asmjs.org/faq.html

--SECTION--

## Don't we know that already?

Is WASM the new JavaApplets

--SLIDE--

## wasm vs java applets

* https://words.steveklabnik.com/is-webassembly-the-return-of-java-applets-flash

--SECTION--


## what can it do?

## what can it not do?

## why do we want it?

* portablity
* better performance
* better languages

## Problems

* 0 is a valid address
https://00f.net/2018/11/25/webassembly-doesnt-make-unsafe-languages-safe/

* less transparency on the web


--SECTION--

<img src="./images/hello.svg" width="40%" />
--SLIDE--


--SECTION--
# Wer steht dahinter

* foo


--SLIDE--
## Wo funktioniert es
--SLIDE--

## Einschränkungen
--SLIDE--

## Downsides?

--SECTION--

# WebAssembly and RUST

![test](images/happy.svg)

--SECTION--

# NOTES TODO
https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Emscripten


## links

https://wasmer.io/



## wasm in 2018 2019

links from TWIR please



## Why

* performance (see iterator.ts)

## Get Started

 * [official guide for c++](https://webassembly.org/getting-started/developers-guide/)

## Some Rust

### why?

* most advanced WASM tooling and integration
* WASM vs JAVA BYTECODE
* webrtc foo (zoom) (audio classifier)

### homework

* [ ] https://rustup.rs/ (`curl https://sh.rustup.rs -sSf | sh`)
* [ ] `rustup target add wasm32-unknown-unknown`
* [ ] `cargo +nightly install wasm-bindgen-cli`

## crates

* `console-error-panic-hook`
* ``wee-alloc`
* ​

## Binary size (Oh no it's sooo big)

https://rustwasm.github.io/book/game-of-life/code-size.html

## examples
https://webassembly.org/demo/Tanks/
http://naubino.de/awsm-gorillas/
https://blogs.unity3d.com/2017/03/31/5-6-is-now-available-and-completes-the-unity-5-cycle/#webassembly

## References

https://rustwasm.github.io/book/
https://rustwasm.github.io/wasm-bindgen/
https://webassembly.studio/
https://webassembly.org/
https://github.com/AssemblyScript/assemblyscript
https://research.mozilla.org/webassembly/

https://hacks.mozilla.org/2017/02/a-cartoon-intro-to-webassembly/

[]
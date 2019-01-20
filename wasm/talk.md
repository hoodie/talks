markdown
--SECTION--

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



## Pros

* portablity (reuse your code)
* better performance
 * simpler language model
 * precompiled, preoptimized
 * fewer allocations
* better languages
 * strongly typed languages
 * no GC
 * better tooling

--SLIDE--

## cons

* [0 is a valid address](https://00f.net/2018/11/25/webassembly-doesnt-make-unsafe-languages-safe/)
* less transparency on the web
 * possiblity for proprietary code in your browser
* binary size
* serialization

--SLIDE--

## Is WASM vs JavaApplets or Flash

* it's part of the browser<sup>*</sup>
 * not a plugin
 * not owned by other companies like flash or java
 * [standardized](https://webassembly.github.io/spec/)
* runs in the javascript engine
 * secure: sandboxed just like javascript
 * low maintainance for browser vendors

[kudos steve klabnik](https://words.steveklabnik.com/is-webassembly-the-return-of-java-applets-flash)

--SECTION--

## what can it do?

* available APIS? everything that JavaScript has to offer (including WebGL) 

--SLIDE--

## what can it not do?
* SIMD ([yet](https://github.com/WebAssembly/simd))
* threads ([yet](https://github.com/WebAssembly/threads)[?](https://www.chromestatus.com/features/5724132452859904))
* network udp<sup>*</sup>
* fs access<sup>*</sup>
* memory outside of the browser
* more precise timers<sup>*</sup>
* 64 bit

--SLIDE--

## what is it good for?

* crypto
* audio/video/image edition
* computer vision
* high performance apps: CAD, Science, Games
* low latency apps: VR
* binary protocols, parsers
* emulation: Gameboy to x86
* [use cases...](https://webassembly.org/docs/use-cases/)


--SLIDE--

## why doesn't it have `$X`?
https://webassembly.org/docs/faq/
https://webassembly.org/docs/future-features/module
https://hacks.mozilla.org/2017/02/where-is-webassembly-now-and-whats-next/

--SECTION--

# How does it get into the browser

[Understanding the JS API](https://webassembly.org/getting-started/js-api/)

* 

--SECTION--

## WASM in RUST

<img src="./images/hello.svg" width="40%" />
--SLIDE--

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

https://webassembly.org/docs/faq/
https://webassembly.org/docs/c-and-c++/

https://rustwasm.github.io/book/
https://rustwasm.github.io/wasm-bindgen/
https://webassembly.studio/
https://webassembly.org/
https://github.com/AssemblyScript/assemblyscript
https://www.chromestatus.com/features#webassembly


[]
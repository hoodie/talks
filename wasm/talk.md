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

### Portability
TODO: https://webassembly.org/docs/portability/
### Semantics
TODO: https://webassembly.org/docs/semantics/

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
 * [what makes WASM fast?](https://hacks.mozilla.org/2017/02/what-makes-webassembly-fast/)
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

<small>
* it's part of the browser<sup>*</sup>
 * not a plugin
 * not owned by other companies like flash or java
 * [standardized](https://webassembly.github.io/spec/)
* runs in the javascript engine
 * secure: sandboxed just like javascript
 * low maintainance for browser vendors

</small>

<cite>
[kudos steve klabnik](https://words.steveklabnik.com/is-webassembly-the-return-of-java-applets-flash)
</cite>

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
It's [designed incrementally](https://webassembly.org/docs/rationale/) -> it's an [MVP](https://webassembly.org/docs/mvp/)
* https://webassembly.org/docs/faq/
* https://webassembly.org/docs/future-features/module
* https://hacks.mozilla.org/2017/02/where-is-webassembly-now-and-whats-next/

--SLIDE--

## Security
TODO: https://webassembly.org/docs/security/

--SECTION--

## How does it get into the browser?

--SLIDE--

## compile...

![compile](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/02/04-03-toolchain07.png)
<br/>
<small>
... more on this later
</small>

--SLIDE--
 
* Get the .wasm bytes into a typed array or ArrayBuffer
* Compile the bytes into a WebAssembly.Module
* Instantiate the WebAssembly.Module with imports to get the callable exports

<cite>
https://webassembly.org/getting-started/js-api/
</cite>

--SLIDE--

```javascript
function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
  ).then(results =>
    results.instance
  );
}
```
<cite> [Lin Clark](https://hacks.mozilla.org/2017/02/creating-and-working-with-webassembly-modules/) / [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly) </cite>

--SLIDE--

Now just do a bunch of FFI 😨 because the you have to tunnel everything 😩through an essentially 😱 C-like interface
<img src="https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/02/04-04-memory04.png" alt="ffi" style="width:100%"/>
 🤷‍♂️  
--SLIDE--

...oh and your 🦀 Rust has to expose a C-Like interface too, sorry 🙇🏻

--SLIDE--

### notes
* [Modules](https://webassembly.org/docs/modules/), [JsApi](https://webassembly.org/docs/js/)
* [Understanding the JS API](https://webassembly.org/getting-started/js-api/)
* [Creating and working with WebAssembly modules](https://hacks.mozilla.org/2017/02/creating-and-working-with-webassembly-modules/)
* [wasm-Bindgen](https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/)
* [Wasm-pack](https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/)
* [Making WebAssembly better for Rust & for all languages](https://hacks.mozilla.org/2018/03/making-webassembly-better-for-rust-for-all-languages/)

--SECTION--

## WASM in RUST

<img src="./images/hello.svg" width="40%" />
--SLIDE--

![test](images/happy.svg)

wasm-bindgen
https://rustwasm.github.io/book/
https://rustwasm.github.io/wasm-pack/
https://rustwasm.github.io/wasm-bindgen/

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
https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts


[]
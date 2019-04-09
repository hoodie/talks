# « notes »
markdown
--SECTION--

...oh and your 🦀 Rust has to expose a C-Like interface too, sorry 🙇🏻

--SLIDE--

### notes
* [Modules](https://webassembly.org/docs/modules/), [JsApi](https://webassembly.org/docs/js/)
* [Understanding the JS API](https://webassembly.org/getting-started/js-api/)
* [Creating and working with WebAssembly modules](https://hacks.mozilla.org/2017/02/creating-and-working-with-webassembly-modules/)
* [wasm-Bindgen](https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/)
* [Wasm-pack](https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/)
* [Making WebAssembly better for Rust & for all languages](https://hacks.mozilla.org/2018/03/making-webassembly-better-for-rust-for-all-languages/)

--SLIDE--

how to compile to <code>.wasm</code>?






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
https://github.com/richardanaya/virtual-dom-rs-counter

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


### benchmarks
https://blog.sqreen.io/webassembly-performance/ (before https://hacks.mozilla.org/2018/10/calls-between-javascript-and-webassembly-are-finally-fast-%f0%9f%8e%89/)
[]
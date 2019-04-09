#!/bin/bash -xe
rm -rf gadgets* module
mkdir module

export GADGETS_BUILD_DATE=$(date)

WASM_BIN=target/wasm32-unknown-unknown/release/gadgets.wasm
JAVASCRIPT_GEN_BIN=module/gadgets.js
WASM_GEN_BIN=module/gadgets_bg.wasm

cargo build --target wasm32-unknown-unknown --release
wasm-bindgen --browser --no-modules $WASM_BIN --out-dir module

wasm-strip $WASM_GEN_BIN
wasm-opt --vacuum $WASM_GEN_BIN -o $WASM_GEN_BIN
wasm-snip --snip-rust-panicking-code  --snip-rust-fmt-code $WASM_GEN_BIN  main -o $WASM_GEN_BIN
wasm2wat $WASM_GEN_BIN | wc -l

cp $JAVASCRIPT_GEN_BIN $WASM_GEN_BIN .

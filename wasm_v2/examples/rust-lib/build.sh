#!/bin/bash -xe
rm -rf rust-lib*

cargo build --target wasm32-unknown-unknown --release
cp target/wasm32-unknown-unknown/release/rust_lib.wasm rust-lib.wasm
#wasm-strip rust-lib.wasm
# wasm-opt --strip --vacuum rust-lib.wasm -o rust-lib.wasm
#wasm-snip --snip-rust-panicking-code  --snip-rust-fmt-code rust-lib.wasm main -o rust-lib.wasm
wasm2wat rust-lib.wasm | wc -l

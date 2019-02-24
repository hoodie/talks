use wasm_bindgen::prelude::*;

mod person;
pub use person::Person;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}


#[wasm_bindgen]
pub fn left_pad(content: &str, width: usize) -> String {
    format!("\"{:👾>w$}\"", content, w = width)
}


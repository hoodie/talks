extern crate wee_alloc;
// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

use wasm_bindgen::prelude::*;
mod person;
pub use person::Person;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)] pub fn info(msg: &str);
}
macro_rules! info { ($($arg:tt)*) => (info(&format!($($arg)*));) }



#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}








#[wasm_bindgen]
pub fn left_pad(content: &str, width: usize) -> String {
    format!("{:👾>w$}", content, w = width)
}

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    info!("wasm loaded, built {}", env!("GADGETS_BUILD_DATE"));
    Ok(())
}

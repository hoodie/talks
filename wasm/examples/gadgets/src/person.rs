use super::*;

#[wasm_bindgen]
pub struct Person {
    name: String,
}

#[wasm_bindgen]
impl Person {
    #[wasm_bindgen(constructor)]
    pub fn new(name: String) -> Person {
        Self { name }
    }

    pub fn get_name(&self) -> String {
        self.name.to_owned()
    }
}
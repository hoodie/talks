extern crate wee_alloc;

// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

extern "C" {
    // fn logger(output: i32);
}

// #[no_mangle]
// pub unsafe fn speak() {
//     logger(42);
// }

#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    a + b + 100
}

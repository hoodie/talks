extern crate wee_alloc;

// Use `wee_alloc` as the global allocator.
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

extern "C" {
    fn logger_num(output: i32);
    fn logger_str(output: &str);
}

#[no_mangle]
pub unsafe fn speak() {
    logger_num(42);
    logger_str("42");
}

#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
    a + b + 100
}

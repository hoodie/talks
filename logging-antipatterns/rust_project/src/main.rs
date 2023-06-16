fn main() {
    std::env::set_var("RUST_LOG", "debug");
    env_logger::init();

    let https_enabled = true;
    let ip = std::net::Ipv4Addr::LOCALHOST;
    let worker_count = 16;
    let user_id = "honeybear1998";
    let session_id = "D321D003-0083-484A-98F4-9153CD7409E0";

    println!("basic unstructured logs");
    log::debug!(target: "backend_service::service", "everything fine");
    log::info!(target: "backend_service::main", "listening on {ip:?} with https enabled {https_enabled}");
    log::trace!(target: "backend_service::worker", "started {worker_count} workers");
    log::warn!(target: "backend_service::worker::thread", "session disconnected {user_id:?}");
    log::error!(target: "backend_service::worker::thread", "failure occurred");

    println!("\n\n");
    println!("do not inline variables");
    log::debug!(target: "backend_service::service", "everything fine");
    log::info!(target: "backend_service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::trace!(target: "backend_service::worker", "started {worker_count} workers");
    log::warn!(target: "backend_service::worker::thread", "session disconnected {user_id:?}");
    log::error!(target: "backend_service::worker::thread", "failure occurred");

    println!("\n\n");
    println!("be specific");
    log::debug!(target: "backend_service::service::init", "config loaded");
    log::debug!(target: "backend_service::service::transport", "address available");
    log::info!(target: "backend_service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::trace!(target: "backend_service::worker", "started {worker_count} workers");
    log::warn!(target: "backend_service::worker::thread", "session disconnected {user_id:?}");
    log::error!(target: "backend_service::worker::thread", "failure occurred");

    println!("\n\n");

    println!("give context");
    log::debug!(target: "backend_service::service::init", "config loaded");
    log::debug!(target: "backend_service::service::transport", "address available");
    log::info!(target: "backend_service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::trace!(target: "backend_service::worker", "started {worker_count} workers");
    log::warn!(target: "backend_service::worker::thread", "session disconnected {{user_id:{user_id:?}}}");
    log::error!(target: "backend_service::worker::thread", "failure occurred {{msg: \"failed to parse input\", user_id: {user_id:?}, worker_id: 4}}");
    println!("\n\n");

    println!("do not reveal PII");
    log::debug!(target: "backend_service::service::init", "config loaded");
    log::debug!(target: "backend_service::service::transport", "address available");
    log::info!(target: "backend_service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::warn!(target: "backend_service::worker::thread", "session disconnected {{session_id:{session_id:?}}}");
    log::error!(target: "backend_service::worker::thread", "failure occurred {{msg: \"failed to parse input\", session_id: {session_id:?}, worker_id: 4}}");

    println!("\n\n");
}

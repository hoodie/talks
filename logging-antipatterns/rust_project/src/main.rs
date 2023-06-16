fn main() {
    std::env::set_var("RUST_LOG", "debug");
    env_logger::init();

    let https_enabled = true;
    let ip = std::net::Ipv4Addr::LOCALHOST;
    let worker_count = 16;
    let user_id = "honeybear1998";
    let session_id = "D321D003-0083-484A-98F4-9153CD7409E0";

    fn head(title: &str) {
        eprintln!(r#"<section data-transition="none">"#);
        eprintln!("<h4>{title}</h4>");
        eprintln!(r#"<pre><code class="rust-log small">"#);
    }

    fn food() {
        eprintln!("</code></pre>");
        eprintln!("</section>");
        eprintln!("\n\n");
    }

    head("basic unstructured logs");
    log::debug!(target: "service::service", "everything fine");
    log::info!(target: "service::main", "listening on {ip:?} with https enabled {https_enabled}");
    log::trace!(target: "service::worker", "started {worker_count} workers");
    log::warn!(target: "service::worker::thread", "session disconnected {user_id:?}");
    log::error!(target: "service::worker::thread", "failure occurred");
    food();

    head("do not inline variables");
    log::debug!(target: "service::service", "everything fine");
    log::info!(target: "service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::trace!(target: "service::worker", "started {worker_count} workers");
    log::warn!(target: "service::worker::thread", "session disconnected {user_id:?}");
    log::error!(target: "service::worker::thread", "failure occurred");
    food();

    head("be specific");
    log::debug!(target: "service::service::init", "config loaded");
    log::debug!(target: "service::service::transport", "address available");
    log::info!(target: "service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::trace!(target: "service::worker", "started {worker_count} workers");
    log::warn!(target: "service::worker::thread", "session disconnected {user_id:?}");
    log::error!(target: "service::worker::thread", "failure occurred");
    food();

    head("give context");
    log::debug!(target: "service::service::init", "config loaded");
    log::debug!(target: "service::service::transport", "address available");
    log::info!(target: "service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::trace!(target: "service::worker", "started {worker_count} workers");
    log::warn!(target: "service::worker::thread", "session disconnected {{user_id:{user_id:?}}}");
    log::error!(target: "service::worker::thread", "failure occurred {{msg: \"failed to parse input\", user_id: {user_id:?}, worker_id: 4}}");
    food();

    head("do not reveal PII");
    log::debug!(target: "service::service::init", "config loaded");
    log::debug!(target: "service::service::transport", "address available");
    log::info!(target: "service::main", "listening {{https: {https_enabled}, ip:{ip:?}}}");
    log::warn!(target: "service::worker::thread", "session disconnected {{session_id:{session_id:?}}}");
    log::error!(target: "service::worker::thread", "failure occurred {{msg: \"failed to parse input\", session_id: {session_id:?}, worker_id: 4}}");
    food();
}

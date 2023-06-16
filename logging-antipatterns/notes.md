## stories

- "please structure your logs so we can parse them better"
    * start with a static string, end with variable data
    * machine readable
    * alerting
- "we need to add more logs here"
- "please reduce the log levels, splunk is expensive"
- "don't rename those logs, we have counters in prod"
    - there is a regex somewhere
- "we turned off your logger in the last update"
- "no, `info` is never sent to splunk" (wrong/different interpretation of levels)
- "no no, you get used to reading the xml in splunk over time"
-  verbose logger apis `STRACE_WARN("warn", 4, "something went wrong", {level: 4})`

## users / use-cases

- dev, dev-time
- dev, local debug-time
- dev, prod debug-time (post mortem)
    - backtraces
    - tracing 
    - sentry
- dev, (dev)ops
    - monitoring
    - telemetry
    - tracing
- product management
- Machine Learning
    * if there is enough training data to identify bad behavior (unhappy path) you are already in a bad situation
    * ideally every single warn/error log should be handled by a dev
    * TODO: ask olga about Harness+Learning

* invisible contracts between log-lines and unexpected users

## better alternatives

- trace logs / prints
  - dev-time
  - trace-level
- tracing
  - function/object annotations
- monitoring / prometheus
- telemetry-events
- sentry

## levels

- basics: `info`, `debug`, `warn`, `error`, `trace`, `silly`
- [RFC5424](https://datatracker.ietf.org/doc/html/rfc5424):

- numeral levels
- numeral levels +
### console LEVELS
* debug, warn, error, info
### STRACE LEVELS

### [RFC5424](https://datatracker.ietf.org/doc/html/rfc5424):

|  code | Severity            |                                  |
| ----: | :------------------ | -------------------------------- |
| **0** | **`Emergency`**     | system is unusable               |
| **1** | **`Alert`**         | action must be taken immediately |
| **2** | **`Critical`**      | critical conditions              |
| **3** | **`Error`**         | error conditions                 |
| **4** | **`Warning`**       | warning conditions               |
| **5** | **`Notice`**        | normal but significant condition |
| **6** | **`Informational`** | informational messages           |
| **7** | **`Debug`**         | debug-level messages             |

## style

- starting with capital letters

## anti-patterns

- writing numbers/values in between text
- logging complex objects in javascript (leak logging)
- refer to previous logs
- write your own loggers
- contain PII
- cause extra traffic

## patterns

* use a library
* external configuration via env variables
* where to log
  - in else blocks
  - not in hot loops (requires rate-limiter)
* add scope
* unique logs
  - can't be confused with other logs
  - maybe even with an ID
  - filterable

* context free
  * don't a previous log line for context
  * add additional information (Session-IDs etc)

* sequence numbering/counter (security concern)
* avoid PII and secrets (IPs, usernames, **passwords**, tokens, etc)
* delete your logs in time
    * GDPR

## Client Side Logging

- traffic concerns
-

## References

https://www.npmjs.com/package/winston
https://datatracker.ietf.org/doc/html/rfc5424
https://docs.rs/tracing/


## EXTRA: what is tracing?
* structured fields
* https://www.chromium.org/developers/how-tos/trace-event-profiling-tool/
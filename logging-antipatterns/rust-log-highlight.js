"use strict";
window.rust_log = (hljs) =>
    hljs.registerLanguage(
        "rust-log",

        (hljs) => {
            const LOG_LEVELS = {
                keyword: ["INFO", "WARN", "DEBUG", "ERROR"],
            };

            const keywords = {
                // keyword: "address listening",
                literal: "true false none",
            };

            const STRING = {
                className: "string",
                contains: [hljs.BACKSLASH_ESCAPE],
                variants: [
                    {
                        begin: /'/,
                        end: /'|\n/,
                    },
                    {
                        begin: /"/,
                        end: /"|\n/,
                    },
                    {
                        begin: /`/,
                        end: /`|'|\n/,
                    },
                ],
            };

            const DATE = {
                className: "title",
                begin:
                    /(\d{4})-(\d{2})-(\d{2})(T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|([+-])(\d{2}):(\d{2})))?/,
                relevance: 9,
            };

            const IP = {
                className: "number",
                variants: [
                    {
                        begin: /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d{1,5}))?/,
                        relevance: 9,
                    },
                ],
            };

            const SCOPE = {
                scope: "string",
                begin: /([a-z_]+::)+[a-z_]+/,
                relevance: 10,
            };

            const FILE = {
                scope: "string",
                variants: [
                    {
                        begin: /(\/)?\b\w*(\/)\S*/,
                        relevance: 10,
                    },
                    {
                        begin: "\\b\\w*(\\/)\\S*",
                        relevance: 10,
                    },
                    {
                        begin: "\\S*#\\S*",
                        relevance: 10,
                    },
                ],
            };

            const HEADER = {
                className: "comment",
                begin: /\[/,
                end: /\]/,
                keywords: LOG_LEVELS,
                contains: [DATE, SCOPE],
            };

            const BLOCK= {
                className: "symbol",
                begin: /\{/,
                end: /\}/,
            };

            return {
                name: "Rust Log",
                keywords,
                illegal: /\/\*/,
                contains: [HEADER, SCOPE, STRING, DATE, IP, FILE, BLOCK],
            };
        }
    );

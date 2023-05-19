import hljs_module from "./lib/plugin/highlight/highlight.esm.js"

const hljs = hljs_module();

const element = (tagName) => ({ className, children, innerHTML } = {}, attrs = {}) => {
  const _element = document.createElement(tagName);
  if (innerHTML) {
    _element.innerHTML = innerHTML;
  } else {
    children?.forEach((child) => _element.appendChild(child));
  }
  if (attrs) {
    Object.entries(attrs).forEach(([k, v]) => (_element[k] = v));
  }
  _element.className = className;
  return _element;
};

const tag = (name) => (child) => element(name)({ children: [child] });

const button = element('button');
const link = element('a');
const pre = element('pre');
const code = element('code');
const small = tag('small');

const codeblock = content => small(small(pre({
  innerHTML: content,
  className: 'output'
}, {

})));

const buttonDefaults = { withMain: false, justBuild: false };

const appendExecuteButtons = ({ withMain, justBuild } = buttonDefaults) => (codeTag) => {

  const preTag = codeTag.parentNode;
  const preParent= preTag.parentNode;
  const append = (node) => preTag.append(node)

  const addRunResult = (status, output) => {
    preParent.append(status === STATUS.SUCCESS ? '✅' : '❌');
    preParent.append(codeblock(output));
  }

  // highlight
  // hljs.highlightBlock(codeTag);

  const codeContent = codeTag.textContent;

  const wrappedCode = withMain ? wrapInMain(codeContent) : codeContent;

  const playgroundUrl = "https://play.rust-lang.org/";
  const a = link({}, {
    class: 'test-arrow',
    textContent: 'edit',
    href: playgroundUrl + '?code=' + encodeURIComponent(wrappedCode),
    target: '_blank',
    class: 'runlink',
    id: 'runlink',
  })


  const executeButton = button({
    innerHTML: 'Run'
  }, {
    onclick: (event) => {
      console.info('running', event)
      // event.preventDefault();
      runProgram(wrappedCode, function (statcode, result) {
        console.debug(result)
        addRunResult(statcode, result)
      })
    }
  });

  justBuild || append(executeButton);
  append(a);

}

const STATUS = {
  SUCCESS: 0,
  ERROR: 1,
  WARNING: 2,
  0: 'SUCCESS',
  1: 'ERROR',
  2: 'WARNING',
}

function wrapInMain(program) {
  return `fn main() {\n${program}\n}`;
}

function runProgram(program, callback) {
  console.debug('runProgram', program)
  var req = new XMLHttpRequest();
  var data = JSON.stringify({
    version: "stable",
    optimize: "0",
    code: program
  });

  // console.log("Sending", data);
  req.open('POST', "https://play.rust-lang.org/evaluate.json", true);
  req.onload = function (e) {
    if (req.readyState === 4 && req.status === 200) {
      var result = JSON.parse(req.response).result;

      // Need server support to get an accurate version of this.
      var statusCode = STATUS.SUCCESS;
      if (result.indexOf("error:") !== -1) {
        statusCode = STATUS.ERROR;
      } else if (result.indexOf("warning:") !== -1) {
        statusCode = STATUS.WARNING;
      }

      callback(statusCode, result);
    } else {
      callback(false, null);
    }
  };

  req.onerror = function (e) {
    callback(false, null);
  }

  req.setRequestHeader("Content-Type", "application/json");
  req.send(data);
}

document.querySelectorAll('pre.rust.execute code:first-child').forEach(appendExecuteButtons({ withMain: true }));
document.querySelectorAll('pre.rust.build code:first-child').forEach(appendExecuteButtons({ withMain: false, justBuild: true }));
document.querySelectorAll('pre.rust.noMain code:first-child').forEach(appendExecuteButtons({ withMain: false }));

console.info("playpen added", hljs)
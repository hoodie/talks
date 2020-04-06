const element = (tagName) => ({ className, children, innerHTML } = {}, attrs = {}) => {
  const _element = document.createElement(tagName);
  if (innerHTML) {
    _element.innerHTML = innerHTML;
  } else {
    children?.forEach((child) => _element.appendChild(child));
  }
  if (attrs) {
    console.dir(attrs);
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

document.querySelectorAll('pre.rust.execute code').forEach((el) => {

  const append = (node) => el.parentNode.append(node)

  const addRunResult = (output) => {
    el.parentNode.parentNode.append(codeblock(output));
  }

  // highlight
  hljs.highlightBlock(el);

  const code = el.textContent;

  const playgroundUrl = "https://play.rust-lang.org/";
  const a = link({}, {
    class: 'test-arrow',
    textContent: 'play',
    href: playgroundUrl + '?code=' + encodeURIComponent(wrapInMain(code)),
    target: '_blank',
    class: 'runlink',
    id: 'runlink',
  })


  const executeButton = button({
    innerHTML: 'execute'
  }, {
    onclick: (event) => {
      console.info('running', event)
      // event.preventDefault();
      runProgram(code, function (statcode, result) {
        console.debug(result)
        addRunResult(result)
      })
    }
  });

  append(executeButton);
  append(a);

});

const SUCCESS = 0;
const ERROR = 1;
const WARNING = 2;

function wrapInMain(program) {
  return `fn main() {\n${program}\n}`;
}

function runProgram(program, callback) {
  console.debug('runProgram', program)
  var req = new XMLHttpRequest();
  var data = JSON.stringify({
    version: "stable",
    optimize: "0",
    code: wrapInMain(program)
  });

  // console.log("Sending", data);
  req.open('POST', "https://play.rust-lang.org/evaluate.json", true);
  req.onload = function (e) {
    if (req.readyState === 4 && req.status === 200) {
      var result = JSON.parse(req.response).result;

      // Need server support to get an accurate version of this.
      var statusCode = SUCCESS;
      if (result.indexOf("error:") !== -1) {
        statusCode = ERROR;
      } else if (result.indexOf("warning:") !== -1) {
        statusCode = WARNING;
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

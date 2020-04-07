var elements = document.querySelectorAll('pre.rust code');
Array.prototype.forEach.call(elements, function (el) {

  // highlight
  hljs.highlightBlock(el);

  var a = document.createElement('a');
  a.setAttribute('class', 'test-arrow');
  a.textContent = 'Run';
  playgroundUrl = "https://play.rust-lang.org/"

  var code = el.textContent;


  a.setAttribute('href', playgroundUrl + '?code=' +
    encodeURIComponent(code));
  a.setAttribute('target', '_blank');
  a.setAttribute('class', 'runlink');
  a.setAttribute('id', 'runlink');

  a.onclick = (function (event) {
      event.preventDefault();
      runProgram(code, function (statcode, result) {
        //alert(result);
        el.appendChild("<hr/><code style=\"color:#f00\">");
        el.appendChild(result);
        el.appendChild("</code>");
      })
    });

  el.appendChild(a);

});

var SUCCESS = 0;
var ERROR = 1;
var WARNING = 2;

function runProgram(program, callback) {
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

function onready () {
  document.querySelectorAll('pre.cpp code').forEach(function (i, block) {
    hljs.highlightBlock(block);
  });

  document.querySelectorAll('pre.rust-norun code').forEach(function (i, block) {
    hljs.highlightBlock(block);
  });
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


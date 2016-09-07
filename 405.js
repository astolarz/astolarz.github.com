var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

var url = 'http://wsdot.com/traffic/api/api/tolling?AccessCode=f0900dfd-030d-4698-a149-8e971f0ff6f3';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.onload = function() {
  console.log(responseText);
};

xhr.onerror = function() {
  console.log("oops");
};

xhr.send();*/

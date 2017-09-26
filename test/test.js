require('mocha-generators').install();
var Nightmare = require('nightmare');
var expect = require('chai').expect;

describe('Get Title',function() {
  var nightmare;

  beforeEach(function*() {
    nightmare = Nightmare();
    yield nightmare
      .goto('http://localhost:4200/?')
  });

  it('should verify the heading',function (done) {
    nightmare
      .goto('http://localhost:4200/?')
      .evaluate(function () {
        return document.querySelector('h1').textContent;
      })
      .end()
      .then(function (title) {
        expect(title).to.equal('ToDo List')
        done();
      });
  });
  afterEach(function* () {
    yield nightmare.end();
  });
});

window[''].nightmare.ipc = require('ipc');
window.confirm = function(message, defaultResponse){
  if(message == "sure to delete?")
    return true;
  return defaultResponse;
}

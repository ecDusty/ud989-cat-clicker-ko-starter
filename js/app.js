
function get(url) {
  return fetch(url);
}

function getJSON(url) {
  return get(url).then(function(response) {
    return response.json();
  })
}

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.nameFirst = ko.observable(data.nameFirst);
  this.nameLast = ko.observable(data.nameLast);
  this.fullName = ko.pureComputed(function() {
    return this.nameFirst() + " " + this.nameLast();
  }, this);

  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);

  this.title = ko.computed(function() {
    var rank = '';

    if (this.clickCount() < 10) {
      rank = 'Beginner';
    } else if (this.clickCount() < 20) {
      rank = 'Padawan';
    } else if (this.clickCount() < 60) {
      rank = 'Intermediate';
    } else if (this.clickCount() < 100) {
      rank = 'Pro';
    } else {
      rank = 'Jedi Knight';
    }

    return rank;
  }, this)

  this.nickNames = ko.observableArray(data.nickNames);
}


var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);
  this.curCat = ko.observable();

  getJSON('../json/cats.json')
  .then(function(response) {
    response.cats.forEach(function(catItem) {
      self.catList.push( new Cat(catItem));
    });
  }).then(function() {
    self.curCat(self.catList()[0]);
  })
  .catch(function(error) {
    console.log(error);
  });

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCat = function() {
    self.curCat(this);
  }
}

ko.applyBindings(new ViewModel());














var erin_Mulligan = {
    email: 'erin@unlikelyit.com',
    phoneNumber: +852-9283-0998,
    address: 'Units 1205-9, \
        12/F, Cyberport 2, \
        100 Cyberport Road, HK'
}
























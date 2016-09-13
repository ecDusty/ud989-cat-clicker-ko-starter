var Cat = function() {
  this.clickCount = ko.observable(0);
  this.nameFirst = ko.observable('Tabby');
  this.nameLast = ko.observable('Macalligan');
  this.fullName = ko.pureComputed(function() {
    return this.nameFirst() + " " + this.nameLast();
  }, this);

  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('images url source');

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

  this.nickNames = ko.observableArray([
    { nName: "Mr. Biggles Worth" },
    { nName: "Tina Fey" },
    { nName: "T to the F" }
  ])
}


var ViewModel = function() {

  this.curCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());

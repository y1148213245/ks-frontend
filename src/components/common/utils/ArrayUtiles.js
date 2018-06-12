Array.prototype.duplicateRemoval = function () {
  var res = [];
  var json = {};
  for (var i = 0; i < this.length; i++) {
    let key = JSON.stringify(this[i])
    if (!json[key]) {
      res.push(this[i]);
      json[key] = 1;
    }
  }
  return res;
};

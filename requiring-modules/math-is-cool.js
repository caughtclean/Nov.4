
  getY = function(y)  {
    sum = y * y;
    return sum;

  };

  getX = function(x)  {
    sum = x * x;
    return sum;

  };
  xySquared = function (a, b)  {
    var plusSquared = getY(a) * getX(b);
    return (plusSquared);
  };


  module.exports = {
    MyFunc: xySquared
  };
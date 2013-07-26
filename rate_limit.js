
function RateLimit(limit, timeWindow){
  this.limit = limit;
  this.timeWindow = timeWindow;
  this.currentLimit = 0;
  this.queue = [];
}

RateLimit.prototype.callWithLimit = function(func, args, context){

  if(this.currentLimit < this.limit){
    this.currentLimit+=1;
    func.apply(context || this, args);

    if(this.currentLimit === this.limit){
      var that = this;
      setTimeout(function(){
        reset.apply(that);
      }, this.timeWindow);
    }
  }
  else{
    this.queue.push([func, args, context]);
  }
}
function reset(){
  this.currentLimit = 0;
  var currentLength = this.queue.length;
  var item, i = 0;
  while(i < currentLength){
    item = this.queue.pop()
    this.callWithLimit(item[0], item[1], item[2]);
    i+=1;
  }
}

module.exports = RateLimit;


var self = this;
function RateLimit(limit, timeWindow){
  this.limit = limit;
  this.timeWindow = timeWindow;
  this.currentLimit = 0;
  this.queue = [];
  self = this;
}

RateLimit.prototype.callWithLimit = function(func, args, context){

  if(self.currentLimit < self.limit){
    self.currentLimit+=1;
    func.apply(context || this, args);

    if(self.currentLimit === self.limit){
      setTimeout(self.reset, self.timeWindow, self);
    }
  }
  else{
    console.log('pushing....')
    self.queue.push([func, args, context]);
  }
}

RateLimit.prototype.reset = function(){
  console.log(self.queue)
  
  self.currentLimit = 0;
  var currentLength = self.queue.length;
  var item, i = 0;
  while(i < currentLength){
    item = self.queue.pop()
    self.callWithLimit(item[0], item[1], item[2]);
    i+=1;
  }
}

module.exports = RateLimit;
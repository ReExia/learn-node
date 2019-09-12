let tools = {
    hello:() => {
      return "hello";
    },
    add:(x,y) => {
        return x + y;
    }
};

exports.hello = tools.hello;
exports.add = tools.add;

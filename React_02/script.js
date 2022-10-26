import { Table } from './Table.js';

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: "turtle", icon: "\uD83D\uDC22" }, { type: "octopus", icon: "\uD83D\uDC19" }, { type: "fish", icon: "\uD83D\uDC20" }, { type: "flamingo", icon: "\uD83E\uDDA9" }, { type: "penguin", icon: "\uD83D\uDC27" }];

var changeImg = function changeImg() {
  return "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg";
};

export var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(Table, { list: animals })
));
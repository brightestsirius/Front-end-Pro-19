var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var title = "Hello, world!!!";
var animals = ["cat", "dog", "lion"];
var numbers = [10, 20, 30];
var isTrue = false;

var styles = { color: "green", fontSize: "13px" };
if (isTrue) styles.fontStyle = "italic";

var classList = ["active", "special"];

var classListLast = ["active"];
isTrue && classListLast.push("special");

// setTimeout(() => {
//     animals.push(`tiger`);
//     console.log(animals);
// }, 1000);

// function List({list, color="orange", age}){
//     return list 
//     && <ul style={ {color: color} }>
//         {list.map((item,index) => <li key={index}>{item}</li>)}
//         {age && <li>{age}</li>}
//     </ul>
// }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = {
            x: 1,
            list: _this.props.list ? _this.props.list : []
        };


        setTimeout(function () {
            // this.state.list.push(`newElement`);
            // console.log(this.state.list);

            _this.setState({
                list: _this.state.list.concat(["newElement"])
            });
        }, 1000);

        setTimeout(function () {
            // this.state.list.push(`newElement`);
            // console.log(this.state.list);

            _this.setState({
                list: _this.state.list.slice(1)
            });
        }, 2000);
        return _this;
    }

    _createClass(List, [{
        key: "render",
        value: function render() {
            console.log(this);

            var _props = this.props,
                list = _props.list,
                _props$color = _props.color,
                color = _props$color === undefined ? "orange" : _props$color,
                age = _props.age;


            return list && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "ul",
                    { style: { color: color } },
                    this.state.list.map(function (item, index) {
                        return React.createElement(
                            "li",
                            { key: index },
                            item
                        );
                    }),
                    age && React.createElement(
                        "li",
                        null,
                        age
                    )
                ),
                React.createElement("hr", null),
                React.createElement(
                    "h3",
                    null,
                    "x: ",
                    this.state.x
                )
            );
        }
    }]);

    return List;
}(React.Component);

var Friends = function (_React$Component2) {
    _inherits(Friends, _React$Component2);

    function Friends(props) {
        _classCallCheck(this, Friends);

        var _this2 = _possibleConstructorReturn(this, (Friends.__proto__ || Object.getPrototypeOf(Friends)).call(this, props));

        _this2.state = {
            list: _this2.props.list
        };


        console.log(_this2);

        var removeFriend = setInterval(function () {

            _this2.setState({
                list: _this2.state.list.slice(0, -1)
            });

            _this2.state.list.length === 0 && clearInterval(removeFriend);
            console.log("In inerval", _this2.state.list);
        }, 1000);
        return _this2;
    }

    _createClass(Friends, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                null,
                this.state.list.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        item
                    );
                })
            );
        }
    }]);

    return Friends;
}(React.Component);

var Spysok = function (_React$Component3) {
    _inherits(Spysok, _React$Component3);

    function Spysok(props) {
        _classCallCheck(this, Spysok);

        var _this3 = _possibleConstructorReturn(this, (Spysok.__proto__ || Object.getPrototypeOf(Spysok)).call(this, props));

        _this3.state = Object.assign({}, _this3.props);


        setTimeout(function () {
            _this3.setState({
                list: [].concat(_toConsumableArray(_this3.state.list), [1000]),
                color: "orange"
            });
        }, 1000);
        return _this3;
    }

    _createClass(Spysok, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentDidMount");
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            console.log("componentDidUpdate");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "ul",
                { style: { color: this.state.color } },
                this.state.list.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        item
                    );
                })
            );
        }
    }]);

    return Spysok;
}(React.Component);

var data = [10, 20, 30];

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(Spysok, { list: data, color: "blue" })
));

// Component + State

// root.render(
//   <React.Fragment>
//     <h1>{title}</h1>
//     <hr></hr>
//     {10 + 20}
//     <ul>
//       {animals.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     <ul>
//       {numbers.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     {isTrue && <h2>Conditional text</h2>}
//     <hr></hr>
//     {isTrue ? <h2>Conditional text</h2> : <h3>Conditional text</h3>}
//     <hr></hr>
//     <h3 style={styles}>Style example</h3>
//     <hr></hr>
//     <h3 className="active">Class example</h3>
//     <hr></hr>
//     <h3 className={classList.join(` `)}>Class example</h3>
//     <hr></hr>
//     <h3 className={`active ${isTrue && `special`}`}>Class example last</h3>
//     <hr></hr>
//     <h3 className={classListLast.join(` `)}>Class example last</h3>
//     <button>Hello, world</button>
//   </React.Fragment>
// );
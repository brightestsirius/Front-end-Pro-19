const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const title = `Hello, world!!!`;
const animals = [`cat`, `dog`, `lion`];
const numbers = [10, 20, 30];
const isTrue = false;

const styles = { color: `green`, fontSize: `13px` };
if (isTrue) styles.fontStyle = `italic`;

const classList = [`active`, `special`];

const classListLast = [`active`];
isTrue && classListLast.push(`special`);

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

class List extends React.Component{

    constructor(props){
        super(props);

        setTimeout(() => {
            // this.state.list.push(`newElement`);
            // console.log(this.state.list);

            this.setState({
                list: this.state.list.concat([`newElement`])
            })

        },1000);

        setTimeout(() => {
            // this.state.list.push(`newElement`);
            // console.log(this.state.list);

            this.setState({
                list: this.state.list.slice(1)
            })

        }, 2000);
    }

    state = {
        x: 1,
        list: this.props.list ? this.props.list : []
    }

    render(){
        console.log(this);

        let {list, color="orange", age} = this.props;

        return list 
            && 
            <React.Fragment>
                <ul style={ {color: color} }>
                    {this.state.list.map((item,index) => <li key={index}>{item}</li>)}
                    {age && <li>{age}</li>}
                </ul>
                <hr></hr>
                <h3>x: {this.state.x}</h3>
            </React.Fragment>
    }
}

class Friends extends React.Component{
    constructor(props){
        super(props);

        console.log(this);

        const removeFriend = setInterval(() => {

            this.setState({
                list: this.state.list.slice(0,-1)
            });

            this.state.list.length===0 && clearInterval(removeFriend);
            console.log(`In inerval`, this.state.list);

        }, 1000);
    }

    state = {
        list: this.props.list
    }

    render(){
        return <ul>
            {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    }
}

class Spysok extends React.Component{
    constructor(props){
        super(props);

        setTimeout(() => {
            this.setState({
                list: [...this.state.list, 1000],
                color: `orange`
            });
        }, 1000);
    }

    state = Object.assign({}, this.props)

    componentDidMount(){
        console.log(`componentDidMount`);
    }

    componentDidUpdate(){
        console.log(`componentDidUpdate`);
    }

    render(){
        return <ul style={{color: this.state.color}}>
            {this.state.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    }
}

const data = [10,20,30];

root.render(
    <React.Fragment>
        <Spysok list={data} color="blue"></Spysok>
    </React.Fragment>
)

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
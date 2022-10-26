import {getRandomInt} from './script.js';

export class Table extends React.Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //     this.state.styleItem = { color: `green`, fontWeight: `bold` };
    //     console.log(this);

    //     this.setState({
    //         imgSrc: changeImg()
    //     });

    // //   this.setState({
    // //     styleItem: { color: `green`, fontWeight: `bold` },
    // //   });
    // }, 2000);

    const activateItems = setInterval(() => {
      let randomIndex = getRandomInt(0, this.state.listIndex.length); // 3
      let randomItem = this.state.listIndex[randomIndex]; // 3
      console.log(randomItem);

      this.state.list[randomItem].active = true;

      console.log(this.state.list[randomItem], this.state.listIndex);

      this.state.listIndex.splice(randomIndex, 1);

      if (
        this.state.listIndex.length === Math.floor(this.state.list.length / 2)
      ) {
        this.state.borderWidth = `10px`;
      }

      if (!this.state.listIndex.length) {
        clearInterval(activateItems);
        this.state.borderWidth = `20px`;
      }

      this.setState({});
    }, 2000);

    console.log(this.state);
  }

  state = {
    list: this.props.list,
    listIndex: Object.keys(this.props.list),
    styleItem: {},
    imgSrc: `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*`,
    borderWidth: 0,
  };

  render() {
    return (
      <table style={{ borderWidth: this.state.borderWidth }}>
        <tbody>
          {this.state.list.map((item, index) => (
            <tr className={item.active && "active"} key={index}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              <img
                style={{ width: `100px`, height: `100px` }}
                src={this.state.imgSrc}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

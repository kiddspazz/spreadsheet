let doc = document;
let root = doc.getElementById('root');
let numColumns = 12;
let numRows = 100;

let data = [];

for (let i = 0; i < numColumns*numRows; i++) {
  data[i] = i;
}

class Cell extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {

	}

	handleSubmit(e) {

	}

	render() {
		return (
			<div className='cell'>{this.props.data}</div>
		)
	}
}

function Row(props) {
	const cells = props.cells;
	const row = cells.map((cell) =>
		<Cell data={cell.data} key={cell.data}/>
	);

	return row;
}

class Spreadsheet extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		for (let i = 0; i < numRows; i++) {
			let thisRowCells = [];
			for (let j = 0; j < numColumns; j++) {
				thisRowCells[j] = {data: data[i * numColumns + j]}
			}
			console.log(thisRowCells)
			return (
				<Row className='row' cells={thisRowCells} />
			)
		}
	}
}

ReactDOM.render(<Spreadsheet data={data} />, root)


/*

function display(d) {
	for (let i = 0; i < numRows; i++) {
		let div = doc.createElement('div');
		for (let j = 0; j < numColumns; j++) {
			let row = doc.createElement('div');
			row.innerText += `${data[i * numColumns + j]}`;
			row.style = "width: 50px; display: inline-block; text-align: center; border: solid 1px black;";
			div.appendChild(row)
		}
		body.appendChild(div);
	}
}

display(data);

*/

//manipulator

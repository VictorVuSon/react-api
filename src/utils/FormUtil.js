
export default onChange = (e, state) => {
	let target = e.target;
	let name = target.name;
	let value = target.type === 'checkbox' ? target.checked : target.value;
	// this.setState({
	// 	[name]: value
	// });

};
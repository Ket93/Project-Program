import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='Present Value'>Present Value</label>
		<input
			name='Present Value'
			placeholder='Present Value'
			value = {this.state.PresentValue}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='Interest'>Interest</label>
		<input
			name='Interest'
			placeholder='Interest'
			value={this.state.Interest}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='Perodic Payments'>Perodic Payments</label>
		<input
			name='Perodic Payments'
			placeholder='Perodic Payments'
			value={this.state.PerodicPayments}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='Number of Periods'>Number of Periods</label>
		<input
			name='Number of Periods'
			placeholder='Number of Periods'
			value={this.state.NumberofPeriods}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='Assets'>Assets</label>
		<input
			name='Assets'
			placeholder='Assets'
			value={this.state.Assets}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<button>Calculate</button>
		<button>Clear</button>
		</div>
	</form>
	)
}
}

export default Form
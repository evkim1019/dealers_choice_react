import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      companyList: [],
      employeeList: []
    }
    this.findEmployee = this.findEmployee.bind(this)
    this.goHome = this.goHome.bind(this)
  }
  async componentDidMount(){
    const _companyList = await Axios.get('/api/companies')
    const companyList = _companyList.data
    this.setState({ companyList })
  }
  async findEmployee(companyId){
    const _employeeList = await Axios.get(`/api/employees/${companyId}`)
    const employeeList = _employeeList.data
    console.log(employeeList);
    this.setState({ employeeList })
  }
  async goHome(){
    this.setState( { employeeList: [] } );
  }

  render(){
    return(
      <div>
        { this.state.employeeList.length === 0 ? 
        <ul>{this.state.companyList.map(company => <li key={company.id} onClick = { () => this.findEmployee(company.id) } >{company.name}</li>)}</ul>
        : <ul><li class="goHome" onClick={ this.goHome } >Home</li>{this.state.employeeList.map(employee => <li key={employee.id} >{employee.name}</li>)}</ul>
        } 
      </div>
    
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
export default App;
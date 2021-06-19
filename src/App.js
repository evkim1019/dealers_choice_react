import React from 'react';
import Axios from 'axios';
import Side from './Side';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      companyList: [],
      employeeList: [],
      cityList: [],
      selectedCompany: ''
    }
    this.findEmployee = this.findEmployee.bind(this)
    this.goHome = this.goHome.bind(this)
  }
  async componentDidMount(companyId){
    const _companyList = await Axios.get('/api/companies')
    const companyList = _companyList.data
    const _cityList = await Axios.get(`/api/cities/${companyId}`)
    const cityList = _cityList.data
    this.setState({ companyList, cityList })
  }

  async findEmployee(companyId){
    const _employeeList = await Axios.get(`/api/employees/${companyId}`)
    const employeeList = _employeeList.data;
    const _companyList = await Axios.get('/api/companies')
    const companyList = _companyList.data
    const selectedCompany = await companyList.map(company => { if (company.id === companyId) return company.name})
    this.setState({ employeeList, selectedCompany: selectedCompany })
  }
  async goHome(){
    this.setState( { employeeList: [], selectedCompany: '' } );
  }

  render(){
    console.log(this.state.cityList[2])
    return(
      <div>
        <Side goHome={ this.goHome }/>

        { this.state.employeeList.length === 0 ? 
        <ul>{this.state.companyList.map(company => <li key={company.id} onClick = { () => this.findEmployee(company.id) } >{company.name} <em> ----- in {
          `${this.state.cityList.map(city => company.id === city.companyId ? city.name : null ).join('') }`
          }</em></li>)}</ul>

        : <ul><li id="headline">{this.state.selectedCompany} Employee List</li>{this.state.employeeList.map(employee => <li key={employee.id} >{employee.name}</li>)}</ul>
        } 
      </div>
    
    )
  }
}

export default App
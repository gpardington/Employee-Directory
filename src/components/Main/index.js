import React, { Component } from "react";
import Headings from "./Headings";
import Table from "./Table";
import Search from "../../Search";
import API from "../../../utils/API";

class DataArea extends Component {
  state = {
    search: "",
    users: [{}],
    filteredUsers: [{}],
    sort: "descend",
  };

  headings = [
    { hname: "", width: 15%, sort: "descend" },
    { hname: "Name", width: 25%, sort: "descend" },
    { hname: "Phone", width: 20%, sort: "descend" },
    { hname: "Email", width: 25%, sort: "descend" },
    { hname: "DOB", width: 15%, sort: "descend" },
  ];

  componentDidMount() {
    API.getUsers().then((response) => {
      this.setState({
        users: response.data.results,
        filteredUsers: response.data.results,
      });
    });
  }

  //Handles input filed when typing in the search box
  handleInputChange = (event) => {
    //Grabs search value entered into the search box
    const newSearch = event.target.value.toLowerCase();
    //Updates the search state
    this.setState({ search: newSearch });
    //Current user list
    const users = this.state.users;
    //Filters users to those containing matching values entered in search box
    const filtered = users.filter(
      (item) => 
        item.name.first.toLowerCase().includes(newSearch) ||
        item.name.last.toLowerCase().includes(newSearch) ||
        item.phone.includes(newSearch) ||
        item.dob.date.slice(0, 10).includes(newSearch) 
    );
    //Updates the filtered users to the page
    this.setState({ filteredUsers: filtered });
  };

// A-Z sort fuctionaility will go below

render() {
  return (
    <>
    <SearchForm handleInputChange={this.handleInputChange} />
    <table className="table table-striped table-hover mt-5">
      <Headings headings={this.headings} handleSort={this.handleSort} />
      <Table users={this.state.filteredUsers} />
    </table>
    </>
  );
}
}

export default DataArea;
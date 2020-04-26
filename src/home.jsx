import React, { Component } from "react";

class Home extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/cmBMeTdZQi?indent=2", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res2) => {
        console.log(res2);
        this.setState({ list: res2 });
      });
  }

  render() {
    console.log("Rendered");
    return (
      <React.Fragment>
        <h2>This is home page for the application</h2>
        <section>
          JavaScript is a single-threaded programming language which means only
          one thing can happen at a time. That is, the JavaScript engine can
          only process one statement at a time in a single thread.
        </section>
        <p>So without further ado, Let’s get started :)</p>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Balance</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Eye Color</th>
              <th>Favorite-Fruit</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {this.state.list.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.balance}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>{item.eyeColor}</td>
                <td>{item.favoriteFruit}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Home;

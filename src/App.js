import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      txt: "",
    };
  }

  storetxt = (e) => {
    this.setState({ txt: e.target.value });
  }
  storeAdd = (e) => {
    let its = this.state.items;
    let newits = this.state.txt;
    its.push(newits)
    this.setState({ items: its });
  }

  delete =(i)=>{
alert(i);
let originalval=this.state.items;
originalval.splice(i,1);
this.setState({items:originalval});
  }

  render() {
    return (
      <div>
        <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h6 className="mb-3">Todo List</h6>
                    <form className="d-flex justify-content-center align-items-center mb-4">
                      <div className="form-outline flex-fill">
                        <input
                          type="text"
                          id="form3"
                          placeholder="What do you need to do today?"
                          className="form-control-lg"
                          onChange={this.storetxt}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary btn-lg ms-2"
                        onClick={this.storeAdd}
                      >
                        Add
                      </button>
                    </form>
                    <ul className="list-group mb-0">
                      {this.state.items.map((val, ind) => (
                        <li
                          key={ind}
                          className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                        >
                          <div className="d-flex align-items-center">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue=""
                              aria-label="..."
                            />
                            {val}
                          </div>
                          <a
                            href="#!"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={()=>{this.delete(ind)}}
                          >
                            <i className="fas fa-times text-primary" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>{this.state.txt}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getEmployee, updateEmployees } from "../../action/index";
import "./Home.css";
import { states } from "../../Constant/constant";
import { Button } from "antd";

class Home extends Component {
  componentDidMount() {
    const { fetchEmployees } = this.props;
    fetchEmployees();
  }

  handleOnclick = (id, name) => {
    const { updateEmployees } = this.props;
    updateEmployees(id, { states: name });
  };

  render() {
    const { employee, history } = this.props;

    return (
      <div className="list-employee">
        <div className="create-employee">
          <Button
            type="primary"
            onClick={() => {
              history.push("/create");
            }}
          >
            Create New Employee
          </Button>
        </div>

        <div className="list-employee-content">
          
          {employee.map((employe) => (
            <Fragment key={employe.id}>
              <div className="d-flex">
                <div><strong>Employee Name: </strong>{employe.name}</div>
                <div>
                  <div className="breadcrumb">
                    <ul className="breadcrumb__list">
                      {states.map((item) => (
                        <li
                          key={item.label}
                          onClick={() =>
                            this.handleOnclick(employe.id, item.label)
                          }
                          className={
                            item.label === employe.states ? "active" : ""
                          }
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div><strong>Annual Salary: </strong>{employe.salary}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(getEmployee()),
  updateEmployees: (id, payload) =>
    dispatch(updateEmployees({ id, ...payload })),
});

const mapStateToProps = ({ employee }) => {
  return { ...employee };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));

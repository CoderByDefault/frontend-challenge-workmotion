import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createEmployee } from "../../action/employee";
import { requiredRule } from "../../utlis/forms";
import { Form, Input, Button, Row } from "antd";
import notify from "../toaster";

class NewEmployee extends Component {
  componentDidMount() {}

  handleOnclick = (id, name) => {};
  formRef = React.createRef();

  render() {
    const { history } = this.props;

    return (
      <>
        <Row justify="center" style={{marginTop: "10px", backgroundColor: "#f0f8ff"}}>
          <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 100 }}
          initialValues={{ remember: true }}
          autoComplete="off"
            layout={"horizontal"}
            ref={this.formRef}
            onFinish={async (values) => {
              const response = await createEmployee({
                ...values,
                states: "ADDED",
              });
              if (response) {
                history.push("/");
              } else {
                notify("error while createing", "error");
              }
            }}
          >
            <Form.Item
              name="id"
              rules={[requiredRule("this field is required")]}
              label="Employee ID "
            >
              <Input type="number" placeholder="Enter employee ID" />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[requiredRule("this field is required")]}
              label="Employee Name "
            >
              <Input placeholder="Enter Employee Name" />
            </Form.Item>
            <Form.Item
              name="salary"
              rules={[requiredRule("this field is required")]}
              label="Annual Salary"
            >
              <Input type="number" placeholder="Enter Employee Salary" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button
                className="mr-10"
                onClick={() => {
                  history.push("/");
                }}
              >
                Back
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = ({ employee }) => {
  return { ...employee };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewEmployee));

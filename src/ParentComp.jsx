import React from "react";
import StudentList from "./StudentList";

class ParentComp extends React.Component {
  state = {
    studentList: ["Cedric", "Jun", "Risa", "James"],
    isLoading: true
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("aaaa");
      this.setState({ isLoading: false });
    }, 3000);
  }
  render() {
    return (
      <StudentList
        studentList={this.state.studentList}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default ParentComp;

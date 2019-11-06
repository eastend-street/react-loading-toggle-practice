import React from "react";

class StudentList extends React.Component {
  render() {
    const { studentList, isLoading } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <ul>
          {studentList.map(student => {
            return <li>{student}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default StudentList;

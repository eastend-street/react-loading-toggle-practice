import React from "react";

class StudentList extends React.Component {
  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <ul>
          <li>aaaaaaaaa</li>
        </ul>
      </>
    );
  }
}

export default StudentList;

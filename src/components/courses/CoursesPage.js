import React from 'react'

class CoursesPage extends React.Component {

    state = {
        course: {
            title:""
        }
    };

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    };

    handleSubmit = event => {
        event.preventDefault();
        alert(this.state.course.title);
    }

    render() {
        return(
            // Good practice to place the handleSubmit here so users can submit the form by clicking ENTER
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add courses</h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.value}
                />
                <input type="submit" value="save" />
            </form>
        );
    }
}

export default CoursesPage
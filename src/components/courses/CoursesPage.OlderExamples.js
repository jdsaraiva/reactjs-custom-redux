import React from 'react'

class CoursesPageOld extends React.Component {
//const CoursePages = () => {

    //constructor(props){
    //    super(props)
    // this.state = {
        state = {
           course: {
               title:""
           }
        };

        // DO: this allocate the bind only once, best for performance
        //this.handleChange = this.handleChange.bind(this);
    //}

    // Best DO: classfields, arrow functions inherit the binding context of their enclosing scope
    handleChange = event => {
    //handleChange(event){

        const title = {...this.state.course.title, title: event.target.value};
        this.setState({title: title});

    }

    render() {
        return(
            <form>
                <h2>Courses</h2>
                <h3>Add courses</h3>
                <input
                    type="text"
                    // DONT's: This will allocate the binding on every render, mitigates performance
                    //onChange={this.handleChange.bind(this)}
                    value={this.state.course.value}
                />
                <input type="submit" value="save" />
            </form>
      );
    }
}

export default CoursesPageOld
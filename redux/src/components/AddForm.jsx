import React, { Component } from 'react'

 class AddForm extends Component {
    
     state = {
       title:'',
       body:''
     }

  render() {

     const onChange = (e)=>{
       this.setState({[e.target.name]:e.target.value})
     }
     const onSubmit = (e) =>{
       e.preventDefault();
       console.log(this.state.title)
       console.log(this.state.body)
     }
    return (
      <form onSubmit={onSubmit}>
        <h1>Redux</h1>
        <input type="text" value={this.state.title} name="title" onChange={onChange} />
        <input type="text" value={this.state.body} name="body" onChange={onChange} />
        <button type="submit">submit</button>
        </form>
    )
  }
}

export default AddForm

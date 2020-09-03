import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'

 class StreamForm extends Component {

    renderError({error,touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>

                </div>
            )
        }
    }

    renderInput =({label,input,meta})=>{
        // console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
         
            {this.renderError(meta)}
            </div>
        )
    }
   


    onSubmit = (formValues)=>{
              this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="title" label="Enter Title" component={this.renderInput} />
                <Field name="description" label="Enter Description" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues)=>{
    const errors ={};
    if(!formValues.title){
        errors.title ="you must enter a title"
    }
    if(!formValues.description){
        errors.description = "you must enter a description"
    }
    return errors;
}


export default reduxForm({
    form:'streamForm',
    validate:validate
})(StreamForm);



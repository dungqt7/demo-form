import React from 'react';
import { reduxForm, Field } from 'redux-form';
const foods = ['pizza', 'tacos', 'nachos', 'hot dogs'];
const DemoForm  = ({handleSubmit,reset, pristine, submitting, valid}) => {
  return (
    <form onSubmit = {handleSubmit(val => console.log(val))}>
        <label htmlFor="first-name">Your first name:</label>
        <Field
                name="firstName"
                type="text"
                component="input"
                id="first-name"
                placeholder="Benedict"
        />
      <label htmlFor="food-choice">Food choice</label>
      <Field name="foodChoice" id="food-choice" component="select">
        <option />
        {foods.map(food => {
            return (
                <option key={food} value={food}>
                     {food}
                </option>
            );
        })}
      </Field>
      <button type="submit" disabled={!valid || pristine || submitting}>
        Submit
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </form>
  );
};
export default reduxForm({
    form: 'demoForm'
  })(DemoForm);
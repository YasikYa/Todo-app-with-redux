import React from "react";
import { Field, reduxForm } from "redux-form";
import { createTodo } from "../../store/TodoForm/actions";

const todoForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="TODO:"
          />
        </div>
      </div>
      <div>
        <label>DeadLine</label>
        <div>
          <Field
            name="deadline"
            component="input"
            type="text"
            placeholder="Till:"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

const submit = (values, dispatch) => {
    dispatch(createTodo(values));
}

export default reduxForm({
    form: 'todo',
    onSubmit: submit
  })(todoForm)

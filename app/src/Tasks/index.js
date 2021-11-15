// Tasks component
import * as React from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import useApi from "../auth/useApi";

// had to change name of file to get it to work
import "./tasks.scss";

const Tasks = () => {
  // states & imports
  const [tasks, setTasks] = React.useState([]);
  const { loading, apiClient } = useApi();
  // comment
  // load tasks when page loads (works when you put it inside useEffect hook)
  const loadTasks = React.useCallback(
    async () => setTasks(await apiClient.getTasks()),
    [apiClient],
  );
  // addTask func - loads tasks after adding task
  // taskName is more descriptive and similar to apiClient
  const addTask = (taskName) => apiClient.addTask(taskName).then(loadTasks);

  // delete & load task - you could name it anything, but id is more descriptive
  // 'tasks' implies it's an object, when in reality it's just the id
  const deleteTask = (id) => apiClient.deleteTask(id).then(loadTasks);

  React.useEffect(() => {
    // load tasks when page loads
    !loading && loadTasks();
  }, [loading, loadTasks]);

  // when it's loading show nothing, otherwise show tasks/affirmations
  return loading ? null : (
    <section>
      <div className="affirmation-wrapper">
        {/* creating obj w/ 2 attributes - tasks & deleteTasks (you could do "tasks: taskState" tasks(L) = name, tasks(R) is the value) */}
        {/* 'object shorthand syntax' */}
        <TaskList {...{ tasks, deleteTask }} />
        <div className="add-div">
          <AddTask {...{ addTask }} />
        </div>
      </div>
    </section>
  );
};

// TaskList component
const TaskList = ({ tasks, deleteTask }) => {
  const [taskId, setTaskId] = React.useState(); // default is undefined
  // console.log("task id: ", taskId);
  const [errorMessage, setErrorMessage] = React.useState();
  const [errorMessage2, setErrorMessage2] = React.useState();
  // console.log(errorMessage); //
  const [phone, setPhone] = React.useState();
  console.log(phone);
  const { apiClient } = useApi();

  // const updateTask = (id) => {
  //   // making an object
  //   const updatedTask = {
  //     is_default: true,
  //   };
  //   apiClient.updateTask(id, updatedTask);
  // };
  // add phone number when user clicks 'enter phone' btn
  const addPhone = (phoneNum) => {
    if (phone.search(/\+1(\d){10}/) === -1) {
      setErrorMessage2("*Please enter valid 10-digit number with +1 in front");
    } else {
      setErrorMessage2();
      return apiClient.addPhone(phoneNum);
    }
  };
  // console.log("phone: ", phone); - how to only print
  // // handleSubmit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   return fetch("");
  // };
  // add something that validates that the taskId is defined; if not, throw error
  // refactoring this short-hand arrow function to (w/ implicit return/no curly braces) to have curly braces & a body/return
  const sendSMS = (taskId) => {
    if (taskId === undefined) {
      // throw new Error("Please enter valid phone number"); - this is scary
      setErrorMessage('*Please select a Mention before clicking "Send SMS"');
    } else {
      setErrorMessage(); // makes it go away after you make the right selection, and returns to undefined
      return apiClient.sendSMS(taskId);
    }
  };

  return (
    <div>
      <div className="table-wrapper">
        <h1 className="table-header">Your Mentions & Affirmations</h1>
        <p className="default">*default</p>
        <table className="center">
          {/* <thead> */}
          <tbody>
            {/* <th colspan="2">Affirmations / Mentions</th> */}
            {tasks.map(({ id, name }) => (
              <tr key={id}>
                <td className="text-center">
                  {/* by giving the radio buttons the same name, you can only check one at a time */}
                  {/* I want to take the id & pass it into taskId state, so it can be used to set id of default */}
                  <input
                    type="radio"
                    name="default"
                    value={id}
                    onChange={(e) => setTaskId(e.target.value)}
                    className="checkbox"
                  />
                  {/* <input type="checkbox" id="delete" /> */}
                  <p className="affirmation-text">{name}</p>
                </td>

                <td className="delete-column">
                  {/* you have access to id from tasks */}

                  <button className="delete-btn" onClick={() => deleteTask(id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* </thead> */}
        </table>
        {/* when you click 'delete' is deletes task*/}
        <div className="buttons">
          {/* <button className="default-btn" onClick={() => updateTask(taskId)}>
            Set as Default
          </button> */}

          {/* pops up when you click 'Get SMS' */}
          <Popup
            className="pop"
            trigger={<button className="enter-phone-btn">Enter Phone</button>}
            modal
          >
            <p className="phone-text">
              Add +1 before number, and don't include dashes
            </p>
            <div className="popup">
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="phone-input"
                placeholder="+15555555555"
              />

              <button className="phone-btn" onClick={() => addPhone(phone)}>
                Enter Phone
              </button>

              {errorMessage2 && <p className="error-2">{errorMessage2}</p>}
            </div>
          </Popup>
          <button className="get-sms" onClick={() => sendSMS(taskId)}>
            Get SMS
          </button>
        </div>
        {/* error for when user doesn't make a selection before hitting 'Get SMS'*/}
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="select-div">
          <p className="select-text">
            *Want to receive SMS texts of your favorite Mention?
          </p>
          <p className="select-text-2">
            Select a Mention above, enter your Phone No. and click 'Get SMS'
          </p>
        </div>
      </div>
    </div>
  );
};

const AddTask = ({ addTask }) => {
  const [task, setTask] = React.useState("");

  const canAdd = task !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="center">
      <p className="table-p">* Scroll down in table to view more Mentions</p>

      <form {...{ onSubmit }}>
        <label>
          <textarea
            onChange={(e) => setTask(e.currentTarget.value)}
            value={task}
            placeholder="Enter Affirmation/Mention"
          />
        </label>
        <button className="add-btn" disabled={!canAdd}>
          Add Mention
        </button>
      </form>
    </div>
  );
};

export default Tasks;

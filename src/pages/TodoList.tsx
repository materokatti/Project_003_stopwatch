import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import styled from "styled-components";
import {
  fetchTask,
  postFetchTasks,
  deleteFetchTasks,
  putFetchTasks,
} from "../data/fetch";
import {Header} from "../components/Header";
import AddTask from "../components/AddTast";
import Tasks from "../components/Tasks";
// import About from "../components/About";
// import Footer from "../components/Footer";

export const TodoList = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<any>({});

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTask();
      setTasks(tasksFromServer);
      console.log("cdm: ", tasksFromServer);
    };
    getTasks();
  }, []);

  console.log("tasks:", tasks);

  const addTask = async (task: any[]) => {
    const data = await postFetchTasks(task);

    setTasks([...tasks, data]);
  };

  const deleteTask = async (id: number) => {
    const res = await deleteFetchTasks(id);
    res.status === 200
      ? setTasks(tasks.filter((task: any) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  const editTask = async (id: number, editData: string) => {
    const taskToEdit = await fetchTask(id);
    const updateTask = {...taskToEdit, text: editData};

    const data = await putFetchTasks(id, updateTask);

    setTasks(
      tasks.map((task: any) =>
        task.id === id ? {...task, text: data.text} : task
      )
    );
    console.log("tasks", tasks);
  };

  const toggleChecker = async (id: number) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = {...taskToToggle, checker: !taskToToggle.checker};

    const data = await putFetchTasks(id, updateTask);

    setTasks(
      tasks.map((task: any) =>
        task.id === id ? {...task, checker: data.checker} : task
      )
    );
  };

  return (
    <Router>
      <ListContainer>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          title='Todo List'
        />
        <Route
          path='/todo'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleChecker}
                  onEdit={editTask}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          )}
        />
        {/* <Route path='/about' component={About} />
        <Footer /> */}
      </ListContainer>
    </Router>
  );
};

const ListContainer = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
`;

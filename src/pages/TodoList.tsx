import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import styled from "styled-components";
import {fetchTasks, postFetchTasks} from "../data/fetch";
import {Header} from "../components/Header";

export const TodoList = () => {
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const addTask = async (task: Array<any>) => {
    const data = await postFetchTasks(task);

    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <ListContainer>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          title='Task Tracker'
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
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        {/* <Footer /> */}
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

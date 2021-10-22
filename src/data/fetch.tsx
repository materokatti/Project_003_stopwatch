export const fetchTask = async (id?: number) => {
  const res = await fetch(`http://localhost:5000/tasks/${id ? id : ""}`);
  const data = await res.json();

  return data;
};

export const postFetchTasks = async (task: Array<any>) => {
  const res = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();

  console.log(JSON.stringify(task), task);
  return data;
};

export const deleteFetchTasks = async (id: number) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });
  return res;
};

export const putFetchTasks = async (id: number, updateTask: any) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updateTask),
  });

  const data = await res.json();

  return data;
};

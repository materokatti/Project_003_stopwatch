export const fetchTasks = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  const data = await res.json();

  return data;
};

export const postFetchTasks = async (task: Array<any>) => {
  const res = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();

  return data;
};

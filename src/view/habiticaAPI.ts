// import fetch from "node-fetch";

import { Task } from "src/createTask";

export async function getStats(username: string, credentials: string) {
  const url = "https://habitica.com/export/userdata.json";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
      "x-api-user": username,
      "x-api-key": credentials,
    },
  });
  return await response;
}

export async function scoreTask(
  username: string,
  credentials: string,
  taskID: string,
  direction: string
) {
  const url = "https://habitica.com/api/v3/tasks/"
    .concat(taskID)
    .concat("/score/")
    .concat(direction);
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
      "x-api-user": username,
      "x-api-key": credentials,
    },
  });
  return response;
}
export async function makeCronReq(username: string, credentials: string) {
  const url = "https://habitica.com/api/v3/cron";
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
      "x-api-user": username,
      "x-api-key": credentials,
    },
  });
  return response;
}
export async function costReward(
  username: string,
  credentials: string,
  taskID: string,
  direction: string
) {
  const url = "https://habitica.com/api/v4/tasks/"
    .concat(taskID)
    .concat("/score/")
    .concat(direction);
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
      "x-api-user": username,
      "x-api-key": credentials,
    },
  });
  return response;
}
export async function scoreChecklistItem(
  username: string,
  credentials: string,
  checklistItemID: string,
  taskID: string
) {
  const url = "https://habitica.com/api/v3/tasks/"
    .concat(taskID)
    .concat("/checklist/")
    .concat(checklistItemID)
    .concat("/score");
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
      "x-api-user": username,
      "x-api-key": credentials,
    },
  });
  return response;
}
export async function postTask(
  username: string,
  credentials: string,
  task: Task
) {
  const url = "https://habitica.com/api/v3/tasks/user";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
      "x-api-user": username,
      "x-api-key": credentials,
    },
    body: task.stringify,
  });

  return response;
}

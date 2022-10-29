// class TaskFactory {
//   constructor(parameters) {}

import { stringify } from "querystring";

//   checkType(type: String) {
//     if (type === Task.types.todo) {
//     }
//     if (type === Task.types.daily) {
//     }
//     if (type === Task.types.habit) {
//     }
//     if (type === Task.types.reward) {
//     }
//   }

//   createTodo({ params }) {}
// }

export class Task {
  #text: String;
  #tags: String[];
  #alias: String;
  #attribute: String;
  #checklist: [];
  #collapseChecklist: boolean;
  #notes: String;
  #priority: Number;
  #reminders: String[];
  #everyX: Number;
  #startDate: Date;

  // TODO: Add verifiers

  constructor({ text, tags }) {
    this.text = text;
    this.tags = tags;
    // this.alias = params.alias;
    // this.checklist = params.checklist;
    // this.#collapseChecklist;
  }

  /**
   * The text to be displayed for the task
   */
  get text() {
    return this.#text;
  }
  set text(text) {
    this.#text = text;
  }

  get tags() {
    return this.#tags;
  }
  set tags(tags) {
    this.#tags = tags;
  }

  static get types() {
    return {
      todo: "todo",
      habit: "habit",
      daily: "daily",
      reward: "reward",
    };
  }

  get stringify() {
    return null;
  }
}

export class Todo extends Task {
  #date: Date;
  constructor(text: String, tags: String[]) {
    super({ text: text, tags: tags });
  }

  get stringify() {
    const data = {
      text: this.text,
      type: Task.types.todo,
    };
    return JSON.stringify(data);
  }
}
// class Habit extends Task {
//   #up: Boolean;
//   #down: Boolean;
//   constructor({ params }) {
//     super();
//   }
// }
// class Daily extends Task {
//   #frequency: String;
//   #repeat: String;
//   #streak: Number;
//   #daysOfMonth: Int32Array; // The API Documentation say to use Interger[], not Int32Array
//   #weeksOfMonth: Int32Array; // <<
//   constructor({ params }) {
//     super();
//   }
// }
// class Reward extends Task {
//   #value: Number;
//   constructor({ params }) {
//     super();
//   }
// }

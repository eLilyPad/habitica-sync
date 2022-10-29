// class TaskFactory {
//   constructor(parameters) {}

import { stringify } from "querystring";

//   checkType(type: string) {
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
  #text: string;
  #type: string;
  #tags: string[];
  #alias: string;
  #attribute: string;
  #checklist: [];
  #collapseChecklist: boolean;
  #notes: string;
  #priority: Number;
  #reminders: string[];
  #everyX: Number;
  #startDate: Date;

  #body: object;

  protected addToBody(key: string, value: any) {
    Object.defineProperty(this.#body, key, value);
    return value;
  }

  protected tryFromBody(key: string) {
    if (this.#body.hasOwnProperty(key)) return this.#body[key];

    // TODO:failed to retrieve from body
    return undefined;
  }

  static get types() {
    return {
      todo: "todo",
      habit: "habit",
      daily: "daily",
      reward: "reward",
    };
  }

  constructor({ text, type, tags }: any) {
    // this.#verifyData({ text, tags });
    this.text = text;
    this.tags = tags;
    this.type = type;
    // this.alias = params.alias;
    // this.checklist = params.checklist;
    // this.#collapseChecklist;
  }

  /**
   * The text to be displayed for the task
   */
  get text() {
    return this.#tryFromBody("text");
  }
  set text(text) {
    //TODO: verify
    this.#text = this.#addToBody("text", text);
  }

  /**
   * Task type, options are: "habit", "daily", "todo", "reward".
   * Allowed values: "habit", "daily", "todo", "reward"
   */
  get type() {
    return this.#type;
  }
  set type(type) {
    //TODO: verify
    this.#type = this.#addToBody("type", type);
  }

  /**
   * Array of UUIDs of tags
   */
  get tags() {
    return this.#tags;
  }
  set tags(tags) {
    //TODO: verify
    this.#tags = this.#addToBody("type", tags);
  }

  get stringify(): BodyInit {
    return JSON.stringify(this.#body);
  }
}

export class Todo extends Task {
  #date: Date;
  constructor({ text, tags }: any) {
    super({ text: text, tags: tags, type: "todo" });
  }

  get date() {
    return this.#date;
  }
  set date(date) {
    this.#date = super.#addToBody("date", date);
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
//   #frequency: string;
//   #repeat: string;
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

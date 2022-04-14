// git clone git@github.com:cypress-io/cypress-realworld-testing-todomvc.git
// npm install -g yarn
// cd cypress-realworld-testing-todomvc
// yarn install
// yarn start
// http://localhost:8888
// practice.js

// yarn add cypress -D
// "scripts": {
//     "cypress:open": "cypress open",
//     "start": "http-server -p 8888 -c-1"
//   },
// yarn start
// yarn cypress:open
// Create a new file called app.spec.js within the cypress/integration directory

// git status
// git add .
// git commit -m "test: add cypress e2e testing framework"
// git remote set-url origin https://github.com/Nodosy/cypress-realworld-testing-todomvc
// git remote -v

describe("React TodoMVC", () => {
  const TODO_ITEM_ONE = "Buy Milk";
  const TODO_ITEM_TWO = "Pay Rent";
  const TODO_ITEM_THREE = "Pickup Dry Cleaning";

  beforeEach(() => {
    cy.visit("http://localhost:8888");
  });

  it("adds a single todo", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("adds three todos", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_TWO}{enter}`);
    cy.get(".new-todo").type(`${TODO_ITEM_THREE}{enter}`);
    cy.get(".todo-list li").should("have.length", 3);
    cy.get(".todo-list li")
      .eq(0)
      .find("label")
      .should("contain", TODO_ITEM_ONE);
  });
  it("adds three todos with command.js", () => {
    cy.createDefaultTodos();
    cy.get(".todo-list li").should("have.length", 3);
    cy.get(".todo-list li")
      .eq(0)
      .find("label")
      .should("contain", TODO_ITEM_ONE);
  });
  it("should append new items to the bottom of the list", () => {
    cy.createDefaultTodos();

    // Todo 1
    cy.get(".todo-list li")
      .eq(0)
      .find("label")
      .should("contain", TODO_ITEM_ONE);

    // Todo 2
    cy.get(".todo-list li")
      .eq(1)
      .find("label")
      .should("contain", TODO_ITEM_TWO);

    // Todo 3
    cy.get(".todo-list li")
      .eq(2)
      .find("label")
      .should("contain", TODO_ITEM_THREE);

    cy.get(".todo-count").contains("3 items left");
  });
  it.only("adds three todos with aliases", () => {
    // cy.createDefaultTodos();
    // cy.get(".todo-list li").should("have.length", 3);

    cy.createDefaultTodos().as("todos");
    cy.get("@todos").should("have.length", 3);
  });
});
// https://learn.cypress.io/testing-your-first-application/testing-what-isnt-there

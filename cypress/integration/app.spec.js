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
});

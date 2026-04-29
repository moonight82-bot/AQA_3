import BasePage from "./BasePage";

class ExpensesPage extends BasePage {
  selectors = {
    addFuelExpenseButton: ".car_add-expense",

    modalTitle: ".modal-title",

    vehicleSelect: "#addExpenseCar",
    mileageInput: "#addExpenseMileage",
    litersInput: "#addExpenseLiters",
    totalCostInput: "#addExpenseTotalCost",

    addButton: ".modal-footer .btn-primary",
  };

  clickAddFuelExpense() {
    this.click(this.selectors.addFuelExpenseButton);
  }

  verifyModalOpened() {
    cy.contains("Add an expense").should("be.visible");
  }

  selectVehicle(vehicle) {
    cy.get(this.selectors.vehicleSelect).select(vehicle);
  }

  fillMileage(value) {
    this.type(this.selectors.mileageInput, value);
  }

  fillLiters(value) {
    this.type(this.selectors.litersInput, value);
  }

  fillTotalCost(value) {
    this.type(this.selectors.totalCostInput, value);
  }

  submit() {
    this.click(this.selectors.addButton);
  }

  addExpense(vehicle, mileage, liters, cost) {
    this.clickAddFuelExpense();
    this.verifyModalOpened();
    this.selectVehicle(vehicle);
    this.fillMileage(mileage);
    this.fillLiters(liters);
    this.fillTotalCost(cost);
    this.submit();
  }

  verifyModalClosed() {
    cy.get(".modal-content").should("not.exist");
  }

  verifyExpenseAdded() {
    cy.contains("USD").should("be.visible");
  }
}

export default ExpensesPage;

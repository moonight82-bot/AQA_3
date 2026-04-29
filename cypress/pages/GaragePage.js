import BasePage from "./BasePage";

class GaragePage extends BasePage {
  selectors = {
    garageTitle: ".panel-page_heading h1",
    addCarButton: ".panel-page_heading .btn-primary",

    addCarModalTitle: ".modal-title",
    carBrand: "#addCarBrand",
    carModel: "#addCarModel",
    carMileage: "#addCarMileage",

    addButton: ".modal-footer .btn-primary",
    cancelButton: ".modal-footer .btn-secondary",
    closeButton: ".modal-header .close",

    garageMenuButton: 'a[href="/panel/garage"]',
    editCarButton: ".car_edit",
    removeCarButton: ".btn-outline-danger",
    garageMenuButton: 'a[href="/panel/garage"]',
    editCarButton: ".car_edit",
  };

  verifyGaragePageOpened() {
    cy.contains("Garage").should("be.visible");
    this.shouldBeVisible(this.selectors.garageTitle);
  }

  clickAddCarButton() {
    this.click(this.selectors.addCarButton);
  }

  verifyAddCarModalOpened() {
    cy.get(this.selectors.addCarModalTitle).should("have.text", "Add a car");
  }

  selectBrand(brand) {
    cy.get(this.selectors.carBrand).select(brand);
  }

  selectModel(model) {
    cy.get(this.selectors.carModel).select(model);
  }

  fillMileage(mileage) {
    this.type(this.selectors.carMileage, mileage);
  }

  submitAddingCar() {
    this.click(this.selectors.addButton);
  }

  addCar(brand, model, mileage) {
    this.clickAddCarButton();
    this.verifyAddCarModalOpened();
    this.selectBrand(brand);
    this.selectModel(model);
    this.fillMileage(mileage);
    this.submitAddingCar();
  }

  verifyAddCarModalClosed() {
    cy.get(this.selectors.addCarModalTitle).should("not.exist");
  }

  openGaragePage() {
    this.click(this.selectors.garageMenuButton);
  }
  clickEditCar() {
    this.click(this.selectors.editCarButton);
  }

  removeCar() {
    cy.contains("Remove car").click();
  }
  
}

export default GaragePage;

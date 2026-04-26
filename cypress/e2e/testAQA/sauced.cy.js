describe("Saucedemo - робота з множинними елементами", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    cy.url().should("include", "/inventory.html");
  });

    it("Беремо перший товар", () => {
    cy.get(".inventory_item").eq(0).should("be.visible");
  
    cy.get(".inventory_item").eq(1).should("be.visible");
    cy.get(".inventory_item").first().should("be.visible");
    cy.get(".inventory_item").last().should("be.visible");
    
    cy.get(".inventory_item").first().find("button").should("be.enabled");
    cy.get('button[id^="add-to-cart"]').first().should("be.enabled");
    cy.get('button[id^="add-to-cart"]').first().should("be.enabled").click();
    cy.contains(".button", "Remove").should("be.visible");

});

    it("Беремо всі товари, крім першого", () => {
    cy.get(".inventory_item").not(":first").should("have.length", 5);
});

    it("Беремо всі товари", () => {
    cy.get(".inventory_item").each(($item, index) => {
        cy.wrap($item).should("be.enabled");
        cy.log (`Це наш ${index + 1} елемент`);
  });

  it("Беремо всі товари і перевіряємо що є кнопки", () => {
    cy.get(".inventory_item").each(($item) => {
      cy.wrap($item).should("be.visible");
      cy.wrap($item).find("button").click();
 });
 

 it("Отримуємо текст заголовка", () => {
  cy.get(".title")
    .invoke("text")
    .should("contain", "Products");
});

it("Фільтруємо назви товарів", () => {
  cy.get(".inventory_item_name")
    .filter((index, el) => el.innerText.includes("Sauce"))
    .should("have.length.greaterThan", 0);
});

});





//     it("Шукаємо поле username по name", () => {
//     cy.visit("https://www.saucedemo.com/");

//     cy.get('[name="user-name"]').should("exist");
// });


});
})
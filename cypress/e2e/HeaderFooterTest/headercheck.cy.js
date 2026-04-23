describe("Перевірка кнопки Sign up", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
  });

  it("Перевіряємо кнопку Sign up", () => {
    cy.get(".hero-descriptor_btn")
      .should("be.visible")
      .and("contain", "Sign up");
  });
});

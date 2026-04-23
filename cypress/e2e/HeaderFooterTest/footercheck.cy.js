describe("Перевірка кнопки Sign up", () => {
  beforeEach(() => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
  });

   it("Перевіряємо Facebook посилання", () => {
     cy.get('a[href*="https://www.facebook.com/Hillel.IT.School"]').should("exist")
       .and("be.visible")
       
   });


   it("Перевіряємо Telegram посилання", () => {
     cy.get('a[href*="https://t.me/ithillel_kyiv"]').should("exist")
       .and("be.visible");
   });
    
  
   it("Перевіряємо YouTube посилання", () => {
    cy.get('a[href*="youtube.com"]')
    .should("exist")
    .and("be.visible");
   });
 
  
  it("Перевіряємо Instagram посилання", () => {
   cy.get('a[href*="https://www.instagram.com/hillel_itschool/"]').should("exist")
     .and("be.visible");

 });

   it("Перевіряємо LinkedIn посилання", () => {
   cy.get('a[href*="https://www.linkedin.com/school/ithillel/"]').should("exist")
     .and("be.visible");


});

   it("Перевіряємо посилання на головну сторінку", () => {
   cy.get('a[href*="https://ithillel.ua"]').should("exist")
     .and("be.visible");


});

it("Перевіряємо посилання на e-mail", () => {
   cy.get('a[href*="mailto:developer@ithillel.ua"]').should("exist")
     .and("be.visible");
});


})
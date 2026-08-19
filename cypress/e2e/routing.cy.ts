import { selectByTestId } from "../helpers/SelectByTestId";

describe("Роутинг", () => {

  (describe("Пользователь НЕ авторизован", () => {
    (it("Переход на главную", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    }),
      it("Переход на главную", () => {
        cy.visit("/profile/1");
        cy.get(selectByTestId("MainPage")).should("exist");
      }),
      it("Переход открывает несуществующий маршрут", () => {
        cy.visit("/asdas");
        cy.get(selectByTestId("NotFoundPage")).should("exist");
      }));
  }),
  
    describe("Пользователь авторизован", () => {
      it("Переход на профиль", () => {
        cy.login("admin", "123");
        cy.visit("/profile/1");
        cy.get(selectByTestId("ProfilePage")).should("exist");
      });
    }));
});

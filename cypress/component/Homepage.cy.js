import Home from "../../pages/index";

context("Homepage Tests",()=>{
  beforeEach(()=>{
    cy.visit("https://localhost:3000/")
  })
  it("displays homepage",()=>{
    cy.mount(<Home></Home>)
  })
})
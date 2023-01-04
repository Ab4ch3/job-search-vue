/* 
  Se me permite colocar dos extensions para achivos de prueba
  .test.js
  .spec.js
*/
import { evenOrOdd } from "@/playground";

/* 
  Describe solo sirve para hacer una separacion & ordenamiento
  de las pruebas. es mas bn para mantener un orden 
 */
describe("Basic math", () => {
  /*  
    "it" se refiere a la interaccion que realizara el usuario
    En este caso que coloque dos numero s
  */
  it("add two numbers", () => {
    /* 
      Expect viene siendo la expectativa de lo que va a hacer la funcion
      y tambien con (.tobe) lo que esperamos q devulva la funcion
    */
    expect(1 + 1).toBe(2); //quiere decir que tiene que ser identico a 2
  });

  it("subtracts two numbers", () => {
    expect(5 - 3).toBe(2);
    expect(10 - 5).toBe(5);
  });

  describe("evenOrOdd", () => {
    describe("When the number is even", () => {
      it("indicate the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("when the number is odd", () => {
      it("indicate the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });
});

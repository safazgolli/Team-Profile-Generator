const Employee = require('../lib/Employee')

describe("Employee", () => {
    it("Should initiate Employee instance", () => {
       const employee = new Employee();
       expect(typeof(employee)).toBe("object");
    
    });   

    it("Should return correct role", () => {
        const employee = new Employee();
        expect (employee.getRole()).toBe("Employee");
     
     }); 

     it("Should return correct parameters", () => {
        const employee = new Employee("Amine" , 4 , "amine@test.com");
        expect (employee.name).toBe("Amine");
        expect (employee.id).toBe(4);
        expect (employee.email).toBe("amine@test.com");
     
     });  

     
     it("Should return correct parameters", () => {
        const employee = new Employee("Amine" , 4 , "amine@test.com");
        expect (employee.getName()).toBe("Amine");
        expect (employee.getId()).toBe(4);
        expect (employee.getEmail()).toBe("amine@test.com");
     
     });  


     it("Should return correct parameters", () => {
        const employee = new Employee("Amine", 5);
        expect (employee.getName()).toBe("Amine");
        expect (employee.getId()).toBe(5);
     
     }); 

     it("Should return correct parameters", () => {
        const employee = new Employee("Amine");
        expect (employee.getName()).toBe("Amine");
     
     }); 



});
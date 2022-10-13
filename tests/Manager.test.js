const Manager = require('../lib/Manager')

describe("Manager", () => {
    it("Should initiate Employee instance", () => {
       const manager = new Manager();
       expect(typeof(manager)).toBe("object");
    
    });   

    it("Should return correct role", () => {
        const manager = new Manager();
        expect (manager.getRole()).toBe("Manager");
     
     }); 

     it("Should return correct parameters", () => {
        const manager = new Manager("Amine" , 4 , "amine@test.com", 15);
        expect (manager.name).toBe("Amine");
        expect (manager.id).toBe(4);
        expect (manager.email).toBe("amine@test.com");
        expect (manager.officeNumber).toBe(15);
        
     
     });  

     
     it("Should return correct parameters", () => {
        const manager = new Manager("Amine" , 4 , "amine@test.com");
        expect (manager.getName()).toBe("Amine");
        expect (manager.getId()).toBe(4);
        expect (manager.getEmail()).toBe("amine@test.com");
     
     });  


     it("Should return correct parameters", () => {
        const manager = new Manager("Amine", 5);
        expect (manager.getName()).toBe("Amine");
        expect (manager.getId()).toBe(5);
     
     }); 

     it("Should return correct parameters", () => {
        const manager = new Manager("Amine");
        expect (manager.getName()).toBe("Amine");
     
     }); 



});
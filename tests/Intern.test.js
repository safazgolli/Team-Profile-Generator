const Intern = require('../lib/Intern')

describe("Intern", () => {
    it("Should initiate Employee instance", () => {
       const intern = new Intern();
       expect(typeof(intern)).toBe("object");
    
    });   

    it("Should return correct role", () => {
        const intern = new Intern();
        expect (intern.getRole()).toBe("Intern");
     
     }); 

     it("Should return correct parameters", () => {
        const intern = new Intern("Amine" , 4 , "amine@test.com", "school");
        expect (intern.name).toBe("Amine");
        expect (intern.id).toBe(4);
        expect (intern.email).toBe("amine@test.com");
        expect (intern.school).toBe("school");
        
     
     });  

     
     it("Should return correct parameters", () => {
        const intern = new Intern("Amine" , 4 , "amine@test.com", "school");
        expect (intern.getName()).toBe("Amine");
        expect (intern.getId()).toBe(4);
        expect (intern.getEmail()).toBe("amine@test.com");
        expect (intern.getSchool()).toBe("school");



     
     });  


     it("Should return correct parameters", () => {
        const intern = new Intern("Amine", 5);
        expect (intern.getName()).toBe("Amine");
        expect (intern.getId()).toBe(5);
     
     }); 

     it("Should return correct parameters", () => {
        const intern = new Intern("Amine");
        expect (intern.getName()).toBe("Amine");
     
     }); 



});
const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    it("Should initiate Employee instance", () => {
       const engineer = new Engineer();
       expect(typeof(engineer)).toBe("object");
    
    });   

    it("Should return correct role", () => {
        const engineer = new Engineer();
        expect (engineer.getRole()).toBe("Engineer");
     
     }); 

     it("Should return correct parameters", () => {
        const engineer = new Engineer("Amine" , 4 , "amine@test.com", 15989028390);
        expect (engineer.name).toBe("Amine");
        expect (engineer.id).toBe(4);
        expect (engineer.email).toBe("amine@test.com");
        expect (engineer.gitHub).toBe(15989028390);
     
     });  

     
     it("Should return correct parameters", () => {
        const engineer = new Engineer("Amine" , 4 , "amine@test.com", 15989028390);
        expect (engineer.getName()).toBe("Amine");
        expect (engineer.getId()).toBe(4);
        expect (engineer.getEmail()).toBe("amine@test.com");
        expect (engineer.getGithub()).toBe(15989028390);
     
     });  


     it("Should return correct parameters", () => {
        const engineer = new Engineer("Amine", 5);
        expect (engineer.getName()).toBe("Amine");
        expect (engineer.getId()).toBe(5);
     
     }); 

     it("Should return correct parameters", () => {
        const engineer = new Engineer("Amine");
        expect (engineer.getName()).toBe("Amine");
     
     }); 



});
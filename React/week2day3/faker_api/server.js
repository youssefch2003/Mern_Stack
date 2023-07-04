const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createRandomCompany = () => {
    const newFake = {
        _id: faker.string.uuid('#'),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newFake;
};
const createRandomUser=()=> { 
    const User={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('###-###-####'),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
}
return User}
    
const newFakeProduct = createRandomCompany();

console.log(newFakeProduct);

// RETURN A NEW USER 
app.get("/api/user/new", (req, res)=>{
    const newUser = createRandomUser();
    console.log(newUser);
    res.json(newUser);
 })

 app.get("/api/companies/new", (req, res)=>{
    const newFakeProduct = createRandomCompany();
    console.log(newFakeProduct);
    res.json(newFakeProduct);
 })
 app.get("/api/user/company", (req, res)=>{
    const newUser1 = createRandomUser();
    const newFakeProduct1 = createRandomCompany();
    console.log(newUser1);
    res.json({newUser1,newFakeProduct1});
 })
 














app.listen( port, () => console.log(`Listening on port: ${port}`) );
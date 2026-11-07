const student = {
    name: "Manish",
    age: 20,
    course: "B.Tech CSE"
};

student = 100;

// ANS. No, because the student variable is declared as a constant using the const keyword. 
// This means that the reference to the object cannot be changed, 
// and attempting to reassign it will result in a TypeError. However, 
// we can still modify the properties of the object itself.
_"Inheritance in JavaScript is a mechanism that allows an object to inherit properties and behaviors from a parent object, or prototype, and to override or extend those properties and behaviors as needed."_

<br/>
Inheritance in JavaScript can be thought of as a family tree, where children inherit characteristics from their parents and grandparents. When a child is born, they inherit certain characteristics from their parents, like their eye color, hair color, and height. They may also inherit certain behaviors or traits, like a talent for music or a tendency to be organized.

<br/>
In the same way, objects in JavaScript can inherit properties and behaviors from a parent object, or prototype. This allows you to create a hierarchy of objects, where objects at lower levels inherit properties and behaviors from objects at higher levels.

<br/>
For example, consider a "Person" prototype that represents people with properties like name, age, and gender, and behaviors like speaking and walking. You can create a new "Person" object like this:

<Code language='javascript'>

const person = Object.create(Person.prototype);
</Code>

This creates a new object called "person" that has the properties and behaviors specified in the "Person" prototype. You can then use this object to represent a specific person, like "Alice", by setting the object's properties:

<Code language='javascript'>

person.name = "Alice";
person.age = 30;
person.gender = "female";
</Code>

Now, suppose you want to create a new type of object called "Student" that represents students at a school. You can use the "Person" prototype as the basis for the "Student" prototype, and add any additional properties or behaviors that are specific to students. For example:

<Code language='javascript'>

function Student() {}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.enroll = function(course) {
&nbsp;console.log(`Enrolling in ${course}`);
}
</Code>

This creates a new "Student" prototype that has all of the properties and behaviors of the "Person" prototype, as well as an additional "enroll" behavior that allows students to enroll in courses. You can then create a new "Student" object like this:

<Code language='javascript'>

const student = Object.create(Student.prototype);
</Code>

This creates a new object called "student" that has all of the properties and behaviors of the "Person" prototype, as well as the additional "enroll" behavior of the "Student" prototype. You can then use this object to represent a specific student, like "Bob", by setting the object's properties:

<Code language='javascript'>

student.name = "Bob";
student.age = 20;
student.gender = "male";
</Code>

You can also use the object's behaviors, like this:

<Code language='javascript'>

student.speak("Hello, my name is Bob!");
student.walk();
student.enroll("Computer Science");
</Code>

In this way, the "Student" object has inherited properties and behaviors from the "Person" prototype, just like a child inherits characteristics from their parents. The "Student" object can also override or extend the inherited properties and behaviors as needed, just like a child may develop their own unique characteristics or traits that are different from their parents.

<br/>
In this way, inheritance in JavaScript allows you to create a hierarchy of objects, where objects at lower levels inherit properties and behaviors from objects at higher levels, and you can override or extend those properties and behaviors as needed. This allows you to reuse code and avoid duplicating functionality, and to create relationships between objects that reflect real-world relationships.

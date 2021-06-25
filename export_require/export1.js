// Para ver como funciona el export, ejecutar el require.js

const me = "Dani";
const you = "WhoKnows";

const object = {
    id: 1,
    name: "Pablo",
    age: 34
};

const theFunc = name => `Hello ${name}, im your friend`;

module.exports = {me, you, object, theFunc};

const person = {
    firstName: 'Alessio',
    lastName: 'Vietri'
};

console.log(person);

const email = 'gino.gino@boolean.careers';
const password = 'gino.gino';

const personTwo = {
    email,                  // Sta cercando di definire una chiave che si chiama email e che ha valore preso dalla variabile email
    password
};

console.log(personTwo);

const personThree = {
    email: email,                  // Sta cercando di definire una chiave che si chiama email e che ha valore preso dalla variabile email
    password: password
};

console.log(personThree);

/* 
    ---------------------------------------------------------
*/

const student = {
    firstName: 'Mario',
    lastName: 'Rossi',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

// console.log(student['firstName'] + ' ' + student['lastName']);
console.log(getFullName(student));
console.log(student.fullName());

const studentTwo = {
    firstName: 'Gino',
    lastName: 'Verdi',
    fullName() { 
        return this.firstName + ' ' + this.lastName;
    }
};

// console.log(studentTwo['firstName'] + ' ' + studentTwo['lastName']);
console.log(getFullName(studentTwo));
console.log(studentTwo.fullName());

function getFullName(person) {
    return person.firstName + ' ' + person.lastName;
}

/* 
    ---------------------------------------------------------
*/

function personConstructor(
    nome,
    cognome,
    email,
    password,
    genere,
    eta,
    colore = 'lightcoral',
    occhiali = false
) {
    const newPerson = {
        firstName: nome,
        lastName: cognome,
        email: email,
        password: password,
        genre: genere,
        age: eta,
        favoriteColor: colore,
        glasses: occhiali,
        fullName() { 
            return this.firstName + ' ' + this.lastName;
        },
        favoriteColorString() {
            return `Il mio colore preferito è ${this.favoriteColor} SEMPRE E COMUNQUE`;
        }
    };

    return newPerson;
}

const nomeDiSimona = prompt('Qual è il nome di Simona?');

const simona = personConstructor(
    nomeDiSimona,
    'Caruso',
    'mariavirgola@simona.com',
    'fozzapalemmo',
    'f',
    35
);

console.log(simona);
console.log(simona.fullName());
console.log(simona.favoriteColorString());

const michela = personConstructor(
    'Michela',
    'De Stefano',
    'destefano@michela.com',
    'forzamagica',
    'f',
    25,
    'green',
    true
);

console.log(michela);
console.log(michela.fullName());
console.log(michela.favoriteColorString());
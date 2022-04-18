const students = [
    {
        name: "Veronica",
        marks: [8, 9, 9, 10, 8]
    },
    {
        name: "Ana",
        marks: [7, 8, 9, 10, 9]
    },
    {
        name: "Nastea",
        marks: [9, 9, 9, 7, 9]
    },
    {
        name: "David",
        marks: [6, 7, 8, 8, 7]
    },
    {
        name: "Dina",
        marks: [5, 8, 8, 6, 8]
    },
    {
        name: "Inga",
        marks: [7, 7, 8, 8, 9]
    },
    {
        name: "Vlad",
        marks: [8, 9, 10, 10, 7]
    },
    {
        name: "Elvira",
        marks: [9, 8, 7, 9, 9]
    },
    {
        name: "Max",
        marks: [8, 7, 9, 5, 7]
    },
    {
        name: "Cristian",
        marks: [1, 1, 4, 7, 7]
    }
];

//media elevilor
const media =[];
for (let i = 0; i < students.length; i++) {
    media[i] = (students[i].marks.reduce((sum, number) => sum + number, 0)/students[i].marks.length);
    console.log(students[i].name + ": " + media[i])
}

//elevi cu note <5
for (let i = 0; i < media.length; i++) {
    if(media[i]<5) console.log("Elev restantier: " + students[i].name)
}

//elevul cu nota max sau min
console.log("Elevul cu nota minima: " + students[media.indexOf(Math.min.apply(Math, media))].name);
console.log("Elevul cu nota maxima: " + students[media.indexOf(Math.max.apply(Math, media))].name);   

//lista sortata de elevi
media.sort();
media.reverse();
console.log("Lista sortata descrescator");
for (let i = 0; i < media.length; i++) {
    for (let j = 0; i < students.length; j++) {
        if (media)console.log(students[i].name);
    }//nu am finalizat
}

//elevi cu nota mai mare decat media clasei
let mediaClasei = (media.reduce((sum, number) => sum + number, 0)/media.length).toFixed(2);
for (let i = 0; i < media.length; i++) {
    if(media[i]>mediaClasei) console.log("Elev cu nota > " + mediaClasei + " (media clasei): " + students[i].name)
}
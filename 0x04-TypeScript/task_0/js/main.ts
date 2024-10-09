interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentProfileA: Student = {
  firstName: "David",
  lastName: "Mugisha",
  age: 45,
  location: "Kenya",
};

const studentProfileB: Student = {
  firstName: "Esther",
  lastName: "Kiga",
  age: 20,
  location: "Tanzania",
};

const studentsList: Array<Student> = [studentProfileA, studentProfileB];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create the header row
const headRow: HTMLTableRowElement = thead.insertRow(0);
const student1Head: HTMLTableCellElement = headRow.insertCell(0);
const student2Head: HTMLTableCellElement = headRow.insertCell(1);

student1Head.innerHTML = "First Name";
student2Head.innerHTML = "Location";
table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const student1: HTMLTableCellElement = row.insertCell(0);
  const student2: HTMLTableCellElement = row.insertCell(1);

  student1.innerHTML = student.firstName;
  student2.innerHTML = student.location;
});

table.append(tbody);
body.appendChild(table);

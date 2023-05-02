// Get the table element containing the base stats
const table = document.querySelector('.roundy').querySelectorAll('table')[1];

// Get the table rows
const rows = table.querySelectorAll('tr');

// Extract the base stats from the rows
const hp = parseInt(rows[1].querySelectorAll('td')[1].textContent);
const attack = parseInt(rows[2].querySelectorAll('td')[1].textContent);
const defense = parseInt(rows[3].querySelectorAll('td')[1].textContent);
const spAtk = parseInt(rows[4].querySelectorAll('td')[1].textContent);
const spDef = parseInt(rows[5].querySelectorAll('td')[1].textContent);
const speed = parseInt(rows[6].querySelectorAll('td')[1].textContent);

// Log the extracted base stats to the console for verification
console.log(`HP: ${hp}`);
console.log(`Attack: ${attack}`);
console.log(`Defense: ${defense}`);
console.log(`Special Attack: ${spAtk}`);
console.log(`Special Defense: ${spDef}`);
console.log(`Speed: ${speed}`);
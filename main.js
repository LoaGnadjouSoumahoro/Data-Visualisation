// // Créez un élément canvas pour le graphique
// var canvas = document.createElement('canvas');
// canvas.id = 'monGraphique';

// // Récupérez le titre principal (h1) par son ID
// var titrePrincipal = document.querySelector('#firstHeading');

// // Insérez l'élément canvas après le titre principal
// titrePrincipal.parentNode.insertBefore(canvas, titrePrincipal.nextSibling);

// // Obtenez le contexte 2D du canvas
// var ctx = canvas.getContext('2d');

// // Définissez les données pour votre graphique
// var data = {
//   labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
//   datasets: [
//     {
//       label: 'Ventes mensuelles',
//       data: [50, 65, 80, 72, 90],
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       borderColor: 'rgba(75, 192, 192, 1)',
//       borderWidth: 1,
//     },
//   ],
// };

// // Créez une instance de Chart.js avec les données et les options
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: data,
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//   },
// });


/*
Insertion de la balise  canvas en dessous du h1
*/ 

// const table2 = document.querySelector('#Homicides');
// const newP = document.createElement('p');
// newP.textContent = 'BONJOUR A TOUS';
// let canvasTable2 = document.createElement('canvas');

/*
La méthode insertAdjacentHTML attend une chaîne de texte HTML en tant que deuxième argument, mais vous lui avez passé un élément DOM (newP). Pour ajouter l'élément newP en tant que paragraphe en dessous de l'élément h3 avec l'id "#Homicides", vous pouvez utiliser la méthode insertAdjacentElement 
*/

// table2.insertAdjacentElement("beforeend",newP );

// const table2 = document.querySelector('#Homicides');
// const canvasTable2 = document.createElement('canvas');

// const barChart = new Chart(canvasTable2, {
// type: "bar",
// data: ['Bruxel', 'Leuven', 'Aarschoot', 'Diest'],
// datasets: [{
// data: [240, 120, 140, 110],

// }]
// })
// table2.insertAdjacentElement("beforeend", barChart)



// const h4Element2 = document.querySelector('#Homicides');
// const canvasTable2 = document.createElement('canvas');

// const barChart = new Chart(canvasTable2, {
//   type: "bar",
//   data: {
//     labels: ['Bruxel', 'Leuven', 'Aarschoot', 'Diest'],
//     datasets: [{
//       label: 'Nombre de Homicides',
//       data: [240, 120, 140, 110],
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       borderColor: 'rgba(75, 192, 192, 1)',
//       borderWidth: 1
//     }]
//   }
// });

// h4Element2.insertAdjacentElement("afterend", canvasTable2);





// const h4Element2 = document.querySelector('#Homicides');
// const canvasTable2 = document.createElement('canvas');

// const barChart = new Chart(canvasTable2, {
//   type: 'bar',
//   data: {
//     labels: data.labels,
//     datasets: [
//       {
//         label: '2007-09',
//         data: data.data2007,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)'
//       },
//       {
//         label: '2010-12',
//         data: data.data2010,
//         backgroundColor: 'rgba(255, 99, 132, 0.2)'
//       }
//     ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });


// h4Element2.insertAdjacentElement("afterend", canvasTable2);


const table2 = document.querySelector('#table2');
const canvasTable2 = document.createElement('canvas');

canvasTable2.setAttribute("id", "idCanvas2");
const parentTables = document.getElementById('mw-content-text');

parentTables.insertBefore(canvasTable2, table2);


// Extraire les données du tableau HTML

let countries = [];
let years = [];
let dataDigits = [];

const topTable2 = table2.rows[0];
for(let i = 2; i< topTable2.cells.length; i++){
  years.push(topTable2.cells[i].textContent);

}

for(let i = 1; i< table2.rows.length; i++){
  const row = table2.rows[i];
  countries.push(row.cells[1].textContent);
  
  const dataCell = [];
  for( let j = 2; j< row.cells.length; j++){
    dataCell.push(parseFloat(row.cells[j].textContent.replace(",", ".")));
  }
  dataDigits.push(dataCell);
  
}

tableData = { countries, years, dataDigits };
const ctx = document.getElementById("idCanvas2");

// Créer le graphique Chart.js
const barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: tableData.countries,
    datasets: tableData.years.map((year, index) => ({
      label: year,
      data: tableData.dataDigits.map(digit => digit[index]),
      borderWidth: 1
    }))
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Insérer le graphique sous la balise h4





// // firstHeading

// Récupérez le tableau HTML
// const table = document.getElementById('table2');

// // Récupérez les données du tableau
// const labels = [];
// const data2007_09 = [];
// const data2010_12 = [];

// const rows = table.querySelectorAll('tbody tr');
// rows.forEach(row => {
//   const cells = row.querySelectorAll('td');
//   if (cells.length === 3) {
//     labels.push(cells[1].textContent);
//     data2007_09.push(parseInt(cells[2].textContent, 10));
//     data2010_12.push(parseInt(cells[3].textContent, 10));
//   }
// });

// // Créez le graphique à barres
// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: labels,
//     datasets: [
//       {
//         label: '2007-09',
//         data: data2007_09,
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: '2010-12',
//         data: data2010_12,
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });

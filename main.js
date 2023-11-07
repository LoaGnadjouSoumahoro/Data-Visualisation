// /* Insertion du graphique au-dessus du tableau 1 */
const table1 = document.querySelector('#table1');
const parentTables = document.getElementById('mw-content-text');
const canvasTable1 = document.createElement('canvas');
canvasTable1.setAttribute("id", "idCanvas1");
parentTables.insertBefore(canvasTable1, table1);



/*  Insertion du graphe au dessus du tableau 2 start*/ 

const table2 = document.querySelector('#table2');
const canvasTable2 = document.createElement('canvas');
canvasTable2.setAttribute("id", "idCanvas2");
parentTables.insertBefore(canvasTable2, table2);



const tableFunction1 = ()=>{

    // // Extraire les données du tableau HTML (même code que pour table2)
  let countries1 = [];
  let years1 = [];
  let dataDigits1 = [];

  const topTable1 = table1.rows[1];
  for(let x = 2; x < topTable1.cells.length; x++) {
    years1.push(topTable1.cells[x].textContent);
  }

  console.log(topTable1);
  for(let x = 2; x < table1.rows.length; x++) {
    const row = table1.rows[x];
    countries1.push(row.cells[1].textContent);
    
    const dataCell = [];
    for(let y = 2; y < row.cells.length; y++) {
      dataCell.push(parseFloat(row.cells[y].textContent.replace(",", ".")));
    }
    dataDigits1.push(dataCell);
  }
  tableData = { countries1, years1, dataDigits1 };
  const ctx1 = document.getElementById("idCanvas1");
  console.log(tableData); 

  // Créer le graphique Chart.js pour table1
  const barChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: countries1,
      datasets: years1.map((year, index) => ({
        label: year,
        data: dataDigits1.map(digit => digit[index]),
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

}




const tableFunction2 = ()=>{
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
}
tableFunction1();
tableFunction2();










  










// console.log(canvasTable1);



/*  Insertion du graphe au dessus du tableau 1 End*/ 



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

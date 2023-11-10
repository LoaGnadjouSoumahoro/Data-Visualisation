// Création du canvas pour Chart3
const canvasH1 = document.createElement('canvas');
canvasH1.id = 'ChartH1';
const ctxH1 = canvasH1.getContext('2d');
const heading1 = document.getElementById('firstHeading');
heading1.parentNode.insertBefore(canvasH1, heading1);

// Initialisation des données pour ChartH1
let dataPointsH1 = [];
let chartH1 = new Chart(ctxH1, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Data Points',
            data: dataPointsH1,
            fill: false,
            borderColor: 'black',
            tension: 0.1
        }]
    },
});

// Fonction pour récupérer les données JSON via Ajax et les afficher pour ChartH1
function fetchDataH1() {
    let url = "https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPointsH1.length + 1) + "&ystart=" + (dataPointsH1[dataPointsH1.length - 1]) + "&length=1&type=json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                dataPointsH1.push(data[0][1]);
                chartH1.data.labels.push(data[0][0]);
                chartH1.update();
            }
            console.log(dataPointsH1);
        })
        .catch(error => console.error("Error fetching data: " + error));

    setTimeout(fetchDataH1, 1000);
}

// Appeler la fonction pour récupérer et afficher les données pour ChartH1
fetchDataH1();




// /* Insertion du graphique au-dessus  */
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
// Appeler la fonction une première fois pour afficher le graphique initial



tableFunction1();
tableFunction2();
updateCanvasH1Chart();


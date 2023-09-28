
function createTable() {
    //Write your code here
  let table = document.getElementById("myTable");
  let row= prompt("Input number of rows");
  let column = prompt("Input number of columns");

  table.innerHTML = ""; 
	for(let i=0; i<row; i++)
	{
      let rowcell=document.createElement("tr");
	     for(let j=0; j<column; j++)
           {
			let cell = document.createElement("td");
		    
		    rowcell.appendChild(cell);   
			cell.innerHTML="Row-"+i+" "+"Column-"+j;
		    }
		table.appendChild(rowcell);
	}
	
}

function makeDiagonalRed(table) {
  let rows = table.rows;

  for (i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.background = 'red';
  }
}

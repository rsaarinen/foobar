$(document).ready(function() {
  $("#nextBtn").css("background-color", "red");
  $("#resetBtn").css("background-color", "blue");

  $("#nextBtn").on("click", function() {
    $("body").css("background-color", "red");
  } );

  $("#resetBtn").on("click", function() {
    $("body").css("background-color", "blue");
  } );

  setPlayerNames();
  const table = generateTable();

  function setPlayerNames() {
    const names = $("#names");
    for (let i = 0; i < players.plrs.length; i++) {
      const tr = $("<tr></tr>");
      names.append(tr);
      const td = $("<td></td>");
      tr.append(td);
      td.text(players.plrs[i]);
    }
  }

  function generateTable() {
    const table = $("#results");
    for (let i = 0; i < players.plrs.length; i++) {
      const tr = $("<tr></tr>");
      table.append(tr);
      for (let h = 0; h < players.plrs.length; h++) {
        const td = $("<td></td>");
        if (i === h) td.css("background-color", "black");
        tr.append(td);
      }
    }
    return table;
  }
});

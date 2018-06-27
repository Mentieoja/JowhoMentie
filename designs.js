// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    const tableHeight = $("#inputHeight").val(); // the number of columns
    const tableWidth = $("#inputWeight").val(); //the number of rows
    const makeTable = $("#pixelCanvas");
    makeTable.children().remove();
    for (let i = 0; i < tableHeight; i++) {
        makeTable.append("<tr></tr>");
        for (let j = 0; j < tableWidth; j++) {
            makeTable.children().last().append("<td></td>");//appends the columns to the rows
        }
    }
}
$("#submitButton").click(function(e) { //triggers the  create canvas button
    e.preventDefault();
    makeGrid();

    $("#clearButton").click(function(e) { //clears the clicked cells and returns the background color
        e.preventDefault();
        $("td").css("background", "#fff5ee");
    });
    $("td").click(function() { //Selects the value of the color picker and apply it to the table cell
        $(this).css("background-color", $("#colorPicker").val());
    });
});

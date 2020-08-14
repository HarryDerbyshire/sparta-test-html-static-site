        var gamesTable = document.getElementById("gamesTable");
        
        for(let i = 0; i < 10; i++){
            var row = gamesTable.insertRow(i + 4);
            var gameName = row.insertCell(0);
            var gameType = row.insertCell(1);
            var gameDeveloper = row.insertCell(2);
            var deleteButton = row.insertCell(3);

            gameName.innerText = "I'm a game" + i;
            gameType.innerText = "I am a game type" + i;
            gameDeveloper.innerText = "I am a developer" + i;
            deleteButton.innerText = "X";
        }

        var buttonToAdd = document.createElement("ButtonAdd");
        buttonToAdd.setAttribute("id", "ButtonAdd");
        
        function addButton(){
            var buttonToAdd = document.createElement("ButtonAdd");
            buttonToAdd.setAttribute("id", "ButtonAdd");
            buttonToAdd.innerHTML = "Helloooo";
            return buttonToAdd;
        }

        var tbl = document.getElementById("gamesTable");
        if (tbl != null) {
            for (let i = 0; i < tbl.rows.length; i++) {
                for (let j = 0; j < tbl.rows[i].cells.length; j++) {
                    tbl.rows[i].cells[j].onclick = function () {  
                        //if (tbl.rows[i].cells[j].innerText == "X"){                       
                            //alert("Deleted row " + i + " and cell " + j );
                            //document.getElementById("gamesTable").deleteRow(2);
                            //getval(this);
                        //}
                        //tbl.deleteRow(i);
                        getval(this, i);
                    } 
                }
            }
        }

        function getval(cel, index) {
            if (cel.innerHTML == "X"){
                //alert("Deleted")
                console.log("Row " + index);
                document.getElementById("gamesTable").deleteRow(index);
            }
            //document.getElementById("gamesTable").deleteRow(cel.row);
            //alert(cel.innerHTML);
        }

        function addEntry(){

        }
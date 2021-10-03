function addUser() 
{
    Player1 = document.getElementById("player1_text").value;
    Player2 = document.getElementById("player2_text").value;

    localStorage.setItem("Player1",Player1);
    localStorage.setItem("Player2",Player2);
    window.location = "game_page.html";
}
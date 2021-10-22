var count=1
function calc()
{
    var guess=Math.floor(Math.random()*6)+1
    var p1=parseInt(document.getElementById('pl1').value)
    var p2=parseInt(document.getElementById('pl2').value)
    if(count%2 == 1)
    {
        p1=p1+guess;
        document.getElementById('dice').value=guess;
        document.getElementById('pl1').value=p1;
        count=count+1;

        if(p1>=30)
        {
            document.getElementById('result').innerHTML="Player 1 wins!";
        }
    }
    else
    {
        p2=p2+guess;
        document.getElementById('dice').value=guess;
        document.getElementById('pl2').value=p2;
        count=count+1;
        if(p2>30)
        {
            document.getElementById('result').innerHTML="Player 2 Wins!";
        }
    }
}
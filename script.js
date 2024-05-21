var agora = new Date();
var hora = agora.getHours();
var min = agora.getMinutes();

var msg = document.querySelector('div#hora');
var img = document.querySelector('div#img');

/*var imgM = '<img src="img/manha.jpeg" alt="manha">'
var imgT = '<img src="img/tarde.jpg" alt="tarde">'
var imgN = '<img src="img/noite.jpg" alt="noite">'*/

        if (hora < 12)
            {
                document.body.style.background = 'rgb(86, 193, 255)'
                msg.innerHTML += '<p>Agora são '+hora+' horas e '+min+' minutos.</p>';
                msg.innerHTML += '<p>Bom dia!</p>';
                img.innerHTML += '<img src="img/manha.jpeg" alt="manha">';
            } else if (hora < 18)
                {
                    document.body.style.background = 'rgb(197, 108, 0)'
                    msg.innerHTML += '<p>Agora são '+hora+' horas e '+min+' minutos.</p>';
                    msg.innerHTML += '<p>Boa tarde!</p>';
                    img.innerHTML += '<img src="img/tarde.jpg" alt="tarde">';
                } else 
                    {
                        document.body.style.background = 'rgb(4, 4, 55)'
                        msg.innerHTML += '<p>Agora são '+hora+' horas e '+min+' minutos.</p>';
                        msg.innerHTML += '<p>Boa noite!</p>';
                        img.innerHTML += '<img src="img/noite.jpg" alt="noite">';
                    }
document.addEventListener('DOMContentLoaded', function(){
    const verde = document.getElementById('verde');
    const azul = document.getElementById('azul');
    const rosa = document.getElementById('rosa');
    const roxo = document.getElementById('roxo');
    const preto = document.getElementById('preto');
    const laranja = document.getElementById('laranja');

    verde.addEventListener('click', function(){
        var buttons = document.querySelectorAll('button')

        document.body.style.backgroundColor = "#2dc653"
        document.querySelector('header').style.backgroundColor = "#1a7431"
        document.querySelector('footer').style.backgroundColor = "#1a7431"
        document.querySelector('div').style.backgroundColor = "#1a7431"
        
        buttons.forEach(function(button){
            button.style.backgroundColor = "#6ede8a"
            button.style.border = "1px solid #b7efc5"
        })
    })

    azul.addEventListener('click', function(){
        var buttons = document.querySelectorAll('button')

        document.body.style.backgroundColor = "#00b4d8"
        document.querySelector('header').style.backgroundColor = "#0077b6"
        document.querySelector('footer').style.backgroundColor = "#0077b6"
        document.querySelector('div').style.backgroundColor = "#0077b6"
        
        buttons.forEach(function(button){
            button.style.backgroundColor = "#48cae4"
            button.style.border = "1px solid #023e8a"
        })
    })

    rosa.addEventListener('click', function(){
        var buttons = document.querySelectorAll('button')

        document.body.style.backgroundColor = "#ff4d6d"
        document.querySelector('header').style.backgroundColor = "#c9184a"
        document.querySelector('footer').style.backgroundColor = "#c9184a"
        document.querySelector('div').style.backgroundColor = "#c9184a"
        
        buttons.forEach(function(button){
            button.style.backgroundColor = "#ff758f"
            button.style.border = "1px solid #ffb3c1"
        })
    })

    roxo.addEventListener('click', function(){
        var buttons = document.querySelectorAll('button')

        document.body.style.backgroundColor = "#6818a5"
        document.querySelector('header').style.backgroundColor = "#4a0a77"
        document.querySelector('footer').style.backgroundColor = "#4a0a77"
        document.querySelector('div').style.backgroundColor = "#4a0a77"
        
        buttons.forEach(function(button){
            button.style.backgroundColor = "#bd68ee"
            button.style.border = "1px solid #6818a5"
        })
    })

    preto.addEventListener('click', function(){
        var buttons = document.querySelectorAll('button')

        document.body.style.backgroundColor = "#1b1b1e"
        document.querySelector('header').style.backgroundColor = "#000000"
        document.querySelector('footer').style.backgroundColor = "#000000"
        document.querySelector('div').style.backgroundColor = "#000000"
        
        buttons.forEach(function(button){
            button.style.backgroundColor = "#66666e"
            button.style.border = "1px solid #2d232e"
        })
    })

    laranja.addEventListener('click', function(){
        var buttons = document.querySelectorAll('button')

        document.body.style.backgroundColor = "#f77f00"
        document.querySelector('header').style.backgroundColor = "#ff5400"
        document.querySelector('footer').style.backgroundColor = "#ff5400"
        document.querySelector('div').style.backgroundColor = "#ff5400"
        
        buttons.forEach(function(button){
            button.style.backgroundColor = "#faa307"
            button.style.border = "1px solid #9d0208"
        })
    })
})
document.querySelector('#btn1').onclick = () =>{
    document.getElementById('teamT').style.opacity = '0'
    document.getElementById('teamP').style.opacity = '0'
    document.getElementById('strategyT').style.opacity = '0'
    document.getElementById('strategyP').style.opacity = '0'
    document.getElementById('knowledgeT').style.opacity = '0'
    document.getElementById('knowledgeP').style.opacity = '0'

    setTimeout(()=>{
        document.getElementById('title').style.opacity = '100'
    }, 800)
    
}

document.querySelector('#btn2').onclick = () =>{
    document.getElementById('title').style.opacity = '0'
    document.getElementById('strategyT').style.opacity = '0'
    document.getElementById('strategyP').style.opacity = '0'
    document.getElementById('knowledgeT').style.opacity = '0'
    document.getElementById('knowledgeP').style.opacity = '0'

    setTimeout(()=>{
        document.getElementById('teamT').style.opacity = '100'
        document.getElementById('teamP').style.opacity = '100'
    }, 800)
}

document.querySelector('#btn3').onclick = () =>{
    document.getElementById('title').style.opacity = '0'
    document.getElementById('teamT').style.opacity = '0'
    document.getElementById('teamP').style.opacity = '0'
    document.getElementById('knowledgeT').style.opacity = '0'
    document.getElementById('knowledgeP').style.opacity = '0'

    setTimeout(()=>{
        document.getElementById('strategyT').style.opacity = '100'
        document.getElementById('strategyP').style.opacity = '100'
    }, 800)

}

document.querySelector('#btn4').onclick = () =>{
    document.getElementById('title').style.opacity = '0'
    document.getElementById('teamT').style.opacity = '0'
    document.getElementById('teamP').style.opacity = '0'
    document.getElementById('strategyT').style.opacity = '0'
    document.getElementById('strategyP').style.opacity = '0'

    setTimeout(()=>{
        document.getElementById('knowledgeT').style.opacity = '100'
        document.getElementById('knowledgeP').style.opacity = '100'
    }, 800)

}



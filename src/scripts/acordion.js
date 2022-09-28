var elements = document.getElementsByClassName("acordion__title")

for(let acordion of elements){
    acordion.addEventListener('click', () => {
        const activeAcordion = acordion.parentElement.getAttribute('activeAcordion')
        if( activeAcordion !== acordion.id){            
            acordion.setAttribute('active', 'true')
            const acordionContent = acordion.nextElementSibling
            acordionContent.style.maxHeight = acordionContent.scrollHeight + "px"               
            acordion.parentElement.setAttribute('activeAcordion', acordion.id)
            acordion.children[1].style.transform = "rotate(180deg)"
        } 
        if(activeAcordion || activeAcordion === acordion.id){
            const oldAcordion = document.getElementById(activeAcordion)
            oldAcordion.setAttribute('active', 'false')
            const oldContent = oldAcordion.nextElementSibling
            oldContent.style.maxHeight = '0px'  
            oldAcordion.children[1].style.transform = "rotate(0deg)" 
            if(activeAcordion === acordion.id){
                acordion.parentElement.setAttribute('activeAcordion', '')
            }         
        } 
    })
}


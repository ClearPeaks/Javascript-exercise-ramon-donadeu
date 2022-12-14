
/**
 * @file acordion.js is the file that controls the acordions in the page, 
 * creating an eventListener that opens and closes the desired acordion
 * 
 */

/**
 * Acordion Module
 * @modules Acordion
 */

/**
 * @type {Object}
 */
var listOfAcordions = document.getElementsByClassName("acordion__title")

/**
 * Shows the content from the acordion recieved
 * @param {Object} acordion - Object that conains an acordion
 */
function openAcordion (acordion) {

    acordion.setAttribute('active', 'true')
    const acordionContent = acordion.nextElementSibling
    acordionContent.style.maxHeight = acordionContent.scrollHeight + "px"               
    acordion.parentElement.setAttribute('openedAcordion', acordion.id)
    acordion.children[1].style.transform = "rotate(180deg)"

}

/**
 * Hide the content from the acordion with the ID recieved
 * @param {String} openedAcordionID - String that contains the ID of the active acordion
 */
function closeAcordion(openedAcordionID){

    const oldAcordion = document.getElementById(openedAcordionID)
    oldAcordion.setAttribute('active', 'false')
    const oldContent = oldAcordion.nextElementSibling
    oldContent.style.maxHeight = '0px'  
    oldAcordion.children[1].style.transform = "rotate(0deg)" 

}

for(let acordion of listOfAcordions){
    acordion.addEventListener('click', () => {
        const openedAcordionID = acordion.parentElement.getAttribute('openedAcordion')
        if( openedAcordionID !== acordion.id){            
            openAcordion(acordion)
        } 
        if(openedAcordionID || openedAcordionID === acordion.id){
                closeAcordion(acordion, openedAcordionID)   
                if(openedAcordionID === acordion.id){
                    acordion.parentElement.setAttribute('openedAcordion', '')
                }  
        } 
    })
}


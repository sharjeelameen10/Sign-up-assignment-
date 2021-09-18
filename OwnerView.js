const onLoadFunc = () =>{
    document.getElementById('subCont1').style.visibility = 'visible'
    document.getElementById('subCont2').style.visibility = 'hidden'
    document.getElementById('subCont1').style.height = '0px'
}

const cssChange = () => {
    document.getElementById('subCont1').style.visibility = 'hidden'
    document.getElementById('subCont2').style.height = '0px'
    document.getElementById('subCont2').style.visibility = 'visible'
}

const showCss = () => {
    document.getElementById('subCont1').style.visibility =  'visible'
    document.getElementById('subCont1').style.height = '0px'
    document.getElementById('subCont2').style.visibility =  'hidden'
}
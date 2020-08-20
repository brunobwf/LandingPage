// Identificar o clique no menu

const menuItens = document.querySelectorAll('.menu a')

// Verificar a distancia entre o alvo e o topo

function getScrollTopByHref(element) {
   const id = element.getAttribute('href')
   return document.querySelector(id).offsetTop
}

// Animar o scroll até o alvo

function scrollToPosition(to) {
      window.scroll({
      top: to,
      behavior: "smooth"
   })
   smoothScrollTo(0, to)
}

// Verificar se o item foi clicado e fazer a referencia para o alvo dele

function scrollToIdOnClick(event) {
   event.preventDefault()
   const to = getScrollTopByHref(event.currentTarget) - 80
   scrollToPosition(to)
}

menuItens.forEach(item => {
   item.addEventListener('click', scrollToIdOnClick)
})


function enviar() {
    let nome = document.querySelector('#txtNome')
    let email = document.querySelector('#txtEmail')
    let conheceu = document.querySelector('#mensagem')
    let data = document.querySelector('#txtDate')
    let estado = document.querySelector('#estado')
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || nome.value == '' || conheceu.value == '' || data.value == '' || estado.options[estado.selectedIndex].value == '') {
       alert('Preencha todos os campos antes de enviar o formulário!')
       return false;
    } else {
       alert('Formulário enviado com sucesso!')
       nome.value ="";
       email.value = "";
       conheceu.value ="";
       data.value=null;
    }
 }


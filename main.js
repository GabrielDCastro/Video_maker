const readline = require('readline-sync') //buscador

function start(){
	
	const content ={}
	content.searchTerm=returnSearchTerm()
	content.prefix=returnPrefix()

	function returnSearchTerm(){ //função para pegar o que vai ser pesquisado
		return readline.question('type a Wikipedia search tem:')
	}

	function returnPrefix(){
		const prefixes = ['who is', 'What is', 'The histoy of']
		const selectedPrefix=readline.keyInSelect(prefixes, 'Choose one')
		const selectedPrefixtext = prefixes[selectedPrefix]//pega o index do prefixo e retorna seu valor em string que escrevemos como opções

		return selectedPrefixtext
	}

	console.log(content)
}

start();
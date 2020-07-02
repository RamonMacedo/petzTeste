import React from 'react'
import Table from '../components/table'

const API_URL = "https://my-json-server.typicode.com/ArthurSantos20/petzTeste";

export default class Main extends React.Component {

	fetch(`${API_URL}/cursos`)
  	.then(response => response.json())
 	.then(cursos => listaCursos(cursos))

	function listaCursos(cursos) {
	  cursos.forEach(({titulo, url}) => {
	      const a = criaNovaAncoraComURL(titulo, url);
	      const li = criaNovoItemComAncora(a);

	      $cursos.append(li);
	  })
	}

	render() {
		return (
			<div>
				<Table />
			</div>
		)	
	}
}
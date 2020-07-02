Documentação do Projeto para Teste Petz:

O documento está baseado na pasta src, a pasta public contém somente o manifest.json, index.html e a imagem usada para o ícone da página.

A pasta src está dividida entre 2 arquivos em sua raiz e 4 sub-pastas. 

Os arquivos em sua raiz são:
- index.css, utilizado apenas para definições gerais do body, pois todos os outros estilos foram baseados em styled-components.
- index.js, utilizado para o uso do react-router. React-Router é responsável pela passagem entre páginas da aplicação.

A primeira sub-pasta presente se chama components, dentro da mesma existem os seguintes arquivos:
- background.js: Fundo opaco clicável dos modais.
- button.js: Estilos para os botões.
- card.js: Card principal da tela de detalhes dos produtos.
- filter.js: Seta e container usados para os filtros na tela principal.
- header.js: Header com logo da empresa.
- image.js: Estilos para os usos de imagens.
- label.js: Estilos para os usos de texto.
- table.js: Tabela usada na página principal.

A segunda sub-pasta contém as imagens usadas durante o projeto.

A terceira sub-pasta contém os seguintes modais:
- modalDelete: Modal de confirmação que aparece antes do usuário deletar um valor.
- modalSuccess: Mensagem de sucesso ao realizar a exclusão de um valor.

A quarta sub-pasta contém as seguintes páginas:
-details: Tela de detalhes.
-main: Tela inicial da aplicação.
-page404: Página 404.
# Projeto Estações do Ano

Uma aplicação web interativa e visualmente apelativa que apresenta a estação do ano correspondente ao mês selecionado pelo utilizador, complementada por uma paleta de cores representativa e dinâmica. O projeto foi desenvolvido considerando a divisão das estações para o Hemisfério Sul.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Funcionalidades Implementadas

-   **Seleção Mensal**: Permite ao utilizador escolher um mês específico através de um menu suspenso (`<select>`).
-   **Identificação Sazonal**: Determina e exibe automaticamente a denominação da estação do ano (Primavera, Verão, Outono, Inverno) com base no mês previamente selecionado.
-   **Destaque Visual Dinâmico**: A imagem representativa da estação correspondente é realçada visualmente através do aumento da sua opacidade e da aplicação de uma ligeira ampliação (escala).
-   **Paleta Cromática Adaptativa**: Apresenta um conjunto de cinco cores que caracterizam a estação vigente.
-   **Animação de Fundo Progressiva**: O plano de fundo da página e da secção de imagens transita suavemente entre as cores da paleta sazonal a cada cinco segundos, proporcionando uma experiência de utilizador mais imersiva.

## Tecnologias Utilizadas

-   **HTML5**: Utilizado para a estruturação semântica do conteúdo da página web.
-   **CSS3**: Empregue para a estilização integral da interface, com recurso a funcionalidades modernas, nomeadamente:
    -   **Variáveis CSS (Custom Properties)**: Para a gestão centralizada e de fácil manutenção do tema cromático.
    -   **Flexbox e Grid Layout**: Para a construção de layouts responsivos e alinhamento preciso dos elementos.
    -   **Transitions e Transforms**: Para a criação de animações fluidas nos componentes visuais.
-   **JavaScript (Vanilla JS - ES6+)**: Responsável pela totalidade da lógica aplicacional e interatividade:
    -   Manipulação do DOM (Document Object Model) para atualização de elementos textuais e classes CSS.
    -   Gestão de eventos (tais como `change` no seletor de mês e `load` ao carregar a página).
    -   Utilização da função `setInterval` para implementar o efeito de rotação de cores.

## Estrutura do Projeto

A organização dos ficheiros e diretórios do projeto segue a estrutura abaixo:


/
├── index.html          # Ficheiro principal contendo a estrutura da página
├── estilos.css         # Folha de estilos para a apresentação visual
├── scripts.js          # Código JavaScript para a lógica e interatividade
└── imagens/
├── primavera.jpg   # Imagem representativa da Primavera
├── verao.jpg       # Imagem representativa do Verão
├── outono.jpg      # Imagem representativa do Outono
└── inverno.jpg     # Imagem representativa do Inverno


## Instruções de Execução

Este projeto é constituído por ficheiros estáticos e não requer um servidor web dedicado nem processos de compilação. Para o executar:

1.  Clone ou descarregue este repositório para o seu ambiente local.
2.  Navegue, através do seu explorador de ficheiros ou terminal, até ao diretório onde o projeto foi guardado.
3.  Abra o ficheiro `index.html` no seu navegador web de preferência (por exemplo, Google Chrome, Mozilla Firefox, Microsoft Edge).

## Créditos das Imagens

As fontes das imagens utilizadas no projeto encontram-se devidamente referenciadas abaixo:

-   [Brasil Escola (Primavera)](https://brasilescola.uol.com.br/geografia/primavera.htm)
-   [Depositphotos (Verão)](https://depositphotos.com/br/photos/ver%C3%A3o-brasil.html)
-   [Brasil Escola (Outono)](https://brasilescola.uol.com.br/geografia/outono.htm)
-   [Escola Kids (Inverno)](https://escolakids.uol.com.br/ciencias/inverno.htm)
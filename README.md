# Estante — Catálogo de Livros

Aplicação de página única desenvolvida para a atividade de Frameworks. O projeto usa React com Vite e apresenta um catálogo de livros com busca em tempo real e cadastro de novos itens.

## Site publicado

O catálogo está disponível em [pablosoares1572.github.io/trabalho-web-2](https://pablosoares1572.github.io/trabalho-web-2/). Cada envio para a branch `main` dispara automaticamente uma nova publicação pelo GitHub Pages.

## Integrante

- Pablo Soares

## Funcionalidades

- Catálogo inicial com 5 livros;
- Busca instantânea por título, autor(a), gênero ou status;
- Cards reutilizáveis para apresentar os livros;
- Formulário para cadastrar um novo livro;
- Atualização imediata da lista após o cadastro;
- Mensagem de estado vazio quando a busca não encontra resultados;
- Layout responsivo para desktop e celular.

## Tecnologias e decisões

- **React:** constrói a interface por componentes e atualiza a tela de forma reativa.
- **Vite:** oferece a estrutura e o servidor de desenvolvimento do projeto.
- **CSS puro:** cria uma interface leve, sem bibliotecas visuais externas.
- **Dados locais:** a atividade não exige banco de dados; por isso, os itens existem apenas enquanto a página está aberta.

## Estrutura de arquivos

```text
src/
├── components/
│   ├── BookCard.jsx       # Card reutilizável que recebe os dados por props
│   ├── BookForm.jsx       # Formulário de cadastro
│   └── SearchBar.jsx      # Campo de busca e contador de resultados
├── data/
│   └── initialBooks.js    # Lista inicial de livros
├── App.jsx                # Componente principal e estado da aplicação
├── index.css              # Estilos globais e responsivos
└── main.jsx               # Ponto de entrada do React
```

## Componentes e props

- `App` é o componente pai: guarda a lista, o termo de busca e distribui as ações para os componentes filhos.
- `SearchBar` recebe `value`, `onChange` e `resultsCount`. Assim, o campo de busca fica separado da lógica do catálogo.
- `BookCard` recebe `title`, `author`, `genre` e `status` via props. O mesmo componente é usado para todos os livros.
- `BookForm` recebe `onAddBook`, função chamada quando o formulário é enviado com dados válidos.

## Estado e reatividade

O projeto utiliza `useState`:

- Em `App.jsx`, `books` armazena a lista de livros e `searchTerm` guarda o texto digitado na busca.
- Em `BookForm.jsx`, `formData` controla os campos do formulário e `error` apresenta uma validação simples.

Ao cadastrar um item, a função `handleAddBook` adiciona o novo objeto ao estado `books` com `setBooks`. Como o estado muda, o React renderiza a lista atualizada imediatamente.

## Filtragem e renderização

Em `App.jsx`, a variável `filteredBooks` usa o método `.filter()` para comparar o termo da busca com título, autor(a), gênero e status. A comparação ignora maiúsculas, minúsculas e acentos.

Depois, `.map()` percorre os livros filtrados e cria um `BookCard` para cada item. Cada card recebe uma `key` única e seus dados por props.

## Como executar

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/PabloSoares1572/trabalho-web-2.git
cd trabalho-web-2
npm install
npm run dev
```

Após iniciar, abra no navegador o endereço mostrado pelo Vite (normalmente `http://localhost:5173`). Para gerar uma versão de produção, execute:

```bash
npm run build
```

## Roteiro breve para apresentação

1. Mostrar a estrutura das pastas e os componentes separados.
2. Executar a aplicação e digitar uma busca para demonstrar a filtragem em tempo real.
3. Adicionar um livro pelo formulário e mostrar que o novo card aparece imediatamente.
4. Abrir `App.jsx` para explicar os estados com `useState`, o `.filter()` e o `.map()`.
5. Abrir `BookCard.jsx` para mostrar o uso de props.

## Desafios enfrentados

- Centralizar a lista de livros no componente pai para que busca e cadastro trabalhem sobre os mesmos dados.
- Manter o formulário controlado e limpar seus campos somente depois que o novo livro é incluído no estado.
- Criar uma busca amigável que encontre palavras com ou sem acentos, como `disponivel` e `disponível`.

## Aprendizados

O projeto reforça a separação de responsabilidades em componentes, o uso de estado local com `useState` e a renderização dinâmica de listas no React.

# Integrante 3 — Raio-X do Código

## Objetivo da minha parte

Nesta etapa eu vou mostrar rapidamente como o código organiza os dados dos livros, faz a busca em tempo real e atualiza a tela quando um novo livro é cadastrado. A aplicação foi feita em **React**, usando componentes separados e o hook `useState`.

Tempo previsto: **2 a 3 minutos**.

## Ordem dos arquivos para abrir no editor

Abra os arquivos nesta ordem, para a explicação ficar natural:

1. `src/App.jsx`
2. `src/components/SearchBar.jsx`
3. `src/components/BookCard.jsx`
4. `src/components/BookForm.jsx`
5. `src/data/initialBooks.js` (opcional, apenas para mostrar os cinco dados iniciais)

## Fala sugerida

> “Agora eu vou mostrar como funciona a parte principal do código. A aplicação foi separada em componentes: `App` controla os dados e a lógica; `SearchBar` cuida da barra de busca; `BookCard` mostra cada livro; e `BookForm` cadastra um novo livro.”

### 1. Estado principal — abrir `src/App.jsx`

Mostre estas linhas no início da função `App`:

```jsx
const [books, setBooks] = useState(initialBooks)
const [searchTerm, setSearchTerm] = useState('')
```

Fala:

> “Aqui usamos `useState`, que é o recurso do React para guardar dados que podem mudar. `books` guarda a lista de livros e começa com os cinco livros do arquivo `initialBooks.js`. `searchTerm` guarda o que a pessoa digita na busca. As funções `setBooks` e `setSearchTerm` são usadas para atualizar esses valores. Quando o estado muda, o React atualiza a interface automaticamente.”

Se quiser apontar os dados iniciais, abra `src/data/initialBooks.js` e mostre que cada livro possui `id`, `title`, `author`, `genre` e `status`.

### 2. Captura da busca — abrir `src/components/SearchBar.jsx`

Primeiro, no `src/App.jsx`, mostre a ligação entre o componente e o estado:

```jsx
<SearchBar
  value={searchTerm}
  onChange={setSearchTerm}
  resultsCount={filteredBooks.length}
/>
```

Depois, em `src/components/SearchBar.jsx`, mostre a assinatura do componente e o campo `input`:

```jsx
export default function SearchBar({ value, onChange, resultsCount }) {
```

```jsx
<input
  id="book-search"
  type="search"
  value={value}
  onChange={(event) => onChange(event.target.value)}
  placeholder="Ex.: Clarice, romance ou disponível"
/>
```

Fala:

> “A barra de busca é um componente separado. Ela recebe três props: o texto atual, uma função para alterar esse texto e a quantidade de resultados. Cada vez que alguém digita, o `onChange` pega o valor do campo e chama a função recebida do `App`. No `App`, essa função é o `setSearchTerm`, então o estado da busca é atualizado na hora.”

### 3. Filtragem com `filter()` — voltar para `src/App.jsx`

Mostre este bloco:

```jsx
const filteredBooks = books.filter((book) => {
  const searchableContent = [book.title, book.author, book.genre, book.status]
    .map(normalizeText)
    .join(' ')

  return searchableContent.includes(normalizedSearchTerm)
})
```

Fala:

> “A filtragem é feita com `filter()`. Para cada livro, o código reúne título, autor, gênero e status, e verifica se esse conteúdo inclui o termo buscado. Por isso a pesquisa funciona em vários campos, como nome do autor, gênero ou status. A função `normalizeText` deixa a busca sem diferença entre maiúsculas, minúsculas e acentos.”

### 4. Renderização com `map()` e props do card — ainda em `src/App.jsx`

Mostre:

```jsx
{filteredBooks.map((book) => (
  <BookCard key={book.id} {...book} />
))}
```

Depois abra `src/components/BookCard.jsx` e mostre:

```jsx
export default function BookCard({ title, author, genre, status }) {
```

E, se houver tempo, estes usos das props:

```jsx
<h3>{title}</h3>
<p className="book-card__author">{author}</p>
<p className="book-card__genre">{genre}</p>
```

Fala:

> “Depois de filtrar, usamos `map()` para criar um card para cada livro encontrado. O `key` usa o `id` para o React identificar cada item da lista. O trecho `{...book}` envia os dados daquele livro para o componente `BookCard`.”

> “No `BookCard`, as props são recebidas por desestruturação: `title`, `author`, `genre` e `status`. É equivalente a receber `props` e acessar `props.title`, por exemplo, mas fica mais direto. Assim, o mesmo componente é reutilizado para todos os livros, mudando apenas as informações recebidas.”

### 5. Cadastro e atualização imediata — abrir `src/components/BookForm.jsx` e voltar a `src/App.jsx`

Em `src/components/BookForm.jsx`, mostre o envio do formulário:

```jsx
function handleSubmit(event) {
  event.preventDefault()

  const book = Object.fromEntries(
    Object.entries(formData).map(([key, value]) => [key, value.trim()]),
  )

  if (Object.values(book).some((value) => !value)) {
    setError('Preencha todos os campos antes de adicionar o livro.')
    return
  }

  onAddBook(book)
  setFormData(emptyBook)
  setError('')
}
```

Depois, em `src/App.jsx`, mostre primeiro a prop que conecta os componentes e, logo acima, a função recebida pelo formulário:

```jsx
<BookForm onAddBook={handleAddBook} />
```

```jsx
function handleAddBook(book) {
  const newBook = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    ...book,
  }

  setBooks((currentBooks) => [newBook, ...currentBooks])
}
```

Fala:

> “O formulário controla os campos com estado próprio. Ao enviar, ele evita o recarregamento da página, confere se todos os campos foram preenchidos e chama `onAddBook`. Essa função vem do `App`.”

> “No `App`, criamos um novo objeto com um `id` e os dados do formulário. Em seguida, `setBooks` coloca o novo livro no começo da lista. Como `books` é um estado, a lista é renderizada novamente imediatamente, sem precisar atualizar a página.”

## Fechamento sugerido

> “Com isso, atendemos aos principais requisitos: estado com `useState`, componente separado para a busca, filtro em tempo real com `filter()`, exibição da lista com `map()`, cards reutilizáveis que recebem props e cadastro com atualização imediata.”

## Perguntas prováveis e respostas curtas

### Onde ficam os livros iniciais?

No arquivo `src/data/initialBooks.js`. O `App` importa essa lista e a usa como valor inicial do estado `books`.

### Por que usar `useState`?

Porque a lista e o texto da busca mudam durante o uso. Ao atualizar o estado, o React atualiza a tela automaticamente.

### O card realmente recebe props?

Sim. Em `App.jsx`, `{...book}` envia os dados do livro. Em `BookCard.jsx`, eles são recebidos por desestruturação em `({ title, author, genre, status })`.

### O que significa receber props por desestruturação?

É uma forma curta de pegar propriedades de um objeto. Em vez de escrever `props.title`, o componente recebe diretamente `title`.

### Qual arquivo é responsável pela captura do filtro?

`src/components/SearchBar.jsx`. Ele captura a digitação no `input` e chama a função `onChange` recebida do `App`.

### Onde acontece a filtragem?

Em `src/App.jsx`, na variável `filteredBooks`, usando `books.filter(...)`.

### Onde acontece a renderização dos cards?

Em `src/App.jsx`, usando `filteredBooks.map(...)`. Cada item cria um `BookCard`.

### Por que existe `key={book.id}`?

Para o React identificar cada card da lista de forma estável e atualizar a interface com eficiência.

### O novo livro aparece sem recarregar a página?

Sim. O formulário chama `onAddBook`, e o `App` atualiza o estado `books` com `setBooks`. Isso faz o React renderizar a lista novamente na hora.

### Os livros cadastrados ficam salvos depois de atualizar a página?

Nesta versão, não. Eles ficam no estado enquanto a página está aberta. Para persistir após recarregar, seria necessário usar `localStorage` ou um banco de dados.

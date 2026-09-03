import { useState } from 'react'
import BookCard from './components/BookCard.jsx'
import BookForm from './components/BookForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import { initialBooks } from './data/initialBooks.js'

function normalizeText(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function App() {
  const [books, setBooks] = useState(initialBooks)
  const [searchTerm, setSearchTerm] = useState('')

  const normalizedSearchTerm = normalizeText(searchTerm.trim())
  const filteredBooks = books.filter((book) => {
    const searchableContent = [book.title, book.author, book.genre, book.status]
      .map(normalizeText)
      .join(' ')

    return searchableContent.includes(normalizedSearchTerm)
  })

  function handleAddBook(book) {
    const newBook = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      ...book,
    }

    setBooks((currentBooks) => [newBook, ...currentBooks])
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__brand" aria-label="Estante">
          <span className="hero__mark" aria-hidden="true">
            E
          </span>
          <span>ESTANTE</span>
        </div>
        <div className="hero__content">
          <p className="eyebrow">Catálogo pessoal de leitura</p>
          <h1>Livros que merecem ficar por perto.</h1>
          <p>
            Um catálogo simples para organizar títulos, descobrir leituras e manter o
            acervo sempre atualizado.
          </p>
        </div>
        <div className="hero__summary" aria-label={`${books.length} livros cadastrados`}>
          <strong>{books.length}</strong>
          <span>livros no acervo</span>
        </div>
      </header>

      <main>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          resultsCount={filteredBooks.length}
        />

        <section className="catalog" aria-labelledby="catalog-title">
          <div className="catalog__heading">
            <div>
              <p className="eyebrow">Coleção</p>
              <h2 id="catalog-title">Livros cadastrados</h2>
            </div>
            <p>
              {filteredBooks.length} de {books.length} exibidos
            </p>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="book-grid">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span aria-hidden="true">⌕</span>
              <h3>Nenhum livro encontrado</h3>
              <p>Tente buscar por outro título, autor, gênero ou status.</p>
            </div>
          )}
        </section>

        <BookForm onAddBook={handleAddBook} />
      </main>

      <footer>
        Atividade de Frameworks · React + Vite
      </footer>
    </div>
  )
}

export default App

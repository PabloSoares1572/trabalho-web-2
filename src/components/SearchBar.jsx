export default function SearchBar({ value, onChange, resultsCount }) {
  const resultLabel = resultsCount === 1 ? 'livro encontrado' : 'livros encontrados'

  return (
    <section className="search-bar" aria-labelledby="search-title">
      <div className="search-bar__heading">
        <div>
          <p className="eyebrow">Explorar acervo</p>
          <h2 id="search-title">Encontre seu próximo livro</h2>
        </div>
        <p className="search-bar__results" role="status" aria-live="polite">
          {resultsCount} {resultLabel}
        </p>
      </div>

      <label className="search-bar__label" htmlFor="book-search">
        Buscar por título, autor, gênero ou status
      </label>
      <div className="search-bar__input-wrap">
        <span className="search-bar__icon" aria-hidden="true">
          ⌕
        </span>
        <input
          id="book-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ex.: Clarice, romance ou disponível"
        />
        {value && (
          <button
            className="search-bar__clear"
            type="button"
            onClick={() => onChange('')}
            aria-label="Limpar busca"
          >
            Limpar
          </button>
        )}
      </div>
    </section>
  )
}

const statusClassName = {
  Disponível: 'book-card__status--available',
  'Em leitura': 'book-card__status--reading',
  Emprestado: 'book-card__status--loaned',
}

export default function BookCard({ title, author, genre, status }) {
  return (
    <article className="book-card">
      <div className="book-card__cover" aria-hidden="true">
        <span>ESTANTE</span>
        <strong>{title.charAt(0)}</strong>
        <small>Livro</small>
      </div>

      <div className="book-card__content">
        <span className={`book-card__status ${statusClassName[status] ?? ''}`}>
          {status}
        </span>
        <h3>{title}</h3>
        <p className="book-card__author">{author}</p>
        <p className="book-card__genre">{genre}</p>
      </div>
    </article>
  )
}

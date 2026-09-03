import { useState } from 'react'

const emptyBook = {
  title: '',
  author: '',
  genre: '',
  status: 'Disponível',
}

export default function BookForm({ onAddBook }) {
  const [formData, setFormData] = useState(emptyBook)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

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

  return (
    <section className="book-form" aria-labelledby="form-title">
      <div className="book-form__intro">
        <p className="eyebrow">Novo registro</p>
        <h2 id="form-title">Adicionar livro ao catálogo</h2>
        <p>O item será incluído na lista imediatamente após o envio.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="book-form__fields">
          <label>
            Título
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Nome do livro"
              required
            />
          </label>

          <label>
            Autor(a)
            <input
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Nome do autor ou autora"
              required
            />
          </label>

          <label>
            Gênero
            <input
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="Ex.: Fantasia"
              required
            />
          </label>

          <label>
            Status
            <select name="status" value={formData.status} onChange={handleChange}>
              <option>Disponível</option>
              <option>Em leitura</option>
              <option>Emprestado</option>
            </select>
          </label>
        </div>

        {error && (
          <p className="book-form__error" role="alert">
            {error}
          </p>
        )}

        <button className="book-form__submit" type="submit">
          Adicionar livro
        </button>
      </form>
    </section>
  )
}

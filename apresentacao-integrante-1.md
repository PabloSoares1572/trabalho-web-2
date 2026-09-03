# Apresentação — Integrante 1: Arquitetura e Setup

## Objetivo desta parte

Apresentar rapidamente a tecnologia escolhida, como o projeto é executado e como os arquivos foram organizados. Esta fala prepara o público para a demonstração prática e para a explicação do código feitas pelos próximos integrantes.

**Tempo sugerido:** cerca de 2 minutos.

## Fala sugerida

> Nosso projeto é um catálogo de livros desenvolvido com **React** e **Vite**. Escolhemos React porque ele permite dividir a interface em componentes reutilizáveis e atualizar a tela de forma reativa quando os dados mudam. O Vite foi usado para criar a estrutura do projeto, disponibilizar o servidor de desenvolvimento e gerar a versão final do site.
>
> Para executar o projeto localmente, primeiro instalamos as dependências com `npm install` e depois usamos `npm run dev`. O Vite fornece um endereço local que abrimos no navegador para visualizar a aplicação.
>
> A organização foi pensada para manter cada responsabilidade em seu lugar. Dentro de `src`, o arquivo `main.jsx` é o ponto de entrada do React. Ele renderiza o componente principal, chamado `App.jsx`. O `App` reúne a lógica central do catálogo e utiliza componentes separados dentro da pasta `components`.
>
> Nessa pasta, temos o `SearchBar`, responsável pela interface de busca; o `BookCard`, que é o card reutilizável de cada livro; e o `BookForm`, responsável pelo cadastro. Os cinco livros iniciais ficam separados em `data/initialBooks.js`, o que deixa os dados organizados e evita misturá-los com a interface.
>
> Também temos o arquivo `index.css`, com os estilos da aplicação, e o `vite.config.js`, que configura o React no Vite e o caminho correto para a publicação no GitHub Pages. O site está publicado e, sempre que enviamos alterações para a branch `main`, um workflow do GitHub gera a build e atualiza a página automaticamente.
>
> Agora vamos abrir a aplicação para demonstrar a busca e o cadastro de livros funcionando na prática.

## Sequência do que mostrar

### 1. Mostrar a raiz do projeto no VS Code

Abra o Explorer do VS Code e diga que esta é a estrutura principal do projeto. Mostre, sem precisar abrir tudo:

```text
trabalho-web-2/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── BookForm.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── initialBooks.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### 2. Abrir `package.json`

Mostre que o projeto usa as dependências `react`, `react-dom`, `vite` e `@vitejs/plugin-react`.

Mostre também os comandos:

```bash
npm run dev      # inicia o servidor local
npm run build    # gera a versão de produção
```

**Frase curta:** “O `package.json` registra as bibliotecas do projeto e os comandos que usamos para desenvolvê-lo e gerar a versão final.”

### 3. Abrir `src/main.jsx`

Mostre que ele importa `App` e usa `createRoot` para renderizar a aplicação dentro do elemento `root` do `index.html`.

**Frase curta:** “Este é o ponto de entrada: é aqui que o React começa a desenhar a nossa aplicação no navegador.”

### 4. Mostrar as pastas `components` e `data`

Não é necessário explicar a lógica interna dos arquivos nesta etapa; apenas apresente a separação:

- `components/`: partes visuais reutilizáveis da interface;
- `data/initialBooks.js`: lista inicial de cinco livros;
- `App.jsx`: componente principal que conecta as partes da aplicação;
- `index.css`: estilos e responsividade.

**Frase curta:** “Separar arquivos por responsabilidade torna o código mais fácil de entender, alterar e apresentar.”

### 5. Abrir `vite.config.js`

Mostre o plugin do React e a linha:

```js
base: '/trabalho-web-2/'
```

**Frase curta:** “Essa configuração garante que os arquivos do Vite sejam encontrados corretamente quando o site é publicado em um repositório do GitHub Pages.”

### 6. Mostrar o GitHub e o site publicado

No GitHub, mostre o repositório e, se houver tempo, a aba **Actions**. Depois abra o endereço publicado:

<https://pablosoares1572.github.io/trabalho-web-2/>

**Frase curta:** “O arquivo `.github/workflows/deploy.yml` automatiza a publicação: a cada `git push` para `main`, o GitHub instala as dependências, executa a build e atualiza o site.”

## Explicação simples da estrutura

| Arquivo ou pasta | Responsabilidade |
| --- | --- |
| `src/main.jsx` | Inicia o React e renderiza o componente `App`. |
| `src/App.jsx` | Componente principal; reúne a lista, a busca, os cards e o formulário. |
| `src/components/` | Contém componentes separados e reutilizáveis. |
| `BookCard.jsx` | Exibe as informações de um livro em um card. |
| `SearchBar.jsx` | Exibe e captura o texto digitado na busca. |
| `BookForm.jsx` | Exibe o formulário para cadastrar um livro. |
| `src/data/initialBooks.js` | Guarda os cinco livros que aparecem inicialmente. |
| `src/index.css` | Define o visual e a adaptação da página para diferentes telas. |
| `package.json` | Lista dependências e comandos do projeto. |
| `vite.config.js` | Configura o Vite, o plugin do React e a publicação no GitHub Pages. |
| `.github/workflows/deploy.yml` | Executa a publicação automática do site no GitHub Pages. |

## Perguntas prováveis e respostas curtas

**Por que vocês escolheram React?**  
Porque ele permite criar a interface em componentes reutilizáveis e atualiza a tela quando o estado muda.

**O que é o Vite?**  
É a ferramenta que cria o ambiente do projeto, inicia o servidor local e gera a build de produção.

**Onde a aplicação começa?**  
Em `src/main.jsx`, que renderiza o componente `App` no `root` do `index.html`.

**Por que os componentes estão em arquivos separados?**  
Para que cada parte tenha uma responsabilidade clara e possa ser reutilizada ou alterada com facilidade.

**Por que os livros iniciais estão em outro arquivo?**  
Para separar os dados da lógica e da interface, deixando o `App.jsx` mais organizado.

**Como vocês executam o projeto no computador?**  
Usamos `npm install` uma vez para instalar as dependências e `npm run dev` para abrir o servidor local.

**Como o site fica online?**  
O GitHub Pages publica a build. O workflow do GitHub Actions faz isso automaticamente a cada envio para a branch `main`.

**Por que existe `base: '/trabalho-web-2/'` no Vite?**  
Porque o site é publicado dentro do endereço do repositório, e essa configuração corrige os caminhos dos arquivos gerados.

## Lembrete antes de apresentar

1. Deixe o VS Code aberto no projeto e o navegador aberto no site publicado.
2. Confirme que o terminal está na pasta do projeto.
3. Se for demonstrar localmente, execute `npm run dev` antes da apresentação.
4. Termine a sua parte passando para o Integrante 2, que fará a demonstração prática.

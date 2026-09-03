# Apresentação — Integrante 2: Demonstração prática

Este roteiro é para mostrar o catálogo funcionando no navegador. A ideia é falar de forma natural, clicar com calma e deixar a tela confirmar cada ação.

## Objetivo da minha parte

Eu vou demonstrar que o sistema permite:

- visualizar os livros já cadastrados;
- buscar livros em tempo real;
- adicionar um novo livro pelo formulário;
- ver o novo item aparecer na lista imediatamente.

## Preparação antes de apresentar

1. Abra o projeto no navegador. Pode ser o site publicado no GitHub Pages ou o endereço mostrado após executar `npm run dev` (normalmente `http://localhost:5173/`).
2. Atualize a página antes da apresentação para começar com os **5 livros iniciais**.
3. Deixe a página no topo, onde aparecem a busca e os cards.
4. Confira se a barra de busca está vazia e se os campos do formulário também estão vazios.
5. Se estiver usando o projeto localmente, deixe o terminal aberto com `npm run dev` executando, mas apresente apenas o navegador.

## Roteiro de fala — cerca de 2 minutos

> “Agora eu vou demonstrar o catálogo em funcionamento. Nesta tela já temos cinco livros cadastrados, e cada um aparece em um card com título, autor, gênero e status.”

> “Primeiro, vou testar a busca. O campo aceita título, autor, gênero ou status. Ao digitar, a lista é atualizada na mesma hora, sem precisar apertar nenhum botão.”

> “Vou buscar por `Clarice`. Reparem que o contador muda e fica visível somente o livro *A Hora da Estrela*, da Clarice Lispector.”

> “Agora vou limpar a busca. Também é possível pesquisar por status; por exemplo, ao digitar `Disponível`, aparecem apenas os livros com esse status.”

> “Em seguida, vou cadastrar um novo livro. O formulário pede título, autor, gênero e status. Vou preencher todos os campos e enviar.”

> “Depois de clicar em ‘Adicionar livro’, o novo card aparece imediatamente no início da lista. O contador do acervo também muda de cinco para seis livros. Isso mostra que o sistema atualiza a lista assim que o cadastro é realizado.”

> “Para confirmar que o novo livro entrou no catálogo e também participa da busca, eu procuro pelo nome do autor que acabei de cadastrar. O resultado aparece na hora. Com isso, a demonstração da busca e do cadastro está concluída.”

## Passos exatos no navegador

### 1. Mostrar a lista inicial

1. Com a página aberta, aponte para o número no cabeçalho: **5 livros no acervo**.
2. Mostre os cinco cards em “Livros cadastrados”.
3. Diga que cada card exibe título, autor, gênero e status.

Resultado esperado: aparecem os livros **Torto Arado**, **A Hora da Estrela**, **Capitães da Areia**, **O Avesso da Pele** e **Pequeno Manual Antirracista**.

### 2. Demonstrar a busca em tempo real

1. Clique no campo “Buscar por título, autor, gênero ou status”.
2. Digite: `Clarice`.
3. Sem pressionar Enter, mostre o resultado.

Resultado esperado: o contador mostra **1 livro encontrado** e aparece apenas o card de **A Hora da Estrela — Clarice Lispector**.

4. Clique em **Limpar**, que aparece no campo após a digitação.
5. Digite: `Disponível`.

Resultado esperado: aparecem **3 livros encontrados**. Eles são os livros com o status “Disponível”.

6. Clique em **Limpar** novamente para voltar a mostrar os cinco livros.

### 3. Cadastrar um novo livro

1. Role a página até a seção “Adicionar livro ao catálogo”.
2. Preencha os campos com estes valores:

| Campo | Valor para digitar |
| --- | --- |
| Título | `Ensaio sobre a Cegueira` |
| Autor(a) | `José Saramago` |
| Gênero | `Romance` |
| Status | `Disponível` |

3. Clique no botão **Adicionar livro**.

Resultado esperado:

- os campos do formulário são limpos;
- o contador do cabeçalho passa para **6 livros no acervo**;
- a lista passa a exibir **6 de 6 exibidos**;
- o card **Ensaio sobre a Cegueira** aparece no começo da lista, pois o novo livro é inserido primeiro.

### 4. Confirmar o novo item com a busca

1. Volte até a barra de busca.
2. Digite: `Saramago`.

Resultado esperado: aparece somente o card do livro recém-cadastrado. Isso comprova que ele foi incluído na lista e já participa da filtragem.

3. Clique em **Limpar** para encerrar com a lista completa visível.

## Checklist rápido

- [ ] Projeto aberto no navegador e carregado.
- [ ] Página atualizada antes de começar, com 5 livros iniciais.
- [ ] Busca vazia antes da demonstração.
- [ ] Demonstração com `Clarice` realizada.
- [ ] Demonstração com `Disponível` realizada e busca limpa depois.
- [ ] Formulário preenchido com todos os quatro campos.
- [ ] Botão “Adicionar livro” clicado.
- [ ] Novo card e contador com 6 livros mostrados.
- [ ] Busca por `Saramago` feita para confirmar o cadastro.

## Perguntas prováveis e respostas curtas

**A busca precisa de botão?**  
Não. Ela é em tempo real: a lista muda enquanto a pessoa digita.

**Por quais informações é possível buscar?**  
Por título, autor, gênero e status do livro.

**O que acontece depois de cadastrar?**  
O livro é colocado imediatamente na lista e o contador é atualizado.

**Onde o novo livro aparece?**  
No começo da lista de cards.

**É preciso atualizar a página para aparecer?**  
Não. A atualização é automática logo após enviar o formulário.

**O que acontece se deixar um campo vazio?**  
O sistema mostra uma mensagem pedindo o preenchimento de todos os campos.

**O livro fica salvo se eu recarregar a página?**  
Nesta versão, não. O catálogo usa o estado da aplicação para a atividade; ao recarregar, ele volta aos cinco livros iniciais.

## Dica final de apresentação

Faça uma pausa de um ou dois segundos depois de digitar na busca e depois de clicar em “Adicionar livro”. Assim, a turma consegue perceber a atualização imediata na tela.

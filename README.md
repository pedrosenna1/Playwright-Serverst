# Projeto de Testes Automatizados com Playwright

Este projeto utiliza o [Playwright](https://playwright.dev/) para automação de testes end-to-end em aplicações web.

## Como começar

1. **Clone este repositório:**
   ```sh
   git clone <URL_DO_SEU_REPOSITORIO>
   cd playwright
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Instale o Playwright (incluindo os browsers):**
   ```sh
   npx playwright install
   ```

----

## Estrutura dos Testes

Os principais casos de teste estão localizados na pasta [`tests`](tests):

- [`TS01-login.spec.ts`](tests/TS01-login.spec.ts): Testes relacionados ao fluxo de login.
- [`TS02-cadastroUsuarios.spec.js`](tests/TS02-cadastroUsuarios.spec.js): Testes relacionados ao cadastro e exclusão de usuários.

---

## Casos de Teste

### TS01-login.spec.ts

Testa o fluxo de autenticação de usuários:

- **Login com credenciais válidas:**  
  Cria um usuário novo e realiza login, validando o sucesso do acesso.
- **Login com email inválido:**  
  Tenta logar com email incorreto e valida a mensagem de erro.
- **Login com senha inválida:**  
  Tenta logar com senha incorreta e valida a mensagem de erro.

### TS02-cadastroUsuarios.spec.js

Testa o fluxo de cadastro e exclusão de usuários:

- **Cadastro de usuário com credenciais válidas:**  
  Realiza o cadastro de um novo usuário com dados válidos e valida se o usuário aparece na listagem.
- **Cadastro de usuário com email em branco:**  
  Tenta cadastrar um usuário sem informar o email e valida a mensagem de erro exibida.
- **Exclusão de usuário cadastrado:**  
  Exclui o usuário cadastrado anteriormente e aguarda a conclusão da operação.

---

## Como Executar os Testes

Execute todos os testes:
```sh
npm test
```

Para rodar um teste específico, utilize:
```sh
npx playwright test tests/TS01-login.spec.ts
npx playwright test tests/TS02-cadastroUsuarios.spec.js
```

---

## Relatórios

Após a execução, um relatório HTML será gerado na pasta [`playwright-report`](playwright-report/).  
Para visualizar, execute:
```sh
npx playwright show-report
```

---

## Configuração

A configuração dos testes está em [`playwright.config.js`](playwright.config.js).

---

## Contato

Dúvidas ou sugestões? Abra uma issue
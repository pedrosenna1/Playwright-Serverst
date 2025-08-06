import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';

test.describe('Testes de Login', () => {
  let login
  let email
  let senha

  test.beforeAll('teste', async({browser}) =>{
    const page = await browser.newPage()
    await page.goto('https://front.serverest.dev/login');
    await page.getByTestId('cadastrar').click();
    await expect(page.getByText('Cadastro')).toBeVisible();
    await page.getByRole('textbox',{name: 'Digite seu nome'}).fill('Pedro Senna');
    email = `pedrotjb${Date.now()}@hotmail.com`
    senha = 'pedro123'
    await page.getByRole('textbox',{name: 'Digite seu email'}).fill(email)
    await page.getByRole('textbox',{name: 'Digite sua senha'}).fill(senha)
    await page.getByTestId('checkbox').check()
    await page.getByRole('button',{name: 'Cadastrar'}).click()
    await expect(page.getByText(/Bem Vindo/)).toBeVisible({timeout: 10000}) 
});

  test.beforeEach(async ({page})=>{
    login = new loginPage(page)
    await login.acessarPagina()

  })
  
  test('login com credenciais validas', async({page}) =>{
    await login.preencherCamposClick(email,senha)
    
    await login.verificaLoginComSucesso()

  })

  test('login com email invalido', async ({page}) => {
    await login.preencherCamposClick("pedrotjd@hotmail.com",senha)
    await login.verificarLoginInvalido() // Opção para validar texto contendo a string
    //await expect(page.getByText('Email e/ou senha inválidos')).toBeVisible() - Opção usando getByText

  })

  test('login com senha invalida', async ({page}) => {
    await login.preencherCamposClick(email,'1258')
    await login.verificarLoginInvalido()
    

  })

  
  })
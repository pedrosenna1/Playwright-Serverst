import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import loginInput from '../fixtures/loginInput.json'
import cadastroUsuarios from '../fixtures/cadastroUsuarios.json'

test.describe.serial('Cadastro usuarios', () => {
    let login
    let cadastroEmail
    test.beforeEach( async ({page})=>{
        login = new loginPage(page)
        await login.acessarPagina()
        await login.preencherCamposClick(loginInput.email,loginInput.senha)
    })

    test('Cadastrar Usuários com credenciais validas', async({page})=>{
        
        const emailDinamico = `pedrotjb${Date.now()}@gmail.com`
        cadastroEmail = {
            ...cadastroUsuarios, email: emailDinamico
        }

        await page.getByTestId('cadastrar-usuarios').click()
        await expect(page.getByText('Cadastro de usuários')).toBeVisible()
        await page.locator('[id="nome"]').fill(cadastroEmail.name)
        await page.locator('[id="email"]').fill(cadastroEmail.email)
        await page.locator('[id="password"]').fill(cadastroEmail.senha)
        await page.getByTestId('cadastrarUsuario').click()
        await expect(page.getByText(cadastroEmail.email)).toBeVisible()

        

    })
    
    test('cadastro de usuarios com email em branco', async ({page})=>{
        
        const emailDinamico = `pedrotjb${Date.now()}@gmail.com`
        const cadastroEmail2 = {
            ...cadastroUsuarios, email: emailDinamico
        }

        await page.getByTestId('cadastrar-usuarios').click()
        await expect(page.getByText('Cadastro de usuários')).toBeVisible()
        await page.locator('[id="nome"]').fill(cadastroEmail2.name)
        
        await page.locator('[id="password"]').fill(cadastroEmail2.senha)
        await page.getByTestId('cadastrarUsuario').click()
        await expect(page.locator('div[class="alert alert-secondary alert-dismissible"] > span')).toHaveText('Email é obrigatório')


    })
    test('Excluir usuario cadastrado', async({page})=>{
        await page.getByTestId('listar-usuarios').click()
        const seletor1 = page.locator('[class="table table-striped"] > tbody > tr ').filter({ hasText: cadastroEmail.email})
        await seletor1.getByText('Excluir').click()
        await page.waitForTimeout(10000)



    })




})
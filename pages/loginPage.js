import { test, expect } from '@playwright/test';

export class loginPage {
    constructor(page) {
        this.page = page;
    }

    async acessarPagina(){
        await this.page.goto('https://front.serverest.dev/login')


    }

    async preencherCamposClick(email,senha){
        await this.page.getByTestId('email').fill(email)
        await this.page.getByTestId('senha').fill(senha)
        await this.page.getByTestId('entrar').click()


    }

    async verificaLoginComSucesso(){
        await expect(this.page.locator('[class="lead"]')).toHaveText('Este é seu sistema para administrar seu ecommerce.')

    }


    async verificarLoginInvalido(){
        await expect(this.page.getByRole('alert')).toContainText('Email e/ou senha inválidos')

    }



}
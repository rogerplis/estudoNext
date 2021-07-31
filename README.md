## Passos para criar um projeto com Nextjs:

* Usar o comando [`yarn create-next-app`] nas pasta escolhida para o projeto.
* usar o comando ```bash yarn dev ``` para subir a aplicação!
* Abrir o endereço padrao [http://localhost:3000] para visulisar a aplicação!
* Ja vem com a integração com Git e da o primeiro commit!
* criar a pasta `src` e colocar a pasta pages e styles la dentro

[`integração com Type Script`]
criar o arquivo tsconfig.json
Usar o comando `touch tsconfig.json`
Instalar as dependencias:
`yarn add --dev typescript @types/react @types/node`
* usar o comando ```bash yarn dev ``` para instalar configurar o arquivo `tsconfig`!

* mudar o strict no arquivo tsconfig `"strict": true`,

`Configurar o Editor config`
Criar um arquivo `.editorconfig`
root = true

[*]
indent_style = spaces
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

`Configurar o ESLint`
Instalar o plugin do Eslint no VSCODE se não estiver instalado.
rodar o comando `npx eslint --init`
rodar a configuração e instalar as dependencias.
`yarn add eslint-plugin-react-hooks --dev`
configurar no arquivo eslint.json
`plugins adcionar "react-hooks"`
em "rules" adicionar:
```"react-hooks/rules-of-hooks": "error",```
   ` "react-hooks/exhaustive-deps": "warn"`
   `"react/prop-types": "off"`
   `"react/react-in-jsx-scope": "off"`
   `"@typescript-eslint/explicit-module-boundary-types": "off"`

colocar uma clausula settings para a versao do React
 `"settings": {`
       ` "react": {`
           ` "version" : "detect"`
       ` } `
     
dependencias de teste:
yarn add --dev jest @babel/preset-typescript @types/jest
npm install --save-dev @testing-library/react

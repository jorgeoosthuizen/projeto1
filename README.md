# PokeBase (Projeto 1)

## Frameworks
```
Bootstrap
```

### Libraries
```
Pinia
```

### Services/Platforms
```
Firebase Database
Firebase Authentication
```

### API
```
https://pokeapi.co/
```

### Resumo da App
- App criada utilizando Vue-CLI
- Componente Navbar com varios botões e redirecionamento utilizando Vue Router. Contém apresentação dinâmica de elementos com base no estado de autenticação.
- Homepage com carousel incluindo botões de reencaminhamento para outras páginas(utilizando também Vue Router).
- Página Pokédex de pesquisa com ligação assíncrona com a API. Contém apresentação dinâmica de elementos dependentes do estado de autenticação (botão adicionar/remover favorito) e inserção/pesquisa de dados na Firestore Database.
- Páginas de registo e login com ligação á store do Pinia.
- Página de perfil (após autenticação) com apresentação de pokemons favoritos (persistência de dados).
- Página Mapas (não funcional).
- Componente Footer (não funcional).


### ATENÇÃO
```
Para executar a aplicação deverá instalar as dependências utilizndo "npm install". Para correr a aplicação introduzir "npm run serve" no terminal do VS Code.
Para efetuar os testes é necessário um utilizador autenticado. Para tal utilize a página de registo e introduza um email e password (não necessitam de ser os dados pessoais, podem ser usados dados "falsos") e efetue login com os mesmos.

Em alternativa utilize o seguintes utilizadores já criados:
EMAIL: teste1@gmail.com
PASSWORD: 123456

EMAIL: teste2@gmail.com
PASSWORD: 123456

```

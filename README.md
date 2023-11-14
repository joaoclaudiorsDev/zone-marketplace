# Zone Marketplace

O Zone Marketplace é uma aplicação dedicada a sistemas de login e vendas, desenvolvida com o objetivo de proporcionar uma experiência de compras online intuitiva e segura.

## Tecnologias Utilizadas

### Backend:
- Node.js para a criação do servidor web.
- SQL como banco de dados, gerenciado com Sequelize.
- Autenticação utilizando tokens JWT para garantir a segurança do sistema.

### Frontend:  
- React e TypeScript para a construção da interface do usuário.
- React Router para o sistema de rotas, proporcionando uma navegação eficiente.
- Redux para o gerenciamento de estado global, com destaque para o sistema de carrinho de compras.
- Axios como biblioteca principal para lidar com requisições de API.

## Estrutura do Projeto

### Configurações do Ambiente

1. **Instalação do React e Configuração do Ambiente de Desenvolvimento:**
   - Certifique-se de ter o Node.js instalado.
   - Instale o EsLint para garantir padrões de código consistentes.

2. **Controle de Versão:**
   - Adicione o projeto ao GitHub para um controle eficaz das versões.

### Criação das Rotas

#### Páginas Principais:

1. **Home:**
   - Rota: `/` ou `/home`
   - Descrição: Página principal da aplicação, apresentando os produtos em destaque e possivelmente promoções especiais.

2. **Fazer Login:**
   - Rota: `/login` ou `/entrar`
   - Descrição: Página destinada ao sistema de autenticação, permitindo que usuários façam login na plataforma.

3. **Criar Conta:**
   - Rota: `/criar-conta` ou `/signup`
   - Descrição: Página para novos usuários se registrarem na aplicação.

#### Páginas Secundárias:

4. **Perfil:**
   - Rota: `/perfil` ou `/usuario/:id`
   - Descrição: Página que exibe informações detalhadas sobre o perfil do usuário, permitindo atualizações e personalizações.

5. **Carrinho de Compras:**
   - Rota: `/carrinho`
   - Descrição: Página que mostra os produtos adicionados ao carrinho, permitindo ao usuário revisar, modificar e finalizar a compra.

#### Páginas de Produtos:

6. **Catálogo de Produtos:**
   - Rota: `/catalogo` ou `/produtos`
   - Descrição: Lista todos os produtos disponíveis para compra, organizados por categorias.

7. **Detalhes do Produto (Página de Produto):**
   - Rota: `/produto/:id`
   - Descrição: Página que exibe detalhes específicos de um produto, incluindo descrição, preço, avaliações, etc.

8. **Páginas de Categorias:**
   - Rota: `/categorias/:nomeCategoria`
   - Descrição: Página que mostra produtos específicos de uma categoria.

9. **Páginas de Promoções/Ofertas:**
   - Rota: `/promocoes` ou `/ofertas`
   - Descrição: Página dedicada a exibir produtos em promoção ou ofertas especiais.

#### Páginas de Suporte:

-=
11. **Página de FAQ (Perguntas Frequentes):**
    - Rota: `/faq` ou `/ajuda`
    - Descrição: Página que responde a perguntas frequentes sobre o processo de compra, envio, devoluções, etc.

12. **Página de Contato/Atendimento ao Cliente:**
    - Rota: `/contato` ou `/atendimento`
    - Descrição: Página onde os usuários podem entrar em contato com o serviço ao cliente.

#### Página de Avaliações/Testemunhos:

13. **Página de Avaliações/Testemunhos:**
    - Rota: `/avaliacoes` ou `/testemunhos`
    - Descrição: Página que exibe avaliações e testemunhos de clientes anteriores.

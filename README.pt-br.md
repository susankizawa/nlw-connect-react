# NLW Connect - Trilha React

[EN](README.md)

## Descrição

Este projeto foi desenvolvido durante a trilha de React no NLW Connect 2025. O projeto consiste no frontend de um site de inscrição para um evento fictício, com um sistema de ranking baseado em convites. O frontend está atualmente sendo hospedado no [Vercel](https://vercel.com/home).

- [Site publicado](https://nlw-connect-react-three.vercel.app)
- [Repositório do backend](https://github.com/susankizawa/nlw-connect-node-js)

## Funcionalidades

- **Inscrição no evento**

![2025-03-03 14-28-11](https://github.com/user-attachments/assets/13b80166-04ba-4617-a7dc-262eebe128f1)

- **Sistema de convites**
  - Cada inscrito recebe um **link de convite** exclusivo
  - A cada nova inscrição feita por meio do link, o usuário acumula **pontos**
 
![2025-03-03 16-01-25](https://github.com/user-attachments/assets/797459c8-9715-4eeb-bd0a-87bfe3c2b3f2)

- **Ranking de participantes**
  - Exibe os 3 primeiros lugares na classificação dos inscritos com base no número de convites bem-sucedidos

 ![image](https://github.com/user-attachments/assets/44c7aeaa-2c93-4ebf-9b6f-4c8f54f0e684)

- **Estatísticas individuais**
  - Os inscritos podem visualizar:
    - **Cliques recebidos** no seu link de convite
    - **Inscrições concluídas** através do seu link
    - Sua **posição no ranking** em relação aos outros participantes

## Validação e Mensagens de Erro com Zod

https://github.com/user-attachments/assets/98b95441-0483-4a14-89cc-371c931ce664

Este vídeo mostra como a validação do formulário e as mensagens de erro são exibidas quando o usuário preenche informações incorretas. As validações são feitas com Zod, garantindo feedback claro e preciso para o usuário.

## Comandos para Setup

- `$env:BACKEND_URL=URL_DO_BACKEND; npx orval`: comando para atualizar os métodos da API do backend no Windows para usar a URL <URL_DO_BACKEND>
- `npm install`: comando para instalar as dependências do projeto
- `npm run dev`: comando para iniciar o projeto em modo de desenvolvimento
- `npm run start`: comando para iniciar o projeto em modo de produção

## Tecnologias usadas

- [React](https://react.dev)
- [Next](https://nextjs.org)
- [Tailwind](https://tailwindcss.com)
- [Typescript](https://www.typescriptlang.org)
- [Zod](https://zod.dev)
- [Orval](https://orval.dev)
- [Vercel](https://vercel.com/home)

## Variáveis de ambiente

- `BACKEND_URL`: URL da API do backend para comunicação com o backend

## Melhorias futuras

- [ ] Adicionar botões funcionais para compartilhamento em redes sociais
- [ ] Integrar autenticação OAuth na inscrição do evento através das seguintes plataformas:
	- [ ] Discord
	- [ ] Google
- [ ] Fazer com que o aplicativo web realmente mande um email para o inscrito



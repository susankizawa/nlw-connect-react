# NLW Connect - React Course

[PT-BR](README.pt-br.md)

## Description

This project was developed during the React Course for NLW Connect 2025. The project consists of the frontend of a subscription site for a fictitious event, including a ranking system based on invites. The frontend is currently being hosted on [Vercel](https://vercel.com/home).

- [Published site](https://nlw-connect-react-three.vercel.app)
- [Backend repository](https://github.com/susankizawa/nlw-connect-node-js)

## Features

- **Event subscription**

![2025-03-03 14-28-11](https://github.com/user-attachments/assets/13b80166-04ba-4617-a7dc-262eebe128f1)

- **Invite system**
  - Every subscriber receives an exclusive **invite link**
  - For every new subscribe made through this link, the user accumulates points

![2025-03-03 16-01-25](https://github.com/user-attachments/assets/797459c8-9715-4eeb-bd0a-87bfe3c2b3f2)

- **Participant ranking**

  - Displays the top 3 subscribers in the ranking based on the number of successful invites

 ![image](https://github.com/user-attachments/assets/44c7aeaa-2c93-4ebf-9b6f-4c8f54f0e684)

- **Individual stats**
  - Subscribers can view:
    - **Clicks received** on their invite link
    -  **Subscriptions done** through their link
    -  Their **ranking position** in relation to other participants

## Validation and Error Messages with Zod

https://github.com/user-attachments/assets/98b95441-0483-4a14-89cc-371c931ce664

This video showcases how the subscription form input is validated and how error messages are shown to the user when they put in incorrect information. The validation is done with Zod, guaranteeing clear and precise feedback to the user.

## Commands for Setup

- `$env:BACKEND_URL=BACKEND_URL; npx orval`: command to update backend API methods on Windows to use the URL <BACKEND_URL>
- `npm install`: command to install project dependencies
- `npm run dev`: command to start project in development mode
- `npm run start`: command to start project in production mode

## Tecnologies used

- [React](https://react.dev)
- [Next](https://nextjs.org)
- [Tailwind](https://tailwindcss.com)
- [Typescript](https://www.typescriptlang.org)
- [Zod](https://zod.dev)
- [Orval](https://orval.dev)
- [Vercel](https://vercel.com/home)

## Environment variables

- `BACKEND_URL`: backend API URL that will be used to communicate with the backend

## Future improvements

- [ ] Make functional share in social media buttons
- [ ] Integrate OpenAuth authentication to event subscription via the following platforms
  - [ ] Discord
	- [ ] Google
- [ ] Make it actually send an email to the subscriber

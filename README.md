
# Warlocks Front-End

Esse é o frontend para o projeto Warlocks Notes, aqui você vai aprender a iniciar o projeto localmente

Caso você não queira inicia-lo localmente, você pode testar online, no link abaixo

https://warlocks-frontend.vercel.app

O Aplicativo está hospedado na vercel e foi feito em NextJs com TypeScrypt

## Ponto importante

Para que o aplciativo funcione, você precisa rodar primeiro o backend, e deixa-lo rodando em sua máquina, para depois executar os comandos abaixo.

Url do repo backend: https://github.com/nielitton/warlocks-backend 


## Instalação

Para instalar o  projeto, você precisará instalar algumas dependências, sendo elas

- Npm (Normalmente vem junto com o node)
- Git (https://git-scm.com/downloads)

Após isso, você deve clonar o repositório na sua maquina com o git

digite o comando no seu terminal
```bash
git clone git@github.com:nielitton/warlocks-frontend.git
```

Após o repo clonado, você deve instalar as dependências do projeto, mas antes você deve entrar na pasta do projeto, com o comando.
```bash
cd warlocks-frontend
```
Agora vamos instalar as dependências do  projeto.
```bash
npm install 
```

Agora você deve criar um arquivo na raiz do projeto, com o nome ".env.local"

Dentro do arquivo, você deve colar o seguinte:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3333
```

com tudo isso feito, e completo, você pode iniciar o projeto, com o comando

```bash
npm run dev
```

Estara rodando o seu frontend, após isso você pode acessar o aplicativo pela url

http://localhost:3000


## Stack utilizada

**Front-end:** NextJs, Tailwind, TypeScript, React-hook-form, ReactQuery, React-Toastify, ShadCn/ui, Zustand, Zod, Axios
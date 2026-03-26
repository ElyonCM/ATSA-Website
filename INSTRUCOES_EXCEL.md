# Como Usar o Sistema de Banco de Dados e Download Excel

O site ATSA agora possui um **Backend próprio** que funciona como banco de dados local e painel administrativo com download em Excel. Ele roda totalmente no seu computador, sem depender de nenhum serviço externo (nem Power Automate, nem Google, nem Make...).

## Como Rodar

### 1. Instalar as dependências (só na primeira vez)
Abra o Terminal/PowerShell na pasta `ATSA-Backend` e execute:
```bash
npm install
```

### 2. Iniciar o servidor
Na mesma pasta execute:
```bash
node server.js
```

### 3. Liberar para Celular/Tablet (Opcional)
Se quiser que o formulário funcione em **qualquer dispositivo** (mesmo fora do Wi-Fi), abra um NOVO terminal na pasta `ATSA-Backend` e execute:
```bash
npx localtunnel --port 3001
```
O terminal dará um link (ex: `https://early-gifts-sip.loca.lt`). **Você deve copiar esse link e atualizar a variável `API_URL` no arquivo `js/modules/form.js` do seu site.**

### 4. Abrir o Painel Admin
Acesse seu link público ou **http://localhost:3001** no navegador para ver todos os contatos.

### 4. Usar o site normalmente
Com o servidor rodando, basta abrir o site ATSA normalmente. Quando alguém preencher o formulário e apertar "Enviar Contato", os dados serão automaticamente salvos no backend e visíveis no painel.

## Estrutura dos Arquivos
```
ATSA-Backend/
├── server.js           ← Servidor (código principal)
├── package.json        ← Dependências do projeto
├── data/
│   └── contatos.json   ← "Banco de dados" (arquivo JSON)
└── public/
    └── index.html      ← Painel Administrativo
```

## Funcionalidades
- ✅ Armazena contatos automaticamente ao enviar formulário
- ✅ Painel admin com tabela profissional e busca
- ✅ Download dos contatos em Excel (.xlsx)
- ✅ Exclusão individual de contatos
- ✅ Atualização automática a cada 15 segundos
- ✅ Estatísticas: total, contatos do dia, último contato

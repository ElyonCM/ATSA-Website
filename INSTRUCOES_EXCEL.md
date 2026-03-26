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

### 3. Acesso via Celular/Tablet (Permanente no Wi-Fi)
Para que o formulário funcione no celular sem precisar trocar links:
1. Certifique-se de que o Celular e o Computador estão no **mesmo Wi-Fi**.
2. O site já está configurado para o seu IP atual: `192.168.0.228`.
3. Se o seu IP mudar futuramente, basta atualizar a variável `API_URL` no arquivo `js/modules/form.js`.

### 4. Acesso via 4G/Externo (Opcional)
Se precisar testar fora de casa, use o LocalTunnel:
```bash
npx localtunnel --port 3001
```
E use o link gerado no `form.js`.

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

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

### 3. Acesso à Nuvem (Definitivo)
Seu sistema agora está hospedado no Render! Não é mais necessário ligar o computador ou rodar comandos locais para que o site receba contatos.

- **Link do Painel Admin:** [https://atsa-backend.onrender.com](https://atsa-backend.onrender.com)
- **Banco de Dados:** Os dados estão salvos permanentemente no MongoDB Atlas.

### 4. Uso Diário
1. O site ATSA já está configurado para o seu link de produção.
2. Acesse o Painel Admin via link acima para ver os leads, baixar Excel ou gerenciar os contatos.

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

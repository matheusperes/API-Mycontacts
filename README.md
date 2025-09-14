# 📞 API MyContacts

Uma API RESTful para gerenciamento de contatos desenvolvida com Node.js, Express e PostgreSQL.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web para Node.js
- **PostgreSQL** - Banco de dados relacional
- **UUID** - Geração de identificadores únicos
- **ESLint** - Linter para JavaScript

## 📋 Funcionalidades

### Contatos
- ✅ **Listar** todos os contatos
- ✅ **Buscar** contato por ID
- ✅ **Criar** novo contato
- ✅ **Atualizar** contato existente
- ✅ **Deletar** contato

### Categorias
- ✅ **Listar** todas as categorias
- ✅ **Criar** nova categoria

## 🗄️ Estrutura do Banco de Dados

### Tabela `categories`
```sql
- id (UUID, Primary Key)
- name (VARCHAR, NOT NULL)
```

### Tabela `contacts`
```sql
- id (UUID, Primary Key)
- name (VARCHAR, NOT NULL)
- email (VARCHAR, UNIQUE)
- phone (VARCHAR)
- category_id (UUID, Foreign Key)
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- PostgreSQL
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/matheusperes/API-Mycontacts.git
cd API-Mycontacts
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure o banco de dados
```bash
# Crie o banco de dados PostgreSQL
createdb mycontacts

# Execute o schema SQL
psql mycontacts < src/database/schema.sql
```

### 4. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/mycontacts
```

### 5. Execute o projeto
```bash
# Modo desenvolvimento (com nodemon)
npm run dev

# Modo produção
node src/index.js
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Documentação da API

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Contatos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/contacts` | Lista todos os contatos |
| GET | `/contacts/:id` | Busca contato por ID |
| POST | `/contacts` | Cria novo contato |
| PUT | `/contacts/:id` | Atualiza contato |
| DELETE | `/contacts/:id` | Deleta contato |

#### Categorias

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/categories` | Lista todas as categorias |
| POST | `/categories` | Cria nova categoria |

### Exemplos de Uso

#### Criar um contato
```bash
curl -X POST http://localhost:3000/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "(11) 99999-9999",
    "category_id": "uuid-da-categoria"
  }'
```

#### Listar todos os contatos
```bash
curl http://localhost:3000/contacts
```

#### Criar uma categoria
```bash
curl -X POST http://localhost:3000/categories \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Trabalho"
  }'
```

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── controllers/
│   │   ├── ContactController.js
│   │   └── CategoryController.js
│   └── repositories/
│       ├── ContactsRepository.js
│       └── CategoriesRepository.js
├── database/
│   ├── index.js
│   └── schema.sql
├── index.js
└── routes.js
```

## 🧪 Scripts Disponíveis

```bash
npm run dev    # Executa em modo desenvolvimento com nodemon
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Matheus Peres**
- GitHub: [@matheusperes](https://github.com/matheusperes)

## 📚 Projeto do Curso

Este projeto foi desenvolvido como parte do curso **JStack** - Módulo 1.

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela!

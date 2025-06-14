
# Proxy Server para Notícias com Backup Local

Este projeto cria um servidor proxy em Node.js que busca notícias de uma API externa e salva um backup local para garantir que o site continue funcionando mesmo que a API fique offline.

## 🚀 Como funciona

- Sempre tenta buscar as notícias da API original.
- Se a API falhar, utiliza o backup local salvo em um arquivo `backup.json`.
- Pode ser hospedado facilmente no Render, Railway, Cyclic (100% gratuito).

## ⚙️ Como rodar localmente

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Entre na pasta do projeto:
```
cd proxy-server
```

3. Instale as dependências:
```
npm install
```

4. Inicie o servidor:
```
npm start
```

O servidor estará rodando em: `http://localhost:3000/noticias`

## 🌐 Como hospedar gratuitamente

- Suba este repositório para o GitHub.
- Crie uma conta no Render.com, Railway.app ou Cyclic.sh.
- Conecte o seu repositório na plataforma.
- Rode o projeto gratuitamente na nuvem.

---

Desenvolvido para manter seu site funcional mesmo quando a API falhar 🔒🚀

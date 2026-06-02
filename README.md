# 🌿 Portfólio de Certificados

Site pessoal para exibição de certificados, com filtros por categoria e visual elegante em verde e dourado.

---

## 📁 Estrutura do projeto

```
portfolio/
├── index.html              ← página principal
├── vercel.json             ← config de deploy (Vercel)
├── css/
│   └── style.css           ← todos os estilos
├── js/
│   ├── certificates.js     ← ✏️  SEUS CERTIFICADOS (edite aqui!)
│   └── main.js             ← lógica da página
└── img/
    ├── foto.jpg             ← ✏️  sua foto de perfil
    └── curriculo.pdf        ← ✏️  seu currículo
```

---

## ✏️ Como personalizar

### 1. Sua foto
Coloque sua foto em `img/foto.jpg`.  
Pode ser .jpg, .png ou .webp — ajuste o caminho no `index.html` se mudar o formato.

### 2. Seu currículo
Coloque seu currículo em `img/curriculo.pdf`.

### 3. Seus links (LinkedIn / GitHub)
No `index.html`, procure e substitua:
- `https://linkedin.com/in/SEU-LINKEDIN` → seu LinkedIn
- `https://github.com/SEU-GITHUB` → seu GitHub
- A mesma substituição está no rodapé (footer)

### 4. Sua bio
No `index.html`, dentro da section `#sobre`, edite o parágrafo com classe `sobre-bio`.

### 5. Frases pessoais
Ainda no `#sobre`, edite os três `<div class="frase-card">`.

### 6. Seus certificados
Abra `js/certificates.js` e edite o array `CERTIFICATES`.  
Cada certificado segue este modelo:

```js
{
  id: 1,                              // número único
  name: "Nome do Certificado",
  institution: "Nome da Instituição",
  type: "idioma",                     // "idioma" | "curso" | "escola"
  date: "Jun 2024",
  hours: "40h",                       // opcional — deixe "" se não tiver
  description: "Descrição breve...",
  image: "img/cert1.jpg",             // opcional — deixe "" para placeholder
  link: "https://link-do-certificado" // opcional — deixe "" se não tiver
},
```

#### Imagens dos certificados
- Coloque as imagens na pasta `img/`
- Nomeie como `cert1.jpg`, `cert2.jpg` etc. (ou o nome que preferir)
- Formatos suportados: .jpg, .png, .webp
- Proporção ideal: **16:10** (ex: 800×500px)

---

## 🚀 Deploy no Vercel (recomendado)

### Opção A — Interface web (mais fácil)

1. Crie uma conta em [vercel.com](https://vercel.com) se ainda não tiver
2. Faça login e clique em **"Add New Project"**
3. Importe o repositório do GitHub (veja abaixo como subir para o GitHub)
4. Clique em **"Deploy"** — pronto! ✅

### Opção B — CLI do Vercel

```bash
# Instalar o CLI (se não tiver)
npm install -g vercel

# Dentro da pasta do projeto
cd portfolio
vercel

# Siga as instruções no terminal
# Na primeira vez ele vai pedir login e configuração
```

---

## 📤 Como subir para o GitHub

1. Crie um repositório novo em [github.com/new](https://github.com/new) (pode ser público ou privado)
2. No terminal, dentro da pasta `portfolio/`:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

3. Depois é só conectar o repositório ao Vercel (Opção A acima).

---

## 🔄 Atualizar o site

Após qualquer alteração:

```bash
git add .
git commit -m "atualiza certificados"
git push
```

O Vercel faz o deploy automaticamente em ~30 segundos. 🎉

---

## 🌐 GitHub Pages (alternativa gratuita)

Se preferir hospedar pelo GitHub Pages:

1. No repositório, vá em **Settings → Pages**
2. Em "Source", selecione **main** / **(root)**
3. Clique em **Save**
4. Seu site estará em `https://SEU-USUARIO.github.io/SEU-REPO/`

> ⚠️ Remova o `vercel.json` se for usar GitHub Pages.

---

Feito com 💚 e ✨

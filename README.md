# 🚀 Michael Alba - Portfólio Profissional

Portfólio single-page de alta conversão com estética premium "Vercel / Linear / Apple" (Dark Mode absoluto, tipografia premium, glassmorphism sutil).

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.4-06B6D4?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?style=flat&logo=vite)
![Status](https://img.shields.io/badge/Status-Build%20Sucesso-10B981)

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Design System](#-design-system)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Executando o Projeto](#-executando-o-projeto)
- [Build para Produção](#-build-para-produção)
- [Personalização](#-personalização)
- [Créditos](#-créditos)

---

## 🌟 Visão Geral

Este é um portfólio profissional single-page desenvolvido com:

- **Estética Premium**: Dark Mode absoluto inspirado em Vercel, Linear e Apple
- **Performance**: Renderização rápida com Vite + React
- **Design Moderno**: Glassmorphism sutil, gradientes indigo→cyan, animações fluidas
- **Responsividade**: Layout perfeitamente adaptado a mobile, tablet e desktop
- **Tipografia Premium**: Fontes otimizadas para читаibilidade e impacto visual

### Seções do Site

| Seção | Descrição |
|------|-----------|
| **Hero** | Foto de perfil com glow, título animado, descrição e CTAs |
| **Tech Stack** | Marquee infinito com tecnologias |
| **Soluções** | Grid de cards com serviços (Bento Grid) |
| **Presença Digital** | Seção exclusiva para serviços de desenvolvimento web |
| **Trajetória** | Timeline interativa de experiência profissional |
| **Footer CTA** | Chamada para ação com contact links |

---

## 🛠 Tecnologias

### Dependências Principais

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.344.0",
  "embla-carousel-react": "^8.6.0"
}
```

### Dependências de Desenvolvimento

```json
{
  "vite": "^5.4.21",
  "tailwindcss": "^3.4.4",
  "postcss": "^8.4.38",
  "autoprefixer": "^10.4.19",
  "@vitejs/plugin-react": "^4.3.1"
}
```

---

## 📁 Estrutura do Projeto

```
Site Pessoal/
├── public/                    # Arquivos estáticos públicos
│   └── Michael.jpg           # Foto de perfil
├── src/                       # Código fonte React
│   ├── App.jsx               # Componente principal única página
│   ├── index.css            # Estilos globais Tailwind
│   └── main.jsx             # Ponto de entrada React
├── dist/                     # Arquivos buildados (produção)
├── index.html               # HTML principal
├── package.json             # Dependências do projeto
├── tailwind.config.js       # Configuração do Tailwind CSS
├── postcss.config.js       # Configuração do PostCSS
├── vite.config.js         # Configuração do Vite
└── README.md              # Este arquivo
```

---

## ✨ Funcionalidades

### 1. Hero Section
- ✅ Fundo com partículas neurais (Canvas)
- ✅ Foto de perfil com borda glowing
- ✅ Título com gradiente animado
- ✅ Botões com hover effects
- ✅ Design responsivo

### 2. Tech Stack (Marquee Infinito)
- ✅ Animação contínua smooth
- ✅ Duplicate content para loop seamless
- ✅ Separadores visuais
- ✅ Otimizado para performance

### 3. Soluções (Bento Grid)
- ✅ Cards com glassmorphism
- ✅ Hover effects com glow
- ✅ Ícones Lucide
- ✅ Layout responsivo 1/2/3 colunas

### 4. Timeline de Experiência
- ✅ Design vertical estilo timeline
- ✅ Pontos interativos com glow no hover
- ✅ Cards com backdrop blur
- ✅ Animações CSS puras

### 5. Footer / CTA
- ✅ Design minimalista centralizado
- ✅ Links para contato e LinkedIn
- ✅ Gradientes e sombras

---

## 🎨 Design System

### Cores

| Nome | hex | Uso |
|------|-----|-----|
| **Background** | `#000000` | Fundo principal |
| **Surface** | `zinc-900/30` | Cards e elementos |
| **Border** | `white/10` | Bordas sutis |
| **Primary** | `indigo-500` | Gradiente utama |
| **Accent** | `cyan-500` | secundario |
| **Text Primary** | `white` | Títulos |
| **Text Secondary** | `zinc-400` | Descrições |

### Tipografia

- **Títulos**: `font-extrabold tracking-tight`
- **Corpo**: `text-zinc-400 leading-relaxed`
- **Código**: `font-mono`

### Animações

| Nome | Duração | Trigger |
|------|---------|---------|
| `animate-marquee` | 60s | Contínua |
| `hover:scale-105` | 300ms | Hover no botão |
| `group-hover` | 500ms | Hover no card |

---

## 📦 Pré-requisitos

Antes de instalar, certifique-se de ter:

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0 (ou yarn/pnpm)

Verificar versão instalada:

```bash
node --version
npm --version
```

---

## 🔧 Instalação

### 1. Clonar ou copiar o projeto

Se receber o projeto compactado, extraia para uma pasta:

```bash
mkdir SitePessoal
cd SitePessoal
# Copie os arquivos aqui
```

### 2. Instalar dependências

```bash
npm install
# ou
npm i
```

Este comando ira instalar:
- React 18 + React DOM
- Lucide React (ícones)
- Embla Carousel (slider)
- Tailwind CSS + PostCSS
- Vite (build tool)

### 3. Verificar estrutura

```bash
ls -la
# deve mostrar:
# node_modules/  package.json  src/  public/  tailwind.config.js  etc.
```

---

## 🚀 Executando o Projeto

### Desenvolvimento (Development Server)

Iniciar servidor de desenvolvimento com hot reload:

```bash
npm run dev
```

O servidor estara disponivel em:
- **Local**: http://localhost:5173
- **Network**: http://192.168.x.x:5173 (na mesma rede)

### Preview (Produção Local)

Build + servidor estatico para testar producao:

```bash
npm run preview
```

Disponivel em: http://localhost:4173

---

## 🏗 Build para Produção

### Gerar arquivos otimizados

```bash
npm run build
```

Output em `dist/`:

```
dist/
├── index.html              (0.54 kB)
├── assets/
│   ├── index-XXXX.css    (19.51 kB)
│   └── index-XXXX.js    (162.01 kB)
```

### Deploy

O conteudo da pasta `dist/` pode ser deployed em qualquer servico estatico:

| Servico | Comando |
|--------|---------|
| **Vercel** | `vercel deploy` |
| **Netlify** | Arraste a pasta `dist/` |
| **GitHub Pages** | `npm run build` + upload |
| **AWS S3** | Upload pasta `dist/` |
| **Cloudflare Pages** | Conectar repo Git |

---

## 🎯 Personalização

### Alterar Dados Pessoais

Edite o arquivo `src/App.jsx`:

```jsx
// Dados de experience -linha 4
const experiences = [
  {
    company: 'Nome da Empresa',
    role: 'Seu Cargo',
    period: '2024 - Presente',
    badge: 'Etiqueta',
    description: 'Sua descricao',
  },
  // ...mais entries
]

// Solucoes/Servicos - linha 47
const solutions = [
  {
    icon: NomeDoIcone,
    title: 'Titulo do Servico',
    description: 'Descricao do servico',
  },
  // ...mais servicos
]

// Tecnologias no marquee - linha 70
const technologies = [
  'Java', 'Python', 'NovaTech', // ...mais tecnologias
]
```

### Alterar Foto de Perfil

1. Substitua o arquivo `public/Michael.jpg` por sua foto
2. Mantenha o mesmo nome ou atualize a referencia no codigo:

```jsx
// Em src/App.jsx, linha ~210
<img src="/Michael.jpg" alt="Michael Alba" />
// mude para /sua-foto.jpg
```

### Alterar Cores

Em `tailwind.config.js`:

```javascript
// Cores do theme
colors: {
  accent: {
    DEFAULT: '#6366f1',  // Sua cor primaria
    light: '#818cf8',
    dark: '#4f46e5',
  },
}
```

### Alterar Animações

Em `tailwind.config.js`:

```javascript
// Velocidade do marquee
animation: {
  marquee: 'marquee 30s linear infinite', // faster
  // ou
  marquee: 'marquee 90s linear infinite', // slower
}
```

---

## 📄 Licença

Este projeto e propriedades de Michael Alba.

Todos os direitos reservados &copy; 2024-{new Date().getFullYear()}

---

## 📞 Contato

- **E-mail**: michael.alba@outlook.com.br
- **LinkedIn**: https://linkedin.com/in/michaelalba131
- **Portfolio**: (URL do site quando deployado)

---

## 🙌 Créditos

Desenvolvido por **Michael Alba**

- Arquiteto de Soluções de IA & Automação
- Engenheiro Front-End Sínior & Especialista UI/UX

Tecnologias utilizadas:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide](https://lucide.dev/)
- [Embla Carousel](https://www.embla-carousel.com/)

---

_Build: {new Date().toISOString().split('T')[0]} | Status: Produção Ready_

---

## ☁️ Deploy no Vercel

### Opção 1: Via Dashboard (Recomendado para iniciantes)

1. **Envie o projeto para o GitHub**
   ```bash
   # Inicializar git (se preciso)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Criar repositório no GitHub e推送
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git branch -M main
   git push -u origin main
   ```

2. **Acesse o Vercel**
   - Vá para: https://vercel.com
   - Faça login (GitHub, GitLab, ou e-mail)

3. **Importe o projeto**
   - Clique em **"New Project"**
   - Selecione o repositório do GitHub
   - Configure:
     - Framework Preset: `Vite`
     - Build Command: `npm run build` (ou deixe automático)
     - Output Directory: `dist` (ou deixe automático)
   - Clique em **Deploy**

4. **Pronto!**
   - O site estará online em ~30 segundos
   - URL: `https://seu-projeto.vercel.app`

### Opção 2: Via Vercel CLI

1. **Instale a Vercel CLI globalmente**
   ```bash
   npm install -g vercel
   # ou
   npm i -g vercel
   ```

2. **Faça login**
   ```bash
   vercel login
   # Abra o link no browser para autenticar
   ```

3. **Deploy do projeto**
   ```bash
   cd "/Users/michaelalba/Desktop/Site Pessoal"
   vercel
   ```

5. **Deploy concluído!**
   - URL:显示的 `https://seu-projeto.vercel.app`

### Opção 3: Deploy com Build Local

Se preferir fazer o build local primeiro:

```bash
# 1. Build local
npm run build

# 2. Instalar Vercel CLI se preciso
npm i -g vercel

# 3. Deploy a pasta dist
vercel deploy dist
```

### Configurações Recomendadas para Vercel

No arquivo `vercel.json` (opcional):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

### Domínio Personalizado

1. No dashboard do Vercel, vá em **Settings > Domains**
2. Clique em **Add Domain**
3. Digite seu domínio (ex: `meuportfolio.com`)
4. Configure as DNS records conforme instrução

### Atualizações Contínuas

Cada `git push` para `main` faz deploy automático:

```bash
git add .
git commit -m "Atualização"
git push origin main
# Vercel detecta e faz deploy automaticamente
```

---

## 📞 Suporte Vercel

- **Documentação**: https://vercel.com/docs
- **Status**: https://vercel.statuspage.io
- **Support**: https://vercel.com/docs/getting-started

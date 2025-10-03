# 💕 Site de Aniversário Romântico

Um presente especial feito com o coração, criado com HTML, CSS e JavaScript puros, 
para demonstrar carinho e admiração por alguém muito especial.

## 📁 Estrutura do Projeto

```
aniversario/
│
├── index.html              # Página principal
├── static/
│   ├── css/
│   │   └── style.css      # Estilos e animações
│   ├── js/
│   │   └── script.js      # Interatividade e efeitos
│   └── img/
│       ├── foto1.jpg      # Placeholders para suas fotos
│       ├── foto2.jpg
│       ├── foto3.jpg
│       ├── foto4.jpg
│       ├── foto5.jpg
│       └── foto6.jpg
└── README.md              # Este arquivo
```

## 🎨 Características

- ✨ Design moderno e romântico com cores suaves
- 💖 Animações suaves em CSS
- 🎭 Efeitos 3D nos cards ao passar o mouse
- 🌸 Partículas flutuantes animadas no fundo
- 📸 Galeria de fotos interativa
- 💌 Seção de mensagem personalizada
- 🎈 Corações flutuantes periódicos
- 📱 Totalmente responsivo
- 🎯 Easter egg: clique 5 vezes no coração principal!

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador
1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

### Opção 2: Usar Live Server (recomendado)
1. Instale a extensão "Live Server" no VS Code
2. Abra a pasta do projeto no VS Code
3. Clique com botão direito em `index.html`
4. Selecione "Open with Live Server"

## ✏️ Como Personalizar

### 1. Alterar as Mensagens

Edite o arquivo `index.html`:

**Título e mensagem inicial** (linhas 35-38):
```html
<h1 class="hero-title">Feliz Aniversário</h1>
<h2 class="hero-subtitle">Pessoa Especial</h2>
<p class="hero-text">Sua mensagem personalizada aqui...</p>
```

**Mensagem do coração** (linhas 54-70):
```html
<div class="message-content">
    <p>Seu texto personalizado sobre como ela é especial...</p>
    <p>Sua vontade de fazê-la feliz e aprender a amar do jeito certo...</p>
    <p class="message-highlight">Seus desejos para o aniversário dela...</p>
</div>
```

**Assinatura** (linha 71):
```html
<div class="signature">Com muito carinho,<br><span class="signature-name">Seu Nome</span></div>
```

### 2. Substituir as Fotos

1. Prepare suas fotos (recomendado: 800x600px ou proporção similar)
2. Renomeie-as como: `foto1.jpg`, `foto2.jpg`, etc.
3. Substitua os arquivos na pasta `static/img/`
4. As legendas podem ser editadas no `index.html` (linhas 84-147)

### 3. Alterar Cores

Edite o arquivo `static/css/style.css` (linhas 9-16):
```css
:root {
    --primary-color: #ff6b9d;      /* Rosa principal */
    --secondary-color: #c44569;    /* Rosa escuro */
    --accent-color: #ffa8c5;       /* Rosa claro */
    /* ... */
}
```

### 4. Personalizar "O Que Admiro em Você"

Edite o arquivo `index.html` (linhas 157-177):
```html
<div class="reason-item">
    <div class="reason-icon">😊</div>
    <h3>Seu Título</h3>
    <p>Sua descrição</p>
</div>
```

### 5. Adicionar Contador de Dias Juntos (opcional)

No arquivo `static/js/script.js`, encontre a função `showDaysTogether()` (linha 138) e descomente o código, ajustando a data:

```javascript
function showDaysTogether() {
    const startDate = new Date('2024-01-15'); // Sua data
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Adicione no HTML onde quiser mostrar
    console.log(`Dias juntos: ${diffDays}`);
}
```

## 🎁 Funcionalidades Especiais

### Easter Egg
Clique 5 vezes seguidas no coração principal (no topo da página) para ver uma surpresa especial! 💕

### Animações Interativas
- **Hover nas fotos**: Efeito de zoom e overlay
- **Hover nos cards**: Efeito 3D de profundidade
- **Scroll**: Animações suaves ao rolar a página
- **Corações flutuantes**: Aparecem periodicamente na tela

### Console
Abra o console do navegador (F12) para ver mensagens especiais!

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (até 767px)

## 🎨 Tipografia

O site usa as fontes do Google Fonts:
- **Playfair Display**: Títulos e destaques
- **Poppins**: Texto do corpo

## 💡 Dicas

1. **Fotos**: Use imagens de boa qualidade (mínimo 800x600px)
2. **Mensagens**: Seja sincero e escreva do coração
3. **Cores**: Mantenha harmonia nas cores escolhidas
4. **Teste**: Abra em diferentes dispositivos antes de mostrar
5. **Backup**: Faça uma cópia antes de personalizar

## 🐛 Solução de Problemas

**As imagens não aparecem?**
- Verifique se os arquivos estão na pasta `static/img/`
- Confirme que os nomes correspondem ao HTML
- Tente usar formatos .jpg, .png ou .svg

**Animações não funcionam?**
- Verifique se o JavaScript está habilitado no navegador
- Abra o console (F12) para ver erros
- Certifique-se de que todos os arquivos estão na pasta correta

**Site não abre?**
- Tente usar Live Server ao invés de abrir diretamente
- Verifique se todos os caminhos dos arquivos estão corretos

## 📝 Checklist de Personalização

Antes de mostrar para sua namorada:

- [ ] Alterar mensagem principal
- [ ] Personalizar declaração do coração
- [ ] Substituir todas as 6 fotos
- [ ] Ajustar legendas das fotos
- [ ] Personalizar "o que admiro em você"
- [ ] Alterar assinatura
- [ ] Testar em diferentes dispositivos
- [ ] Verificar se todas as fotos carregam
- [ ] Testar o easter egg do coração

## ❤️ Créditos

Feito com muito amor usando:
- HTML5
- CSS3 (com animações e gradientes)
- JavaScript puro (Vanilla JS)
- Google Fonts (Playfair Display & Poppins)

---

**Dica final**: Personalize cada detalhe com sinceridade. Escreva do coração e demonstre seus sentimentos de forma genuína. 
Esse gesto vai mostrar o quanto você se importa e o quanto ela é especial para você! 💕

## 💭 Dicas para Personalizar a Mensagem

- Seja sincero e genuíno nos seus sentimentos
- Mencione momentos especiais que vocês compartilharam
- Fale sobre o que te faz admirá-la
- Expresse sua vontade de crescer ao lado dela
- Mostre que você valoriza o que vocês estão construindo juntos
- Seja respeitoso e delicado com as palavras


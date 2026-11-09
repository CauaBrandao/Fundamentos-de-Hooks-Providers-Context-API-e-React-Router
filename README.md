# ⚛ Laboratório React: Hooks, Context API e React Router

Este repositório contém a atividade prática de desenvolvimento com **React**, abordando os conceitos fundamentais para a construção de Single Page Applications (SPAs) modernas, modulares e eficientes.

---

## 🎯 Objetivos de Aprendizagem

A aula e este laboratório cobrem recursos essenciais do ecossistema React:
- **Gerenciamento de Estado e Efeitos**: Uso dos Hooks nativos `useState` e `useEffect`.
- **Efeitos Colaterais e Cleanup**: Gerenciamento do ciclo de vida de efeitos, sincronização com APIs do navegador e funções de limpeza (cleanup) para evitar vazamentos de memória (*memory leaks*).
- **Compartilhamento de Dados com Context API**: Implementação de contextos e provedores (`Context`, `Provider` e `useContext`) para eliminação de *prop drilling*.
- **Hooks Customizados (Custom Hooks)**: Extração, modularização e reutilização de regras de negócio e integrações em funções reaproveitáveis.
- **Roteamento SPA com React Router**: Navegação declarativa com `BrowserRouter`, `Routes`, `Route` e `NavLink` com estilização dinâmica de rota ativa.

---

## 📁 Estrutura do Projeto

```text
├── src/
│   ├── context/
│   │   └── ThemeContext.jsx    # Provedor e contexto global para tema (claro/escuro)
│   ├── hooks/
│   │   ├── useCounter.js       # Custom Hook para contadores incrementais
│   │   └── useLocalStorage.js  # Custom Hook para sincronização com LocalStorage
│   ├── pages/
│   │   ├── Home.jsx            # Visão geral da aula prática
│   │   ├── Ex01Titulo.jsx      # Exercício 1: Efeito no document.title + cleanup
│   │   ├── Ex02Resize.jsx      # Exercício 2: Monitoramento de resize com listener
│   │   ├── Ex03Context.jsx     # Exercício 3: Consumo de tema global via Context API
│   │   ├── Ex04Counter.jsx     # Exercício 4: Demonstração de múltiplos useCounter
│   │   └── Ex05Favoritos.jsx   # Exercício 5: Persistência de favoritos com LocalStorage
│   ├── App.jsx                 # Estrutura principal com Sidebar e rotas
│   ├── main.jsx                # Ponto de entrada com ThemeProvider e BrowserRouter
│   └── styles.css              # Estilos globais responsivos e variáveis CSS
├── package.json
└── vite.config.js
```

---

## 🧪 Exercícios Implementados

### 1. `01 · Effect: título` (`Ex01Titulo.jsx`)
- Demonstra a sincronização de um estado de contagem com o título da aba do navegador (`document.title`).
- Implementa função de *cleanup* no `useEffect` para restaurar o título original quando o componente é desmontado ou antes de uma reexecução.

### 2. `02 · Effect: resize` (`Ex02Resize.jsx`)
- Registra um *event listener* global no evento `window.onresize`.
- Atualiza em tempo real a largura da tela e define uma classificação responsiva (Mobile / Desktop).
- Remove o listener com `window.removeEventListener` no retorno da função de efeito, garantindo performance e higiene de memória.

### 3. `03 · Context API` (`Ex03Context.jsx` & `ThemeContext.jsx`)
- Cria um contexto compartilhado para gerenciar o tema da aplicação (`claro` e `escuro`).
- A raiz da aplicação consome o estado para aplicar as classes CSS correspondentes no container mestre.
- Qualquer componente na árvore pode consumir o valor e disparar a alternância de tema sem necessidade de repasse manual de propriedades.

### 4. `04 · Custom Hook` (`Ex04Counter.jsx` & `useCounter.js`)
- Isola o estado e as operações matemáticas de contagem (`aumentar`, `diminuir`, `zerar`) em um Hook independente.
- Apresenta dois contadores independentes na mesma tela, comprovando que cada invocação do Hook mantém seu próprio estado isolado.

### 5. `05 · Integração e Persistência` (`Ex05Favoritos.jsx` & `useLocalStorage.js`)
- Combina estado (`useState`) e efeito (`useEffect`) para criar um Hook que lê e grava automaticamente estruturas de dados em JSON no `localStorage`.
- Interface interativa para favoritar e desfavoritar tecnologias com persistência garantida mesmo após recarregar a página.

---

## 🚀 Como Executar o Projeto

1. **Clonar ou acessar a pasta do projeto**:
   ```bash
   cd Fundamentos-de-Hooks-Providers-Context-API-e-React-Router
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acessar no navegador**:
   Abra [http://localhost:5173](http://localhost:5173).

5. **Verificar qualidade do código (Linter e Build)**:
   ```bash
   npm run lint
   npm run build
   ```

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Vite**
- **React Router 7**
- **JavaScript (ES Modules)**
- **CSS3 com variáveis e Flexbox/Grid**
- **ESLint**

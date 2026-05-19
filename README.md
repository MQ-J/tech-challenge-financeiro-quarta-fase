# 📱 Lumen Financial - Mobile

> Projeto desenvolvido como parte do Tech Challenge (Fase 4). Nesta fase, o desafio é evoluir a aplicação de gerenciamento financeiro desenvolvida na fase anterior ([Fase 3](https://github.com/MQ-J/tech-challenge-financeiro-terceira-fase)), incorporando os novos conceitos aprendidos, como padrões avançados de arquitetura front-end, Clean Architecture, segurança e performance.

---

## Tech Challenge - Fase 4: Requisitos do desafio

### Refatoração e Melhoria da Arquitetura

- [ ] Aplicar padrões de arquitetura modular para uma melhor organização 
do código.
- [ ] Implementar State Management Patterns avançados para otimizar o gerenciamento do estado da aplicação.
- [ ] Separar as camadas de apresentação, domínio e infraestrutura, 
seguindo os princípios da Clean Architecture.

### Performance e Otimização

- [ ] Melhorar o tempo de carregamento da aplicação aplicando estratégias 
de lazy loading e pré-carregamento.
- [ ] Implementar armazenamento em cache para otimizar requisições e 
melhorar a experiência do usuário.
- [ ] Utilizar técnicas de Programação Reativa para tornar a interface mais 
responsiva e eficiente.

### Tecnologias e conceitos a serem utilizados

#### Arquitetura Front-end Moderna

- [ ] melhoria na organização do código 
seguindo Clean Architecture.

#### Performance e Otimização

- [ ] melhorias no tempo de resposta da 
aplicação.

#### Segurança no Desenvolvimento

- [ ] implementação de autenticação 
segura e criptografia de dados sensíveis. 

---

### Material para a entrega

- [ ] Link do repositório Git do projeto.
- [ ] README contendo as tecnologias utilizadas e o passo a passo para rodar a aplicação localmente.
- [ ] Um vídeo de até 5 (cinco) minutos demonstrando as principais 
funcionalidades.

---

## ✨ Melhorias implementadas (WIP)

### 🌊 useAnimate
Hook para agrupar a responsabilidade pelas animações da aplicação. 

- A animações ocorrem após os dados do usuário em `account` serem definidos.
- As animações da opacidade e eixo Y rodam em paralelo, com um delay de **100ms**.

### 📱 useTabletLayout
Hook responsável por definir a regra de layout em tablets.

## 🔗 Acesso rápido (ambiente local)

Após iniciar o projeto (veja **Getting Started** abaixo):

| Plataforma | Comando / URL | Descrição |
| :--- | :--- | :--- |
| **📱 Expo Go** | `npx expo start` e escanear QR code | App no dispositivo físico. **Use a mesma rede Wi‑Fi do PC** (modo LAN); em dados móveis o QR costuma apontar para um IP local inacessível. Alternativa: `npx expo start --tunnel`. |
| **🌐 Web** | `npx expo start --web` → `http://localhost:8081` | Versão web (React Native Web). |
| **🤖 Android** | `npx expo start --android` | Emulador ou dispositivo Android. |
| **🍎 iOS** | `npx expo start --ios` | Simulador ou dispositivo iOS (macOS). |

---

## 🛠 Tecnologias utilizadas (WIP)

| Área | Tecnologias |
| :--- | :--- |
| **Core** | React 19, React Native 0.81, Expo SDK 54 |
| **Linguagem** | TypeScript 5 |
| **Navegação** | Expo Router 6, React Navigation 7 (`@react-navigation/native`, bottom tabs) |
| **Animações (dashboard)** | React Native `Animated` + `useNativeDriver`; foco de aba com `useIsFocused` (`@react-navigation/native`) |
| **Formulários e validação** | React Hook Form, Zod, @hookform/resolvers |
| **Estado** | Context API (AccountContext) |
| **Backend / cloud** | **Firebase** (`firebase` SDK: Auth, Firestore, Storage) |
| **Segurança / local** | expo-secure-store, crypto-js (storage local); `react-native-bcrypt` em utilitários legados |
| **UI e feedback** | expo-linear-gradient, react-native-toast-message, @expo/vector-icons, react-native-svg, react-native-gifted-charts |
| **Layout** | React Native StyleSheet, breakpoint tablet (constants/layout), `react-native-safe-area-context` (SafeAreaProvider / SafeAreaView / insets) |
| **Outras libs RN (Expo)** | `react-native-reanimated` (stack Expo; animações do dashboard usam `Animated` nativo) |

---

## 🚀 Getting Started – Como executar o projeto

### Pré-requisitos

- Node.js >= 18
- npm >= 8
- [Expo Go](https://expo.dev/go) instalado no celular (para testar no dispositivo) ou emulador Android/iOS

### Instalação e execução

```bash
# Clone o repositório (se ainda não tiver)
git clone <url-do-repositorio>

# Instalar dependências
npm install

# Iniciar o app (Expo)
npx expo start
```

Utilize o QR code no terminal para abrir no **Expo Go** ou as teclas do CLI para abrir em **web**, **Android** ou **iOS**.

### Firebase (obrigatório para login, transações e recibos)

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/) e ative **Authentication** (e-mail/senha), **Firestore** e **Storage**.
2. Copie as chaves do SDK para `firebase/config.ts` (ou use variáveis `EXPO_PUBLIC_*` se o grupo adotar `.env`).
3. Publique as **regras do Storage** conforme o arquivo `firebase/storage.rules` (Console → Storage → Rules).
4. Configure **regras do Firestore** (perfil `users/{uid}` e subcoleção `accounts/{accountId}/transactions`) — exemplo no guia abaixo.

**Guia passo a passo (Console, modelo de dados, arquivos `lib/` e regras):**  
[Documentação Firebase](docs/firebase.md)

---

## 📂 Estrutura do projeto (WIP)

Formato enxuto, no estilo do desafio:

```text
tech-challenge-financeiro-quarta-fase/
├── docs/
│   └── firebase.md         # Console Firebase, Firestore/Storage, arquivos relacionados
├── firebase/
│   ├── config.ts                 # initializeApp + Auth (web vs native persistence)
│   └── storage.rules             # Regras Storage (publicar no Console ou deploy CLI)
├── app/                          # Rotas (Expo Router)
│   ├── _layout.tsx               # Layout raiz (Stack, AccountProvider, Toast)
│   ├── index.tsx                 # Redireciona para login ou (tabs)
│   ├── (auth)/
│   │   ├── _layout.tsx           # Stack sem header (auth)
│   │   └── login.tsx             # Tela de login + modais Entrar / Abra sua conta
│   └── (tabs)/
│       ├── _layout.tsx           # Bottom tabs (Dashboard, Transações)
│       ├── index.tsx             # Home pós-login (Dashboard)
│       └── transacoes.tsx       # Listagem e criação de transações
├── components/                   # Componentes reutilizáveis
│   ├── RegisterForm.tsx          # Formulário de cadastro (Zod + RHF)
│   ├── TextInputField.tsx        # Input com ícone e erro
│   ├── PrimaryButton.tsx         # Botão primário/outline
│   ├── InfosCard.tsx             # Card de vantagens (login)
│   ├── Checkbox.tsx              # Checkbox termos
│   ├── TransactionsList.tsx      # Lista de transações, filtros e paginação (10/página)
│   └── ...
├── contexts/
│   ├── AccountContext.tsx        # Conta, sync Firestore + Storage (transações)
│   └── AuthContext.tsx           # Firebase Auth + perfil inicial Firestore
├── lib/
│   ├── firebase.ts               # getFirestore + getStorage (mesmo app que config.ts)
│   ├── firestore.ts              # Transações na subcoleção + espelho users/{uid}
│   ├── user-account-from-firestore.ts
│   ├── receipt-storage.ts        # Upload / delete de recibos no Storage
│   ├── firebase-auth-messages.ts
│   ├── storage.ts                # SecureStore + fallback web (metadados locais)
│   ├── types.ts
│   ├── auth.ts                   # Utilitários bcrypt (legado)
│   └── …
├── constants/
│   └── layout.ts                 # TABLET_BREAKPOINT, MAX_CONTENT_WIDTH, FOOTER_HEIGHT
├── assets/                       # Imagens e recursos
├── package.json
└── README.md
```

---

## 📜 Scripts Disponíveis

### Aplicação (Expo)
```bash
npm run start     # Inicia o Expo (npx expo start)
npm run android   # Inicia e abre no emulador/dispositivo Android
npm run ios       # Inicia e abre no simulador/dispositivo iOS
npm run web       # Inicia e abre no navegador (atalho para npx expo start --web)
npm run lint      # Executa linting (expo lint)
npx expo start -c # Inicia o Expo limpando o cache (útil para resolver problemas de build/cache)
```

# SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde (Front-End)

## 🏥 Visão Geral do Projeto

Este repositório contém o código-fonte do *Front-End* do **Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS)**. O projeto foi desenvolvido como parte de um trabalho multidisciplinar, com foco na criação de uma interface de usuário moderna, responsiva e otimizada para dispositivos móveis (*mobile-first*), inspirada nas melhores práticas de usabilidade de grandes plataformas de saúde brasileiras.

O objetivo principal deste *Front-End* é fornecer uma experiência de usuário fluida e intuitiva para o paciente, permitindo o acesso a funcionalidades essenciais como agendamento de consultas, visualização de carteirinha digital, resultados de exames, receitas médicas e histórico de saúde.

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando uma *stack* de desenvolvimento moderna e eficiente:

| Tecnologia | Descrição |
| :--- | :--- |
| **React** | Biblioteca JavaScript para construção de interfaces de usuário. |
| **Vite** | Ferramenta de *build* de próxima geração, focada em velocidade e performance. |
| **JavaScript (ES6+)** | Linguagem de programação principal. |
| **HTML5 & CSS3** | Estrutura e estilização, com foco em *design* responsivo. |

## 🚀 Instruções de Instalação e Execução

Para que o avaliador (ou qualquer desenvolvedor) possa rodar o projeto localmente, siga os passos abaixo.

### Pré-requisitos

É necessário ter o **Node.js** (versão 18 ou superior) instalado na máquina. O Node.js inclui o gerenciador de pacotes `npm`.

### 1. Instalação das Dependências

1.  Abra o Visual Studio Code na pasta raiz, basta aprir a pasta e clicar com o botão diteiro e selecionar a opção "Abrir com Code", estando aberto basta o comando no teclado "Ctrl+J" para abrir o terminal.
2.  Execute o comando de instalação. Devido a um conflito de dependência entre as bibliotecas de data (`date-fns` e `react-day-picker`), é necessário utilizar a *flag* `--force` para resolver o problema e garantir a instalação completa:

    ```bash
    npm install --force
    ```

    *Nota: O uso do `--force` é uma solução comum para conflitos de `peer dependencies` em projetos React e não afeta a funcionalidade do aplicativo.*

### 2. Execução do Projeto

Após a instalação, inicie o servidor de desenvolvimento com o comando:

```bash
npm run dev
```

### 3. Acesso ao Aplicativo

1.  O terminal informará o endereço local onde o aplicativo está rodando (geralmente `http://localhost:5173/`).
2.  Abra o endereço no seu navegador.

## 🔑 Credenciais de Teste

Para navegar pelo aplicativo, utilize as seguintes credenciais na tela de Login:

| Campo | Valor |
| :--- | :--- |
| **E-mail** | `teste123@email.com` |
| **Senha** | `senha123` |

O login redirecionará automaticamente para o Dashboard do Paciente, onde todas as funcionalidades desenvolvidas podem ser acessadas.

## 📁 Estrutura do Código

O código principal do *Front-End* está localizado na pasta `src/`:

*   `src/pages/`: Contém os componentes principais que representam as telas do aplicativo (Login, Dashboard, Agendamento, etc.).
*   `src/components/`: Contém componentes reutilizáveis (navegação, cards, etc.).
*   `src/App.jsx`: Define as rotas e a estrutura principal do aplicativo.

---
*Desenvolvido por Matheus França para o Trabalho Multidisciplinar (Front-End)*
*Data: Dezembro de 2025*

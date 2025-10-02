# 📝 Guia Rápido do Projeto: Próxima Folga

> Este é o seu guia de consulta para manter o foco e lembrar de todos os requisitos importantes durante o desenvolvimento.

---

## 🎯 **Objetivo Principal**
Criar um aplicativo simples e funcional que exibe os feriados nacionais do ano atual, ajudando o usuário a planejar seus dias de descanso.

---

## 📂 **Estrutura de Páginas (3 no total)**

| Página         | Rota         | Função Principal                                       |
| :------------- | :----------- | :----------------------------------------------------- |
| **`home`** | `/`          | Apresentação do app e botões de navegação.             |
| **`feriados`** | `/feriados`  | Consumir a API e listar os feriados do ano.            |
| **`sobre`** | `/sobre`     | Exibir o card de identificação do aluno para o trabalho. |

---

## 🔌 **API Principal: BrasilAPI**

A fonte de dados para a nossa lista de feriados.

* **Endpoint:**
    > `https://brasilapi.com.br/api/feriados/v1/{ano}`

* **Exemplo de Resposta (JSON):**
    ```json
    [
      {
        "date": "2025-01-01",
        "name": "Confraternização mundial",
        "type": "national"
      },
      {
        "date": "2025-03-04",
        "name": "Carnaval",
        "type": "national"
      }
    ]
    ```

---

## ✅ **Checklist de Requisitos do Trabalho**

- [ ] **Apresentação:** Página `home` com 2 rotas de navegação.
- [ ] **Navegação:** Links e botões de "voltar" funcionando entre as 3 páginas.
- [ ] **Uso de API:** Página `feriados` consumindo a BrasilAPI.
- [ ] **Identificação:** Página `sobre` com o seu card de identificação.
- [ ] **Documentação:** Preparar o texto e prints do passo a passo.
- [ ] **GitHub:** Subir o código final para o repositório `proxima-folga`.

---

## 💻 **Comandos Úteis do Ionic**

* **Iniciar o servidor local:**
    ```bash
    ionic serve
    ```

* **Criar uma nova página:**
    ```bash
    ionic generate page nome-da-pagina
    ```

* **Parar o servidor:**
    > Pressione `Ctrl + C` no terminal.
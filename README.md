# RetroDream Store 🎮

**RetroDream** — це Full-stack веб-застосунок для електронної комерції, спеціалізований на продажу ретро-консолей та аксесуарів. Проект демонструє сучасну серверну архітектуру на базі Next.js, забезпечуючи високу продуктивність та SEO-оптимізацію.

## 🛠 Технологічний стек

- **Framework:** [Next.js 15](https://nextjs.org/) (React)
- **Стилізація:** [Styled-components](https://styled-components.com/)
- **Backend:** Next.js API Routes (Serverless Functions)
- **База даних:** MongoDB (через Mongoose ODM)
- **CMS:** Sanity.io (Headless CMS для управління товарами)
- **Автентифікація:** JWT (JSON Web Tokens) + Secure Cookies
- **Тестування:** Jest, Node-Mocks-HTTP
- **CI/CD:** GitHub Actions

---

## 🏗 Архітектура

Застосунок побудований за **Монолітною** архітектурою, яка логічно розділена на шари:

1.  **Client Layer (`/src/components`):** React-компоненти, що відповідають за UI/UX.
2.  **API Layer (`/src/pages/api`):** RESTful ендпоінти, що виконують роль бекенду.
3.  **Data Layer (`/src/models`):** Mongoose схеми, що описують структуру Users та Orders.
4.  **Service Layer (`/src/lib`):** Перевикористовувана логіка для підключення до БД та автентифікації.

---

## 🚀 Основний функціонал

*   **Автентифікація:** Реєстрація та логін з хешуванням паролів (bcrypt) та JWT.
*   **Каталог товарів:** Динамічне отримання даних про товари з Sanity CMS.
*   **Кошик:** Додавання/видалення товарів, збереження стану в MongoDB.
*   **Оформлення замовлення:** Створення замовлення з валідацією полів.
*   **Адаптивність:** Інтерфейс оптимізовано для мобільних та десктопних пристроїв.

---

## ⚙️ Інструкція з запуску

### Вимоги
- Node.js (v18+)
- Обліковий запис MongoDB Atlas
- Проект в Sanity.io

### Встановлення

1.  **Клонування репозиторію:**
    ```bash
    git clone https://github.com/your-username/retrodream.git
    cd retrodream
    ```

2.  **Встановлення залежностей:**
    ```bash
    npm install
    ```

3.  **Налаштування оточення:**
    Створіть файл `.env.local` у корені проекту:
    ```env
    MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/dbname
    JWT_SECRET=your_super_secret_key
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_id
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

4.  **Запуск локального сервера:**
    ```bash
    npm run dev
    ```
    Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

### Тестування

Запуск набору тестів (Unit & Integration):
```bash
npm test
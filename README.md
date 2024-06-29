<div align="center">
<!--   <a href="https://github.com/dimassagngsptr/react-client-blanja.git">
      <img src="https://github.com/dimassagngsptr/blanja-kelompok-1/blob/master/apps/web/src/assets/logo/Group%201158.png" width="300"/>
  </a> -->

  <h1 align="center">Kasir App</h1>

  <p align="center">
     Kasir Implementation
    <br />
    <br />
    <a href="" target="_blank">View Website Demo</a>
    ·
     <a href="https://github.com/dimassagngsptr/KASIR-POS/tree/main/server" target="_blank">View Back-End Repo</a>
  </p>
</div>

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [Contact](#contact)
- [Documentation](#documentation)
- [Acknowledgements](#acknowledgements)




## About The Project

Cashier App is a Point of Sales application with a variety of features ranging from admin management to management dashboards, equipped with chart features for product sales analysis needs


### Built With

[React.Js](https://go.dev/)

[Redux Toolkit](redux-toolkit.js.org)

[Express.Js](https://expressjs.com/)

[MySql](https://www.mysql.com/)

[Sequelize](https://sequelize.org/)

[Chakra](https://v2.chakra-ui.com/)

[JSON Web Token](https://jwt.io/)

[Docker](https://www.docker.com/)

[Chart.Js](https://www.chartjs.org/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Ensure you have the following installed on your local machine:

- Node Js
- Npm / Yarn
- Docker 

### Installation

1. Clone Repo

   ```sh
     git clone https://github.com/dimassagngsptr/KASIR-POS.git
   ```

2. Go to workspace

   ```sh
      cd KASIR-POS
   ```

    Open VsCode

    ```sh
      code .
    ```

3. Setup enviroment ```.env``` 

    For server / Back End
  
     ```sh
     Database

     DB_PASSWORD =root_password;
     
     DB_DATABASE =database_name;

     Nodemailer
     
     NODEMAILER_USER=example@gmail.com
     
     NODEMAILER_PASS=your_mail_pass
      ```

4. Running the project

   install depedencies


    ```sh
      npm install
    ```

    run project  

    ```sh
      node index.js
    ```
  
The server will start on port 3000 by default. You can use Postman to interact with the endpoints in [Documentation](#documentation).

## Usage

To use this project, follow the instructions below for understanding the project structure and how to use the provided API documentation.

### Project Structure Front End

```
📦 src
 ┣ 📜 App.jsx
 ┣ 📜 main.jsx
 ┣ 📂 assets
 ┃ ┗ 📜 react.svg
 ┣ 📂 components
 ┃ ┣ 📂 charts
 ┃ ┃ ┣ 📜 LineCharts.jsx
 ┃ ┃ ┣ 📜 PieCharts.jsx
 ┃ ┃ ┗ 📜 TimeFilter.jsx
 ┃ ┣ 📂 dashboard-admin
 ┃ ┃ ┣ 📜 addCategory.jsx
 ┃ ┃ ┣ 📜 addProduct.jsx
 ┃ ┃ ┣ 📜 addSubcategory.jsx
 ┃ ┃ ┣ 📜 Alerts.jsx
 ┃ ┃ ┣ 📜 deleteCashier.jsx
 ┃ ┃ ┣ 📜 DeletedModals.jsx
 ┃ ┃ ┣ 📜 DesktopNav.jsx
 ┃ ┃ ┣ 📜 EditCashier.jsx
 ┃ ┃ ┣ 📜 EditedModals.jsx
 ┃ ┃ ┣ 📜 FormAddProducts.jsx
 ┃ ┃ ┣ 📜 FormCategory.jsx
 ┃ ┃ ┣ 📜 FromAddSubcategory.jsx
 ┃ ┃ ┣ 📜 HamburgerMenu.jsx
 ┃ ┃ ┣ 📜 listCashier.jsx
 ┃ ┃ ┣ 📜 Menu.jsx
 ┃ ┃ ┣ 📜 MobileGrid.jsx
 ┃ ┃ ┣ 📜 MobileNav.jsx
 ┃ ┃ ┣ 📜 Modals.jsx
 ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┣ 📜 Pagination.css
 ┃ ┃ ┣ 📜 Pagination.jsx
 ┃ ┃ ┣ 📜 ProductMenuAdmin.jsx
 ┃ ┃ ┣ 📜 profileAdmin.jsx
 ┃ ┃ ┣ 📜 Reports.jsx
 ┃ ┃ ┣ 📜 SearchProducts.jsx
 ┃ ┃ ┣ 📜 SearchSubCategory.jsx
 ┃ ┃ ┣ 📜 SidebarDesk.jsx
 ┃ ┃ ┣ 📜 Tables.jsx
 ┃ ┃ ┣ 📜 TablesCashier.jsx
 ┃ ┃ ┣ 📜 Tabs.jsx
 ┃ ┃ ┗ 📜 Trash.jsx
 ┃ ┣ 📂 landingpage
 ┃ ┃ ┣ 📜 Login.jsx
 ┃ ┃ ┣ 📜 loginCashier.jsx
 ┃ ┃ ┣ 📜 registerCashier.jsx
 ┃ ┃ ┗ 📜 Tabs.jsx
 ┃ ┗ 📂 menu
 ┃ ┃ ┣ 📜 Cart.jsx
 ┃ ┃ ┣ 📜 CartBottom.jsx
 ┃ ┃ ┣ 📜 CartItem.jsx
 ┃ ┃ ┣ 📜 MainContent.jsx
 ┃ ┃ ┣ 📜 MenuCard.jsx
 ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┣ 📜 profileCashier.jsx
 ┃ ┃ ┗ 📜 Sidebar.jsx
 ┣ 📂 pages
 ┃ ┣ 📜 DashboardAdmin.jsx
 ┃ ┣ 📜 LandingPage.jsx
 ┃ ┣ 📜 Menu.jsx
 ┃ ┣ 📜 RegisterPages.jsx
 ┃ ┣ 📜 SuccessTransaction.jsx
 ┃ ┗ 📜 verified.jsx
 ┗ 📂 Redux
   ┣ 📜 AdminSlice.js
   ┣ 📜 CashierSlice.js
   ┣ 📜 categorySlice.js
   ┣ 📜 store.js
   ┗ 📜 subCategorySlice.js
 ```

### Project Structure Back End

```
📦 project
 ┣ 📂 configs
 ┣ 📂 controllers
 ┣ 📂 middlewares
 ┣ 📂 migrations
 ┣ 📂 models
 ┣ 📂 public
 ┣ 📂 routes
 ┣ 📄 .env
 ┣ 📄 .gitignore
 ┣ 📄 docker-compose.yml
 ┗ 📄 index.js
 ```


### ERD


### Documentation

Access the API documentation for the **Kasir** project. Use this documentation to test endpoints and understand the structure and functionality of the available APIs in this project.

[![Blanja Innovation API Postman Documentation](https://run.pstmn.io/button.svg)]()


### Project Related

- [`Front-End Project Repository Link`](https://github.com/dimassagngsptr/KASIR-POS/tree/main/client)

- [`Front-End Demonstration Link`]()

- [`Back-End Demonstration Link`]()


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

If you have any questions or inquiries regarding this project, feel free to contact:

email : dimasageng58@gmail.com 

linkedin : https://www.linkedin.com/in/dimasagengsaputro/

## Acknowledgements

Feel free to check it out:

- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com/)
- [GitHub Pages](https://pages.github.com/)


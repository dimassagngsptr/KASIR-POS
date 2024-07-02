<div align="center">
<!--   <a href="https://github.com/dimassagngsptr/react-client-blanja.git">
      <img src="https://github.com/dimassagngsptr/blanja-kelompok-1/blob/master/apps/web/src/assets/logo/Group%201158.png" width="300"/>
  </a> -->

  <h1 align="center">Kasir App</h1>

  <p align="center">
     Kasir Implementation
    <br />
    <br />
    <a href="https://kasir-wheat.vercel.app/" target="_blank">View Website Demo</a>
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

Kasir App is a Point of Sales (POS) application designed to streamline sales processes in retail stores or restaurants. The application encompasses features such as product management, transaction processing, inventory tracking, and sales report generation. Utilizing React.js for the frontend and Express.js for the backend, this application provides a responsive user interface and robust server performance.To manage and store data, the application employs MySQL as its database. The use of Docker Compose facilitates the setup and management of the MySQL database, allowing developers to easily configure a consistent and flexible development environment.



### Built With

[React.Js](https://react.dev/)

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

     DB_PASSWORD = your_password;
     
     DB_DATABASE = your_database;

     DB_PORT = database_port

     DB_USERNAME = database_username

     DB_HOST = database_host

     Nodemailer
     
     NODEMAILER_USER=example@gmail.com
     
     NODEMAILER_PASS=your_mail_pass
      ```

4. Open your Docker Desktop

   on terminal folder server
   
    ```sh
       ...project/server
    ```


    ```sh
      docker compose up -d
    ```
  
    this command will be create database MySQL in your Docker container
   


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


## Screenshots


<table>
  <tr>
    <td>Login Page</td>
    <td>Home Page</td>
  </tr>
  <tr>
    <td><img src="/client/public/docs/screenshots/register-page 1 (10).png"/></td>
    <td><img src="/client/public/docs/screenshots/register-page 1 (14).png"/></td>
  </tr>
  <tr>
    <td>Checkout</td>
    <td>Sales Report</td>
  </tr>
  <tr>
    <td><img src="/client/public/docs/screenshots/register-page 1 (15).png"
 /></td>
    <td><img src="/client/public/docs/screenshots/register-page 1 (16).png" /></td>
  </tr>
  <tr>
    <td>List Cashier</td>
    <td>Category Products</td>
  </tr>
  <tr>
    <td><img src="/client/public/docs/screenshots/register-page 1 (11).png" /></td>
    <td><img src="/client/public/docs/screenshots/register-page 1 (12).png" /></td>
  </tr>
  <tr>
    <td>Sub Category Products</td>
    <td>Print Bils to PDF</td>
  </tr>
  <tr>
    <td><img src="/client/public/docs/screenshots/register-page 1 (13).png" /></td>
    <td><img src="/client/public/docs/screenshots/print-pdf.png" /></td>
  </tr>
  <!-- <tr>
    <td>Profile Customer</td>
    <td>add shipping address</td>
  </tr>
  <tr>
    <td><img src="https://github.com/dimassagngsptr/blanja-kelompok-1/blob/df3f76ec9cd4de47e30c78fabc5b9f54fcf01a98/apps/web/src/assets/screenshot/profile%20costumer.png" /></td>
    <td><img src="https://github.com/dimassagngsptr/blanja-kelompok-1/blob/df3f76ec9cd4de47e30c78fabc5b9f54fcf01a98/apps/web/src/assets/screenshot/add%20shipping%20address.png" /></td>
  </tr>
  <tr>
    <td>My order</td>
    <td>Filter Product</td>
  </tr>
  <tr>
    <td><img src="https://github.com/dimassagngsptr/blanja-kelompok-1/blob/df3f76ec9cd4de47e30c78fabc5b9f54fcf01a98/apps/web/src/assets/screenshot/my%20order.png" /></td>
    <td>
    <img src="./apps/web/src/assets/screenshot/filter-products.png" />
    </td> -->
  </tr>

</table>

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


### Documentation

Access the API documentation for the **Kasir** project. Use this documentation to test endpoints and understand the structure and functionality of the available APIs in this project.

[![Blanja Innovation API Postman Documentation](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/29288801/2sA3duFsdJ)


### Project Related

- [`Front-End Project Repository Link`](https://github.com/dimassagngsptr/KASIR-POS/tree/main/client)

- [`Front-End Demonstration Link`](https://kasir-wheat.vercel.app/)

- [`Back-End Demonstration Link`](https://kasir-pos-be.vercel.app/api)



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

- [Choose an Open Source License](https://choosealicense.com/)
- [GitHub Pages](https://pages.github.com/)


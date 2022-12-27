const mailTemp = (firstName, lastName, email, phone, billed, price, type) => {
	return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
            @media screen {
                @font-face {
                  font-family: 'Lato';
                  font-style: normal;
                  font-weight: 400;
                  src: local('Montserrat'), local('Montserrat'), url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap");
                }

                table, th, td {
                    border: 1px solid;
                }

                td, th {
                    padding: 10px;
                }

                body {
                    font-family: 'Montserrat', Arial, sans-serif;
                }
            }
            </style>
        </head>
    
        <body style="background: #dedede; padding: 30px;">
            <table style="border: 1px solid">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Billed</th>
                    <th>Type</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${billed}</td>
                    <td>${type}</td>
                    <td>$${price}</td>
                </tr>
            </table>
        </body>
    </html>
    `;
};

export default mailTemp;

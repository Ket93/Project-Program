# Endpoints for stock information

## **Using SQL database**
---
### Get all stock names
Returns a list of objects of all stocks with all information.
* **URL**

  /api/db/stocks

* **Method**

    `GET`

* **Success Response**
    * Code: 200
    * Content: `[{"id":1,"ticker":"AAPL","price":149.99,"yield":1.43},{"id":2,"ticker":"TSLA","price":1033.42,"yield":-2.83}]`

* **Error Response**
    * Code: 500


---

### Get one stock
Returns an object with the information of one stock
* **URL**

  /api/db/stocks/:ticker

* **Method**

    `GET`

*  **Parameters**

   **Required:**

   `ticker=[alphabetical]`

* **Success Response**
    * Code: 200
    * Content: `{"id":1,"ticker":"AAPL","price":149.99,"yield":1.43}`

* **Error Response**
    * Code: 500
    * Content: `Param :ticker is not found in database`

---

### Get all stock names
Returns a list of all ticker names (strings) of all available stocks in the database
* **URL**

  /api/db/stocklist

* **Method**

    `GET`


* **Success Response**
    * Code: 200
    * Content: `["AAPL","TSLA","GS","GOOGL","PG","BBY"]`

* **Error Response**
    * Code: 500


---

## **Using mock data**

---
### Get all stocks
Returns a list of objects of all stocks with all information.
* **URL**

  /api/stocks

* **Method**

    `GET`

* **Success Response**
    * Code: 200
    * Content: `[{"id":1,"ticker":"AAPL","price":149.99,"yield":1.43},{"id":2,"ticker":"TSLA","price":1033.42,"yield":-2.83}]`



---

### Get one stock
Returns an object with the information of one stock
* **URL**

  /api/stocks/:ticker

* **Method**

    `GET`

*  **Parameters**

   **Required:**

   `id=[alphabetical]`

* **Success Response**
    * Code: 200
    * Content: `{"id":1,"ticker":"AAPL","price":149.99,"yield":1.43}`

* **Error Response**
    * Code: 404
    * Content: "Not Found"

---

### Get all stock names
Returns a list of all ticker names (strings) of all available stocks in the database
* **URL**

  /api/stocklist

* **Method**

    `GET`


* **Success Response**
    * Code: 200
    * Content: `["AAPL","TSLA","GS","GOOGL","PG","BBY"]`









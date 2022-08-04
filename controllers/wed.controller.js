const db = require("../config/database");

exports.getWedProduct = async (req, res) => {
    const { rows } = await db.query(
      "SELECT * FROM JYEK.WED_PRODUCT",
    );
  
    console.log(rows[0]);

    res.status(201).send({
      message: "Get Product successfully!",
      body: {
        rows
      },
    });
  };
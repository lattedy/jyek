const db = require("../config/database");
const logger = require("../config/logger");

exports.getWedProduct = async (req, res) => {
    const { rows } = await db.query(
      "SELECT * FROM JYEK.WED_PRODUCT",
    );
  
    logger.info("[Get JYEK.WED_PRODUCT]" + rows[0]);

    res.status(201).send({
      message: "Get Product successfully!",
      body: {
        rows
      },
    });
  };
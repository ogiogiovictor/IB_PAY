const express = require('express');
const customerController = require('../controller/customer_controller');

const router = express.Router();

// /admin/add-product => GET
router.get('/get_customers', customerController.allCustomer);
router.post('/post_customer_crmd', customerController.addCustomer);
router.post('/update_crmd_doc', customerController.approveCustomer);

module.exports = router;
const express = require('express');
const crmdController = require('../controller/crmd_controller');
const customerController = require('../controller/customer_controller');

const router = express.Router();

// Customer Routes
router.get('/get_customers', crmdController.allCustomer);
//router.get('/pending_customers/:buid', customerController.getCapturedCustomers); //params
router.get('/pending_customers', customerController.getCapturedCustomers); //Query 



router.post('/post_customer_crmd', crmdController.addCustomer);
router.post('/update_crmd_doc', crmdController.approveCustomer);
router.post('/add_customer', customerController.newCustomer);
router.post('/update_customers_approve', customerController.updateCustomer);

module.exports = router;
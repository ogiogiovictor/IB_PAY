const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({

    customer_type: {
        type: String,
        enum: ['postpaid', 'prepaid'], // Add your desired customer types here
        required: true,
    },

    status: {
        type: String,
        default: 'pending',
    },

    customer_title: {
        type: String,
    },

    customer_gender: {
        type: String,
    },

    surname: {
        type: String,
        required: true,
    },

    firstname: {
        type: String,
        required: true,
    },

    othername: {
        type: String,
    },

    phone: {
        type: String,
        required: true,
    },

    email: {
        type: String,
    },

    address: {
        type: String,
    },

    building_description: {
        type: String,
        enum: ['duplex', 'flat', 'bungalow', 'shop', 'church', 'mosque', 'factory', 'others'], // Add your desired customer types here
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    lga: {
        type: String,
    },

    region: {
        type: String,
        required: true,
    },

    business_hub: {
        type: String,
        required: true,
    },

    service_center: {
        type: String,
        required: true,
    },

    customer_status: {
        type: String,
        enum: ['Active', 'Inactive', 'Suspended', 'New'], // Add your desired customer types here
        required: true,
    },

    contact_details: {
        ctitle: String,
        csurname: String,
        cfirstname: String,
        cphone: Number,
        cemail: String,
        clandlord_name: String,
        clandlord_phone: String,
        cislandlord: String, enum: ['Yes', 'No'],
    },

    captured_by: {
        type: String,
        required: true,
    },
    captured_by_name: {
        type: String,
        required: true,
    },

    imagees: [String],

    wiring: {
        account_type: String,  enum: ['metered_postpaid', 'new_connection', 'unmetered_postpaid', 'ppm_sts', 'ppm_nonsts'],
        is_customer_metered: String, enum: ['Yes', 'No'],
        meter_type: String, //if metered
        meter_number: String, //if metered
        book_number: String, //if metered
        meter_maker: String, //if metered
        meter_rating: String, //if metered
        meter_ct_rating: String, //if metered
        account_number: String, 
        tarrif: String, 
        tarrif_category: String,
        service_band: String,
        transformer_cap: String,
        installed_load: String,

    },
    user_id: [Number],

});


//Connects LaunchesSchema to the collection launches
module.exports = mongoose.model('CUSTOMERS', customerSchema);
const mongoose = require('mongoose');

const { Schema } = mongoose;

const customerSchema = new Schema({

    new_firstname: {
        type: String,
    },
    new_lastname: {
        type: String,
    },
    new_phone: {
        type: String,
    },

    address: {
        type: String,
    },
    new_address: {
        type: String,
    },

    new_mcb_number: {
        type: String,
    },

    type_rating: {
        type: String,
    },

    meter_number: {
        type: String,
    },

    BUID: {
        type: String,
    },

    ticketid: {
        type: String,
        required: true,
    },
    accountNo: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
  
    meterno: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
      },
    created_by:{
        type: Number,
    },
      updated_at: {
        type: Date,
        default: null
      },
    status: {
        type: String,
        default: 'pending',
    },
    meter_info: {
        multiplier: String,
        new_digit: String,
        new_meter_reading: String,
        new_account_type: String,
        new_fixed_demand: String,
        new_type_rating: String,
        new_welding: String,
        new_tarrif_code: String,
        new_consumption: String,
        new_mcb_number: String,
        new_read_code: String,
        new_status_code: String,
        new_rating: String,
    },
    meter_change_info: {
        new_meter_number: String,
        new_multiplier: String,
        new_no_of_digit: String,
        new_initial_reading: String,
        new_final_reading: String,
        new_old_meter_number: String,
    },
    meter_disconnection_section: {
        dis_meter_number: String,
        dis_final_meter_reading: String,
    },
    meter_reconnection: {
        re_meter_number: String,
        re_initial_meter_reading: String,
    }, 
    user_id: [Number],
});


//Connects LaunchesSchema to the collection launches
module.exports = mongoose.model('Customer', customerSchema);


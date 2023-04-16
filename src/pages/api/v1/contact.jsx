import axios from 'axios';
import config from '../../../../config';

export default async function handler(req, res) {

    const { email, subject, message } = req.body;

    if(!email || !subject || !message) {
        return res.json({
            status: false,
            message: 'Please fill all fields'
        })
    }

    const data = {
        email,
        subject,
        message
    }

    try {
        /**
         * @todo
         * Send email
         */

        res.json({
            status: true,
            message: 'Email sent'
        })
    }
    catch (err) {
        return res.json({
            status: false,
            message: err.message
        })
    }
}
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const moment = require('moment');
const db = require('../models')
const UserTracker = db.UserTracker

module.exports = class UserService {

        userTracking = async (id, ip, recurso, metodo, estado) => {

                try {
                        const body = {
                                userId: id,
                                ip: ip,
                                recurso: recurso,
                                metodo: metodo,
                                estado: estado
                        };
              
                        await UserTracker.create(body);
                        return true;
                } catch (error) {
                        console.error('Error en userTracking:', error);
                        return false;
                }
        };
              

}
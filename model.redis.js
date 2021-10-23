'use strict'

const client = require('./init.redis');

const get = async (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, result) => {
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}

const set = async (key, count) => {
    return new Promise((resolve, reject) => {
        client.set(key, count, (err, result) => {
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}

const incrby = async (key, count) => {
    return new Promise((resolve, reject) => {
        client.incrby(key, count, (err, result) => {
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}

const decrby = async (key, count) => {
    return new Promise((resolve, reject) => {
        client.decrby(key, count, (err, result) => {
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}

const exists = async (key) => {
    return new Promise((resolve, reject) => {
        client.exists(key, (err, result) => {
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}

const setnx = async (key, count) => {
    return new Promise((resolve, reject) => {
        client.setnx(key, count, (err, result) => {
            if(err){
                return reject(err)
            }
            resolve(result)
        })
    })
}


module.exports = {
    get,
    set,
    incrby,
    exists,
    setnx,
    decrby
}

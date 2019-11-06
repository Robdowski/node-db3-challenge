const db = require('../data/db-config.js')

const find = () => {
    return db.select('*').from('schemes')
}

const findById = (id) => {
    return db('schemes')
    .where({ id })
    .first()
}

const findSteps = id => {
    return db.select('*').from('steps')
    .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
    .where('schemes.id', Number(id))
}

const add = (scheme) => {
    return db('schemes')
    .insert(scheme)
}


/// THIS ONE IS STRETCH AND I CANNOT FIGURE IT OUT...
const addStep = (stepData, id) => {
    return db('steps')
    .where('steps.schemes_id', id)
    .insert({...stepData, id: id})
}

function remove(id) {
    return db('schemes')
      .where('id', Number(id))
      .del();
  }


function update(data, id) {
    return db('schemes')
    .where('id', id)
    .update(data)
}

module.exports = { find, findById, findSteps, add, addStep, remove, update }
const jwt = require('jsonwebtoken')
require('dotenv').config()
const APP_SECRET = process.env.APP_SECRET

// Create SendGrid Client
const sgMail = require('@sendgrid/mail')
// Set API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// Add template
const addMsg = (parentEmail, student, points, description) => {
  return {
    to: parentEmail,
    from: 'cbrown@email.com',
    templateId: 'd-35491377783442698cb6ea72a205115a',
    dynamic_template_data: {
      student: student,
      points: points,
      description: description
    }
  }
}
// Remove template
const removeMsg = (parentEmail, student, points, description) => {
  return {
    to: parentEmail,
    from: 'cbrown@email.com',
    templateId: 'd-63067e46d24345749062917d42bd2d25',
    dynamic_template_data: {
      student: student,
      points: points,
      description: description
    }
  }
}

const getUserId = context => {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }
  throw new Error('Not authenticated')
}

module.exports = {
  APP_SECRET,
  getUserId,
  sgMail,
  addMsg,
  removeMsg
}

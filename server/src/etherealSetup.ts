import nodemailer from 'nodemailer'

async function setupEthereal() {
  let testAccount = await nodemailer.createTestAccount()
  console.log(testAccount)
}

setupEthereal().catch(console.error)
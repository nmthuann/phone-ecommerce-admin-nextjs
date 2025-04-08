'use server'

import nodemailer from 'nodemailer'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD
  }
})

export async function sendMailWithNodemailer(email: string, sendTo: string, subject: string, html: string) {
  const info = await transporter.sendMail({
    from: email,
    to: sendTo,
    subject: subject,
    html: html
  })
  console.log('Message Sent', info.messageId)
  console.log('Mail sent to', sendTo)
  return info
}

export async function sendMailWithResend(sendTo: string, subject: string, html: string) {
  try {
    const info = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: sendTo,
      subject: subject,
      html: html
    })
    return info
  } catch (error) {
    console.error('Something Went Wrong', error)
    return
  }
}

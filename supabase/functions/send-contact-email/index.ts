import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, subject, message } = await req.json()

    // Store the contact submission in database
    const { data, error } = await fetch(`${Deno.env.get('SUPABASE_URL')}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
        'apikey': Deno.env.get('SUPABASE_ANON_KEY') || '',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
        created_at: new Date().toISOString()
      })
    })

    // Send email using Resend
    if (RESEND_API_KEY) {
      const emailBody = `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject || 'No subject'}
        
        Message:
        ${message}
        
        ---
        Submitted at: ${new Date().toLocaleString()}
      `

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contact Form <noreply@yourdomain.com>',
          to: ['leanosasanyane32@gmail.com'],
          subject: `New Contact: ${subject || 'Contact Form Submission'}`,
          text: emailBody,
        }),
      })

      if (!emailResponse.ok) {
        console.error('Failed to send email:', await emailResponse.text())
      }
    }

    return new Response(
      JSON.stringify({ message: 'Contact form submitted successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process contact form' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      requirementId,
      name,
      company,
      email,
      phone,
      destination,
      dates,
      groupSize,
      budget,
      services,
      notes
    } = req.body;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Naura Website <onboarding@resend.dev>',
        to: ['nauraevents.in@gmail.com'],
        subject: `New Website Enquiry - ${requirementId}`,
        html: `
          <h2>New Website Enquiry</h2>

          <p><strong>Requirement ID:</strong> ${requirementId}</p>
          <p><strong>Name:</strong> ${name || ''}</p>
          <p><strong>Company:</strong> ${company || ''}</p>
          <p><strong>Email:</strong> ${email || ''}</p>
          <p><strong>Phone:</strong> ${phone || ''}</p>
          <p><strong>Destination:</strong> ${destination || ''}</p>
          <p><strong>Dates:</strong> ${dates || ''}</p>
          <p><strong>Group Size:</strong> ${groupSize || ''}</p>
          <p><strong>Budget:</strong> ${budget || ''}</p>
          <p><strong>Services:</strong> ${Array.isArray(services) ? services.join(', ') : services || ''}</p>
          <p><strong>Notes:</strong> ${notes || ''}</p>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data?.message || 'Email could not be sent'
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Something went wrong while sending the email'
    });
  }
}

export async function onRequestPost({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Construct email payload for MailChannels
    const payload = {
      personalizations: [
        {
          to: [{ email: "jmichaelh@currently.com" }],
        },
      ],
      from: {
        email: "no-reply@insighthunter.app", // must be a verified domain
        name: "Insight Hunter Website",
      },
      subject: `New Contact Form Submission from ${name}`,
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        },
      ],
    };

    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return new Response("Message sent successfully!", { status: 200 });
    } else {
      return new Response("Failed to send message.", { status: 500 });
    }
  } catch (err) {
    return new Response("Error processing request: " + err.message, {
      status: 500,
    });
  }
}


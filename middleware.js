export default function middleware(request) {
  const url = new URL(request.url);
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // ONLY redirect your specific path
  if (url.pathname === '/dev/setup-7') {
    
    // List of bots that try to "peek" at links to show logos
    const isBot = /redditbot|facebookexternalhit|twitterbot|slackbot|whatsapp|telegrambot/i.test(userAgent);

    if (isBot) {
      // If it's a bot, let it pass through to see the boring index.html
      return; 
    }

    // If it's a real person, redirect them to WhatsApp automatically
    return Response.redirect('https://api.whatsapp.com/send?phone=918409500477&text=Interested%20in%20Gemini%20Pro%205TB', 302);
  }
}

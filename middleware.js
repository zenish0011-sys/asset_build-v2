import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // ONLY redirect your specific path
  if (url.pathname === '/logs/build-042') {
    
    // List of bots that try to "peek" at links to show logos
    const isBot = /redditbot|facebookexternalhit|twitterbot|slackbot|whatsapp|telegrambot/i.test(userAgent);

    if (isBot) {
      // If it's a bot, show them the index.html page (No logo!)
      return NextResponse.rewrite(new URL('/', request.url));
    }

    // If it's a real person, redirect them to WhatsApp automatically
    return NextResponse.redirect('https://api.whatsapp.com/send?phone=918409500477&text=Interested%20in%20Gemini%20Pro%205TB');
  }
}
import type { QueryItem } from '~/types'
export const apiurl= "http://localhost:3010"
export const QUERY_LIST = {
  movie: <QueryItem[]>([
    { type: 'movie', title: 'Kenya', query: 'popular' },
    { type: 'movie', title: 'Top Rated Movies', query: 'top_rated' },
    { type: 'movie', title: 'Upcoming Movies', query: 'upcoming' },
    { type: 'movie', title: 'Now Playing Movies', query: 'now_playing' },
  ]),
  tv: <QueryItem[]>([
    { type: 'tv', title: 'India', query: 'popular' },
    { type: 'tv', title: 'Top Rated TV Shows', query: 'top_rated' },
    { type: 'tv', title: 'TV Shows Airing Today', query: 'airing_today' },
  ]),
  tv2: <QueryItem[]>([
    { type: 'tv', title: 'Tanzania', query: 'popular' },
    { type: 'tv', title: 'Top Rated TV Shows', query: 'top_rated' },
    { type: 'tv', title: 'TV Shows Airing Today', query: 'airing_today' },
  ]),
  
  
}



export const countries = [{ "country": "Kenya", "continent": "Africa", "enable": true },
{ "country": "Tanzania", "continent": "Africa", "enable": true },
{ "country": "Botswana", "continent": "Africa", "enable": true },
{ "country": "South Africa", "continent": "Africa", "enable": true },
{ "country": "India", "continent": "Asia", "enable": true },
{ "country": "Nepal", "continent": "Asia", "enable": true },
{ "country": "Sri Lanka", "continent": "Asia", "enable": true },
{ "country": "Australia", "continent": "Oceania", "enable": true },
{ "country": "New Zealand", "continent": "Oceania", "enable": true },
{ "country": "Ecuador", "continent": "South America", "enable": true },
{ "country": "Peru", "continent": "South America", "enable": true },
{ "country": "Costa Rica", "continent": "North America", "enable": true },
{ "country": "Canada", "continent": "North America", "enable": true },
{ "country": "United States", "continent": "North America", "enable": true }];

export const staticpages={
  'termsConditions': {
    title: "Terms and Conditions for Wildlife Exploration",
    content: "<h2>Terms and Conditions for Wildlife Exploration</h2><p>Welcome to our wildlife exploration program! By participating in our activities, you agree to the following terms and conditions:</p><ol><li><strong>Respect for Nature:</strong> Always respect the natural environment and wildlife. Do not disturb or harm animals, plants, or their habitats.</li><li><strong>Guidelines and Regulations:</strong> Follow all guidelines and regulations set by local authorities and wildlife organizations. This includes restrictions on feeding, touching, or approaching wildlife.</li><li><strong>Environmental Responsibility:</strong> Dispose of waste properly and minimize your environmental impact. Leave no trace and strive to leave the environment in better condition than you found it.</li><li><strong>Safety Precautions:</strong> Prioritize safety at all times. Follow instructions from guides and experts, and avoid risky behavior that could endanger yourself or others.</li><li><strong>Conservation Efforts:</strong> Support conservation initiatives and contribute to the preservation of wildlife and their habitats. Learn about the importance of conservation and take action to protect biodiversity.</li></ol><p>By agreeing to these terms and conditions, you acknowledge your responsibility to uphold ethical and sustainable practices while enjoying wildlife experiences. Thank you for your commitment to protecting our planet's precious ecosystems.</p>"
  },
  "privacyPolicy": 
  { title: "Privacy Policy",
  content: "<h2>Privacy Policy</h2><p>This privacy policy sets out how our wildlife conservation organization uses and protects any information that you provide when you use our website.</p><p>We are committed to ensuring that your </p>"
},
"cancelPolicy": 
  { title: "Cancel Policy",
  content: "<h2>Cancel Policy</h2><p>This Cancel policy sets out how our wildlife conservation organization uses and protects any information that you provide when you use our website.</p><p>We are committed to ensuring that your </p>"
},
"aboutus": 
  { title: "About us",
  content: "<h2>About</h2><p>About sets out how our wildlife conservation organization uses and protects any information that you provide when you use our website.</p><p>We are committed to ensuring that your </p>"
},
}
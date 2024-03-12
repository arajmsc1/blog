import type { QueryItem } from '~/types'
export const apiurl= "https://3bhqyy-ip-183-82-177-163.tunnelmole.net"
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

import axios from 'axios'

export const FETCH_WP_PAGES = 'fetch_wp_pages'
export const FETCH_WP_POSTS = 'fetch_wp_posts'
export const SELECT_CHAPTER = 'select_chapter'
export const TOGGLE_MENU = 'toggle_menu'

// const BASE_URL = 'http://matt-evans-novel-react.dev'
const BASE_URL = 'http://api.aftertherevolution.us'

const PAGES_URL = `${BASE_URL}/wp-json/wp/v2/pages`
const POSTS_URL = `${BASE_URL}/wp-json/wp/v2/posts`
// const PAGES_URL = `${BASE_URL}/api/wp-json/wp/v2/pages`
// const POSTS_URL = `${BASE_URL}/api/wp-json/wp/v2/posts`

export function fetchWPpages(){
  const request = axios.get(PAGES_URL).then(res=>res)
  return {
    type: FETCH_WP_PAGES,
    payload: request
  }
}
export function fetchWPposts(){
  const request = axios.get(POSTS_URL).then(res=>res)
  return {
    type: FETCH_WP_POSTS,
    payload: request
  }
}
export function selectChapter(id){
  return{
    type:SELECT_CHAPTER,
    payload:id
  }
}
export function toggleMenu(bool){
  return{
    type:TOGGLE_MENU,
    payload:bool
  }
}

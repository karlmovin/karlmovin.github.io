import { supabase } from "../supabase";

const CACHE_KEY = 'books_cache';
const CACHE_DURATION = 1000 * 60 * 10; // 10 minuter

export async function fetchBooks() {
  try {
    // Kontrollera cache först
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        console.log("Använder cachade böcker");
        return data;
      }
    }

    // Om ingen cache finns eller den har gått ut, hämta från Supabase
    const { data, error } = await supabase.from("books").select();
    if (error) {
      console.error("Fel vid hämtning av böcker:", error);
      return;
    }

    // Spara i cache
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }));

    console.log("Böcker hämtade framgångsrikt:", data);
    return data;
  } catch (error) {
    console.error("Ett oväntat fel inträffade:", error);
  }
}

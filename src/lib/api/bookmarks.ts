import { supabase } from "../supabase";

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  description?: string;
  tags: string[];
  created_at: string;
};

export async function fetchBookmarks(): Promise<Bookmark[]> {
  try {
    const { data, error } = await supabase
      .from("bookmarks")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookmarks:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Error in fetchBookmarks:", error);
    return [];
  }
}

export async function addBookmark(
  bookmark: Omit<Bookmark, "id" | "created_at">
): Promise<Bookmark | null> {
  try {
    const { data, error } = await supabase
      .from("bookmarks")
      .insert([bookmark])
      .select()
      .single();

    if (error) {
      console.error("Error adding bookmark:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error in addBookmark:", error);
    return null;
  }
}

export async function updateBookmark(
  id: string,
  updates: Partial<Bookmark>
): Promise<Bookmark | null> {
  try {
    const { data, error } = await supabase
      .from("bookmarks")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating bookmark:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error in updateBookmark:", error);
    return null;
  }
}

export async function deleteBookmark(id: string): Promise<boolean> {
  try {
    const { error } = await supabase.from("bookmarks").delete().eq("id", id);

    if (error) {
      console.error("Error deleting bookmark:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error in deleteBookmark:", error);
    return false;
  }
}

import { supabase } from "./supabase";

interface DataItem {
  id: number;
  [key: string]: unknown;
}

// Exempel på hur man hämtar data
export async function fetchData() {
  const { data, error } = await supabase.from("din_tabell").select("*");

  if (error) {
    console.error("Error:", error);
    return null;
  }

  return data;
}

// Exempel på hur man lägger till data
export async function insertData(newData: Omit<DataItem, "id">) {
  const { data, error } = await supabase
    .from("din_tabell")
    .insert([newData])
    .select();

  if (error) {
    console.error("Error:", error);
    return null;
  }

  return data;
}

// Exempel på hur man uppdaterar data
export async function updateData(id: number, updates: Partial<DataItem>) {
  const { data, error } = await supabase
    .from("din_tabell")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Error:", error);
    return null;
  }

  return data;
}

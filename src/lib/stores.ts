// src/lib/stores.ts
import { writable } from 'svelte/store';

interface Header {
  text: string;
  id: string;
}

export const headers = writable<Header[]>([]);

export function clearHeaders() {
  headers.set([]);
}

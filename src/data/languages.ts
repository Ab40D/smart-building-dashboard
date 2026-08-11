// Languages. Only levels supported by the source CV are used — no guessing.

export type Language = {
  name: string
  level: string
}

export const languages: Language[] = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'B1' },
  { name: 'English', level: 'Working proficiency — improving toward C1' },
]

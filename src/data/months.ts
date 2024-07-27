export const months = [
  { name: "Janeiro", number: 1 },
  { name: "Fevereiro", number: 2 },
  { name: "Março", number: 3 },
  { name: "Abril", number: 4 },
  { name: "Maio", number: 5 },
  { name: "Junho", number: 6 },
  { name: "Julho", number: 7 },
  { name: "Agosto", number: 8 },
  { name: "Setembro", number: 9 },
  { name: "Outubro", number: 10 },
  { name: "Novembro", number: 11 },
  { name: "Dezembro", number: 12 },
  { name: "Todos", number: 0 },
];

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

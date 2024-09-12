export default function formatDate(inputDateString: string): string {
  const date = new Date(inputDateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

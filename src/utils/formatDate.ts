
const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
];

export function formatDate(date: Date): string {
    const d = new Date(date)
    return `${d.getUTCDate()} ${meses[d.getUTCMonth() + 1]} ${d.getUTCFullYear()}`
}
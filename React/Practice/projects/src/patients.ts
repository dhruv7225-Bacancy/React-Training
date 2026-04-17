import type { Patient, Visit } from "./types";

export const patients: Patient[] = [
  { id: 1, name: "Aarav Sharma", height: 172 },
  { id: 2, name: "Riya Patel", height: 160 },
  { id: 3, name: "Kabir Singh", height: 180 },
];
export const visits: Visit[] = [
  { id: 1, patientId: 1, date: "2024-01-10", weight: 68, doctor: "Dr. Mehta" },
  { id: 2, patientId: 1, date: "2024-02-15", weight: 70, doctor: "Dr. Mehta" },
  { id: 3, patientId: 1, date: "2024-03-20", weight: 69, doctor: "Dr. Shah" },

  { id: 4, patientId: 2, date: "2024-01-05", weight: 55, doctor: "Dr. Shah" },
  { id: 5, patientId: 2, date: "2024-02-10", weight: 54, doctor: "Dr. Shah" },

  { id: 6, patientId: 3, date: "2024-01-12", weight: 75, doctor: "Dr. Verma" },
  { id: 7, patientId: 3, date: "2024-02-18", weight: 78, doctor: "Dr. Verma" },
];
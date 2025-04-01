import { fetchCases, fetchCaseDetails } from "../service/serviceHome";

export const getCasesWithDetails = async (
  name: string,
  ageRangeStart: number,
  ageRangeEnd: number,
  gender: string,
  page: number
) => {
  const { cases, totalPages } = await fetchCases(name, ageRangeStart, ageRangeEnd, gender, page);
  const caseDetails = await fetchCaseDetails(cases);

  return { cases, totalPages, caseDetails };
};

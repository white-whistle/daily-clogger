import { generateDateRange } from "./util/generateDateRange";

export const START_DATE = new Date('11/15/2024');
export const END_DATE = new Date();

export const POST_DATES = generateDateRange(START_DATE, END_DATE);
import { createSelector } from "@reduxjs/toolkit";

export const selectStatusFilter = (state) => state.filter.filter;

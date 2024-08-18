import { createSelector } from "@reduxjs/toolkit";
import { selectStatusFilter } from "../filter/selectors";
// src/redux/selectors.js
export const selectorContacts = (state) => state.contacts.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.contacts.filter;

export const selectFilteredContactsMemo = createSelector(
  [selectorContacts, selectStatusFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }
);

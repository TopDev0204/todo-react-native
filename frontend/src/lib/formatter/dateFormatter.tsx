/* eslint-disable no-console */
import moment from 'moment';

const convertMMMM_Do_YYYY = (date: string) => {
  return moment(date).format("MMMM Do YYYY");
};

const convertDD_MMMM_YYYY_HH_mm_a = (date: string) => {
  return moment(date).format("DD MMMM YYYY HH:mm a");
};

const convertHH_mm_a = (date: string) => {
  return moment(date).format("hh:mm a");
};

const convertMMM_YYYY = (date: string) => {
  return moment(date).format("MMM YYYY");
};

const convertYYYY_MM = (date: string) => {
  return moment(date).format("YYYY-MM");
};

const convertDD_MMMM_YYYY = (date: string) => {
  return moment(date).format("DD MMMM YYYY");
};

const convertDD_MM_YYYY = (date: string) => {
  return moment(date).format("DD-MM-YYYY");
};

const convertMMM_DD = (date: string) => {
  return moment(date).format("MMM'DD");
};

const convertMMMM_DD_YYYY = (date: string) => {
  return moment(date).format("MMMM DD,YYYY");
};

const convertYYYY_MM_DD = (date: string) => {
  if (date) {
    return moment(date).format("YYYY-MM-DD");
  } else {
    return ''
  }
};

const timeAgo = (date: string) => {

  return moment(date).startOf('seconds').fromNow()
}

const timeInWeek = (start: string, end: string) => {
  var start1 = new Date(start.toString());
  var end1 = new Date(end.toString());
  var Difference_In_Days = Math.floor(
    (Date.UTC(end1.getFullYear(), end1.getMonth(), end1.getDate()) -
      Date.UTC(start1.getFullYear(), start1.getMonth(), start1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
  return Difference_In_Days / 7;
}

export default {
    convertMMMM_Do_YYYY,
    convertDD_MMMM_YYYY_HH_mm_a,
    convertHH_mm_a,
    timeAgo,
    convertMMM_YYYY,
    convertYYYY_MM,
    convertDD_MMMM_YYYY,
    convertDD_MM_YYYY,
    convertMMMM_DD_YYYY,
    convertYYYY_MM_DD,
    convertMMM_DD,
    timeInWeek
};

import React from 'react';

function Table({ users }) {
    function formatDate(date) {
        const newDate = date.slice(0, 10);
        const YYYY = newDate.slice(0, 4);
        const MM = newDate.slice(5, 7);
        const DD = newDate.slice(8, 10);
        const formattedDate = MM + '/' + DD + '/' + YYYY;
        return formattedDate;
    }

    retur
}
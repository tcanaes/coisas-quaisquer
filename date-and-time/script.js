//Cria um objeto com os dados do "agora"
const date = new Date();
console.log('Agora é: ', date);

//The time-zone offset is the difference, in minutes, between UTC and local time.
//Note that this means that the offset is positive if the local timezone is
//behind UTC and negative if it is ahead.
const timezoneOffsetMin = date.getTimezoneOffset();
const timezoneOffsetHr = timezoneOffsetMin / 60;
console.log('Timezone local é: ', timezoneOffsetHr);

const timezoneOffsetInMillisecconds = timezoneOffsetMin * 60000;

console.log(new Date(Date.now() - timezoneOffsetInMillisecconds).toISOString());

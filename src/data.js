export const API_KEY = 'AIzaSyAylCaWz0HuBY4KbuEa3QEtOpqrcmSlu28';

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"M";
    }
    else{
        return value;
    }
}
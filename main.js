const dayNumber = parseInt(prompt("1 dan 7 gacha bolgan son kiriting:"));
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Dushanba";
        break;
    case 2:
        dayName = "Seyshanba";
        break;
    case 3:
        dayName = "Chorshanba";
        break;
    case 4:
        dayName = "Payshanba";
        break;
    case 5:
        dayName = "Juma";
        break;
    case 6:
        dayName = "Shanba";
        break;
    case 7:
        dayName = "Yakshanba";
        break;
    default:
        dayName = "Bunday kun yo'q";
}

console.log(dayName);
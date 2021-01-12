module.exports = {
    letterCaseGenerator(data, arg) {
        let Title = "";
        let input = "";
        if (arg === ("Not case sensitive")) {
            input = data;
        } else if (arg === ("Uppercase (ABC)")) {
            input = data.toUpperCase();
        } else if (arg === ("Lowercase (abc)")) {
            input = data.toLowerCase();
        } else if (arg === ("Sentence case (Abc)")) {
            input = data.substring(0, 1).toUpperCase() + data.substring(1).toLowerCase();
        } else if (arg === "Title case (Abc Bcd)") {
            let words = data.split(" ");
            for (let i = 0; i < words.length; i++) {
                Title = Title + words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();
                if (!(i + 1 === words.length)) {
                    Title = Title + " ";
                }
            }
            input = Title;
        }
        return input
    },
};

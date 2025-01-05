function longest_common_prefix(strs) {
    let longest_prefix = "";
    const lens = strs.map((s) => s.length);
    const min_len = Math.min(...lens);
    for (let i = 0; i < min_len; i++) {
        const chars_set = new Set(strs.map((s) => s[i]));
        if (chars_set.size == 1) { longest_prefix += strs[0][i]; }
        else { break; }
    }
    return longest_prefix;
};

function reveal_ans(selected_input, correct_values) {
    // if selected_input is undefined, return
    if (selected_input === undefined) { return; }
    // get the correct value of the selected input
    let correct_ans = correct_values[selected_input.id];
    // if correct_ans is empty, return
    if (correct_ans.length === 0) { return; }
    // select a random correct value
    const random_index = Math.floor(Math.random() * correct_ans.length);
    selected_input.value = correct_ans[random_index];
}

function check_answer(correct_values, PREFERRED_COLOR_SCHEME) {
    // get all values from inputs of class "ans"
    let inputs = document.getElementsByClassName("ans");
    // loop through all inputs, printing their id and value
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        // console.log(input.id, input.value);
        // if the value is empty after clearing whitespace, set the background color to original
        if (input.value.trim() === "") {
            input.style.backgroundColor = (PREFERRED_COLOR_SCHEME === "dark") ? "var(--input-bg-dark)" : "var(--input-bg-light)";
            input.value = "";
        }
        else {
            // remove the stress mark from the input value; set both input value and correct value to lowercase
            let input_value = input.value.replace(/́/g, "").toLowerCase();
            let correct_choices = correct_values[input.id].map(choice => choice.toLowerCase()); // list of correct choices, to lowercase
            // if the value is not empty, check if it is correct by see if it matches any of the correct values
            if (correct_choices.includes(input_value)) {
                // if it is correct, set the background color to green
                input.style.backgroundColor = (PREFERRED_COLOR_SCHEME === "dark") ? "var(--input-bg-correct-dark)" : "var(--input-bg-correct-light)";
            } else {
                // if it is incorrect, set the background color to light red
                input.style.backgroundColor = (PREFERRED_COLOR_SCHEME === "dark") ? "var(--input-bg-incorrect-dark)" : "var(--input-bg-incorrect-light)";
            }
        }
    }
}
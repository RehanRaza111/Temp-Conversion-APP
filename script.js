
const calculateTemp = () => {
    
    const numTemp = document.getElementById('temp').value;
    // console.log(numTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);


    const celToFah = (cel) => {
        let farenheit = Math.round((cel * 9 / 5) + 32);
        return farenheit;
    }
    const FahToCel = (feh) => {
        let celsius = Math.round((feh-32) *5/9);
        return celsius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numTemp);
        document.getElementById('resultContainer').innerHTML = `
        = ${result} °Farenheit`;
    } else {

        result = FahToCel(numTemp);
        document.getElementById('resultContainer').innerHTML = `
        = ${result} °Celsius`;
        
    }


}

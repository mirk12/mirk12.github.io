let col = document.querySelectorAll('.col');
let check = 'X';
let counter = 0;
start(col)

function start(colH) {
    for (let i of colH) {
        i.addEventListener('click', () => {
            if (i.textContent == '') {
                if (check == 'X') {
                    i.textContent = 'X';
                    check = 'O';
                } else if (check == 'O') {
                    i.textContent = 'O';
                    check = 'X';
                }
                if (win(colH) == true) {
                    alert(i.textContent)
                    location.reload();
                } else if(counter == 8){
                    alert('Ничья')
                    location.reload();
                }
            }
            counter++;
        });

    }

}


function win(col) {
    let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

    for (let comb of combs) {
        if (
            col[comb[0]].textContent == col[comb[1]].textContent &&
            col[comb[1]].textContent == col[comb[2]].textContent &&
            col[comb[0]].textContent != ''
        ) {
            return true;
        }
    }
    return false;
}
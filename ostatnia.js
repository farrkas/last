Array.prototype.last = function () {
    const a = [...this];
    a.reverse();
    console.log(a[0]); //return a[0];
    console.log(this); //sprawdzenie, że nie zmieniłem tablicy wejściowej
};


[1, 'sth', true, `ostatnia wartość`].last();
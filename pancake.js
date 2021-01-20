function cooking(n, k) {
    let p = 0;                                      //  p - готовый pancake
    let s = n * 2;                                  //  s - количество сторон блинов
    let x = 0;                                      //  x - блины, которые не влезают на сковородку
    let i = 0;                                      //  i - счетчик итерраций
    for (i; s !== 0 ; i++) {
        if (k > n*2 || s === k) {
            p += n
            n -= n;
            s -= s;
        } else {
            if (k > n) {
                n = k - n;
                p += k;
                s -= k;
            } else {
                if ( n % k && n >= k) {
                    x += n - k;
                    n -= x;
                    s -= k
                } else {
                    p += 1;
                    n -= 1;
                    n += 1;
                    x ? x -= 1 : x = 0;
                    if (k % s) s -= k;
                }
            }
        }
    }
    if (n/p === 0) {
        console.log(s, x, i)
        return i;
    }
}

cooking(3, 2)

//  В реальной жизни я конечно не стал бы так жарить блинчики, но если требуется скорость, то:
// 1) Первая итеррация это 2 стороны первых двух блинов
// 2) Далее переворачиваем 1 блин, второй блин убираем и кладем взаместо него третий
// 3) Убираем первый блин - он готов. Перевораиваем третий - тот, который положили последним,
// и докладываем недопеченый второй блин. Итого 3 минуты.

// По поводу алгоритма. Опыта у меня не много в алгоритмах, это то, что смог придумать.
// Можно конечно переписать на функции или класс под разные параметры, но функция получилась не очень большая,
// от классов толку здесь особого нет. Работает все шустро